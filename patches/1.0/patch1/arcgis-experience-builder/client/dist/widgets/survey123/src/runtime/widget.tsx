/** @jsx jsx */
import { BaseWidget, DataSourceManager, SessionManager, DataSource, DataSourceStatus, Immutable } from 'jimu-core';
import { AllWidgetProps, jsx, moduleLoader } from 'jimu-core';

import { WidgetPlaceholder } from 'jimu-ui';
import { IMConfig } from '../config';
import { DataSourceTypes, JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import { survey123Service, Survey123Message } from '../service/survey123.service';
import { getStyle } from './css/style';
import defaultMessages from './translations/default';

import Extent = require('esri/geometry/Extent');
import Query = require('esri/tasks/support/Query');
import SpatialReference = require('esri/geometry/SpatialReference');

/**
 * survey123 widget
 */
export default class Widget extends BaseWidget<AllWidgetProps<IMConfig>, any>{
  /**
   * survey123webform iframe
   */
  public survey123webform: any;   
  public webform: any; // the instance of survey123 webform from jsapi
  public iframeContainer: any;
  public API: any = {
    Survey123WebForm: null
  };
  public domId: string;
  public iconSurvey123 = require('./assets/icon.svg');
  // showDiffLog = true;

  public state = {
    featureLayerViewDS: null
  };

  private _dsManager = DataSourceManager.getInstance();
  private _isMapViewAddedClickEvent: boolean = false;
  private _mapViewDSFromFeatureLayerView: any; //todo: should remove this variable
  private _mapView: __esri.MapView;
  private _formOption: any;
  private _clientId: any;
  // private _extentWatch: __esri.WatchHandle;
  // private _cachedTimeStamp: number = this.props.config.timestamp;

  constructor(props) {
    super(props);
    this.getClientId();

    /**
     * listen survey123 webform event
     */
    this.listenSurvey123WebformEvent();
  }

  componentDidMount(){
    this.loadSurveyAPI();
  }

  // load survey api
  loadSurveyAPI = () => {
    const apiUrl = survey123Service.getSurvey123HostAPIUrl();
    if (!this.API.Survey123WebForm) {
      return moduleLoader.loadModule(apiUrl)
        .then((Survey123WebForm) => {
          this.API = Survey123WebForm;
          // this.API.Survey123WebForm = Survey123WebForm;
          return Survey123WebForm;
        });
    } else {
      return Promise.resolve(this.API.Survey123WebForm );
    }
  }

  updateDomId = () => {
    this.domId = 'survey_container_' + new Date().getTime();   // todo: maybe should add widget id?
    return this.domId; 
  }

  // listen the map click 
  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if(jimuMapView && jimuMapView.view) {
      this._mapView = jimuMapView.view as __esri.MapView;
      this._mapView.when(() => {
        this._mapView.on('click', this.onMapClick);
      });
    }
    
  }

  // event listener of the click event of map view
  onMapClick = (screenPoint) => {
    this._mapView.hitTest(screenPoint).then(response => {
      if (response.results.length) {
        response.results.forEach(result => {
          const graphic = result.graphic;
          const layerId = graphic.layer.id;
          if (this.props.useDataSources[0].rootDataSourceId + '-' + layerId !== this.props.useDataSources[0].dataSourceId) {
            return;
          }
          const layer = graphic.layer as __esri.FeatureLayer;
          const objectIdField = layer.objectIdField || 'objectid';
          const query = new Query({
            where: `${objectIdField} = ${graphic.attributes[objectIdField]}`,  
            outFields: ['*'],
            returnGeometry: true,
            outSpatialReference: new SpatialReference({wkid: 4326})
          })

          layer.queryFeatures(query).then((results) => {
            if (results.features && results.features[0]) {
              this.featureLayerViewHandler(results.features[0]);
            }
          });
        });
      }
    });
  }

  /**
   * get used data source
   */
  getUsedDataSource() {
    const dataSources = this.props.useDataSources;
    let ds = null;

    if (dataSources && dataSources.length > 0) {
      const dataSourceId = dataSources[0].dataSourceId;
      ds = this._dsManager.getDataSource(dataSourceId);
    }
    return ds;
  }

  /**
   * isDsConfigured
   */
  isDsConfigured = () => {
    if (this.props.useDataSources &&
      this.props.useDataSources.length === 1 && this.props.config.activeLinkData) {
      return true;
    }
    return false;
  }

  /**
   * do feature layer query to get layer's features in the map extent
   */
  doQuery = (extent: Extent) => {
    const q = {
      geometry: extent,
      spatialRelationship: 'intersects',
      returnGeometry: true
    };
    if (this.getUsedDataSource().getStatus() !== DataSourceStatus.Loading) {
      this.getUsedDataSource().load(q);
    }
  }

  /**
   * map view handler
   */
  mapViewHandler(ds: any) {
    if (ds && ds.view && this._isMapViewAddedClickEvent === false) {
      /**
       * add click event on the map view
       */
      const mapView = ds.view;
      mapView.on('click', (e: any) => {
        const mapPoint = mapView.toMap({ x: e.x, y: e.y });
        if (mapPoint) {
          const lat = mapPoint.latitude;
          const lng = mapPoint.longitude;

          this.postMessageToSurvey123Webform({
            event: 'survey123:onDrawEnd',
            data: {
              x: lng,
              y: lat
            }
          });
        }
      });
      this._isMapViewAddedClickEvent = true;
    }
  }

  /**
   * feature layer view handler
   */
  featureLayerViewHandler(graphic: any, ds?: any) {
    let feature = null;
    if (graphic) {
      feature = graphic;
    } else if (ds && ds.getSelectedRecords()) {
      const selectedRecords = ds.getSelectedRecords()
      feature = selectedRecords > 0 ? selectedRecords[0] : null;
    }
    // let feature = (selectedRecords[0] as FeatureDataRecord).feature;
    if (this.props.config.activeLinkData && this.props.config.fieldQuestionMapping) {
      const attr = feature.attributes || {};  // the attribute of the selected record
      const dataParams = {};
      let geoParams = {};
      let hasGemetryLink = false;
      this.props.config.fieldQuestionMapping.forEach((item) => {
        const field = item.field;
        const questionName = item.question;
        if (field === 'geometry') {
          hasGemetryLink = true;
          const geometry: any = feature.geometry;
          if (geometry && (geometry.y || geometry.y === 0) && (geometry.x || geometry.x === 0)) {
            // dataParams.push(`center=${geometry.y},${geometry.x}`);
            geoParams = {
              x: geometry.x,
              y: geometry.y
            };
          }
        } else {
          const val = attr[field];
          dataParams[questionName] = val || '';
          // dataParams.push(`field:${questionName}=${val || ''}`);
        }
      })

      if (dataParams) {
        // call survey jsapi to change value on-fly
        this.webform.setQuestionValue(dataParams);
      }
      if (hasGemetryLink) {
        this.webform.setGeopoint(geoParams);
      }


    }
  }

  /**
   * listen survey123 webform event by iframe message
   */
  listenSurvey123WebformEvent() {
    const eventHandler = (evt: any) => {
      if (evt && evt.data) {
        let payload;
        try {
          if (typeof evt.data === 'string') {
            payload = JSON.parse(evt.data);
          } else if (evt.data && evt.data.payload){
            if (typeof evt.data.payload === 'string') {
              payload = JSON.parse(evt.data.payload);
            } else {
              payload = evt.data.payload;
            }
          } else {
            payload = evt.data;
          }
          
        } catch (err) {
          console.error(err);
        }
        // console.log(payload)
        const event = payload.event;
        const data = payload.data;

        if (event === 'survey123:onDrawPoint') {
          this.onDrawPoint(data);
        }

        if (event === 'survey123:onFormLoaded') {
          if (event === 'survey123:onFormLoaded' && payload.contentHeight) {
            /**
             * set iframe height
             */
            // this.iframeContainer.style.height = `${payload.contentHeight - 50}px`;
            // this.iframeContainer.style['padding-bottom'] = 'auto';
          }
        }

        if (event === 'survey123:onSubmitted') {
          console.log('survey123:onSubmitted!', data);
        }
      }
    };

    if (window.addEventListener) {
      window.addEventListener('message', eventHandler, false);
    } else {
      window['attachEvent']('onmessage', eventHandler);
    }
  }

  /**
   * get client id (for webform js api)
   */
  getClientId() {
    const session = SessionManager.getInstance().getMainSession();
    this._clientId = 'survey123hub';
    if (session && session.clientId && session.clientId !== 'experienceBuilder') {
      this._clientId = session.clientId;
    }
  }

  /**
   * on draw point
   */
  onDrawPoint(data?: any) {
    console.log('start draw point');

    if (this._mapViewDSFromFeatureLayerView) {
      this.mapViewHandler(this._mapViewDSFromFeatureLayerView);
    }
  }

  /**
   * post message to survey123 webform
   */
  postMessageToSurvey123Webform(payload: Survey123Message) {
    if (this.survey123webform && this.survey123webform.contentWindow) {
      this.survey123webform.contentWindow.postMessage(JSON.stringify(payload), '*')
    } else {
      console.log('cannot find survey123webform iframe contentWindow!');
    }
  }

  /**
   * build config for survey jsapi
   */
  buildWebFormConfig() {
    const config = this.props.config;

    const option: any = {
      clientId: this._clientId || 'survey123hub',
      container: this.domId || this.updateDomId(),
      itemId: config.surveyItemId,
      // portalUrl: 'https://devext.arcgis.com',
      // token: '',
      // hideElements: ['navbar'],
      autoRefresh: 3,
      isDebugMode: 'production' !== 'production'
      // defaultValue: {
      //   'field_1': 'werewrwewer'
      // },
    };

    // portal url
    const portalUrl = config.portalUrl || this.props.portalUrl || 'https://www.arcgis.com';
    if (portalUrl === 'https://www.arcgis.com' ) {
      option.portalUrl = portalUrl;
    }

    // token
    const token = this.props.token;
    if (token) {
      option.portalUrl = portalUrl;
      option.token = token;
    }

    /**
     * hide url params
     */
    const hides = config.hides || Immutable(['navbar', 'header', 'description', 'footer', 'theme']);
    if (hides.length > 0) {
      option.hideElements = hides;
    }

    /**
     * default value
     */
    const defaultValue = config.defaultValue;
    if (defaultValue && typeof defaultValue === 'object' && defaultValue !== null && defaultValue !== undefined) {
      option.defaultValue = defaultValue;
    }

    // surveyStatusCode will change after survey republished
    const code = this.props.stateProps ? this.props.stateProps.surveyStatusCode : 0;
    if (code) {
      option.surveyStatusCode = code;
    }
    
    return option;
  }

  /**
   * get webform url
   */
  getWebformUrl(): string {
    const config = this.props.config;

    /**
     * params
     */
    const surveyItemId = config.surveyItemId;
    const portalUrl = config.portalUrl || this.props.portalUrl || 'https://www.arcgis.com';
    let webformUrl: string = null;

    if (surveyItemId) {
      /**
     * url params
     */
      const urlParams: string[] = [];

      /**
       * portalUrl
       */
      if (portalUrl !== 'https://www.arcgis.com') {
        urlParams.push(`portalUrl=${portalUrl}`);
      }
      if (survey123Service.getSurvey123HostUrl() === 'https://survey123dev.arcgis.com' && portalUrl === 'https://www.arcgis.com') {
        urlParams.push(`portalUrl=${portalUrl}`);
      }

      /**
       * embed url params
       */
      let embeds = config.embeds || []; // || ['fullScreen', 'onSubmitted', 'associatedMap'];
      if (embeds.indexOf('jsapi') === -1) {
        embeds = embeds.concat(['jsapi']); // from 3.7, we must to add embed=jsapi to let postMessage: setParams work
      }
      if (embeds.indexOf('onSubmitted') === -1) {
        embeds = embeds.concat(['onSubmitted']);
      }
      if (embeds.length > 0) {
        urlParams.push(`embed=${embeds.join(',')}`);
      }

      /**
       * hide url params
       */
      const hides = config.hides || ['navbar', 'header', 'description', 'footer', 'theme'];
      if (hides.length > 0) {
        urlParams.push(`hide=${hides.join(',')}`);
      }

      /**
       * default value
       */
      const defaultValue = config.defaultValue;
      if (defaultValue && typeof defaultValue === 'object' && defaultValue !== null && defaultValue !== undefined) {
        Object.keys(defaultValue).forEach((key) => {
          urlParams.push(`field:${key}=${defaultValue[key]}`);
        });
      }

      /**
       * open mode
       */
      const open = config.open || 'web';
      const openWhiteLists = ['web', 'menu', 'native'];
      if (open && open !== 'web' && openWhiteLists.indexOf(open) !== -1) {
        urlParams.push(`open=${open}`);
      }

      /**
       * token
       * we can add token in url params to avoid login in survey123 webform
       * TODO:
       * need to ask Junshan how to get user token in the widget
       */
      const token = this.props.token;
      if (token) {
        urlParams.push(`token=${token}`);
      }

      /**
       * need to set version >=3.2 to use hide and embed params
       */
      urlParams.push('version=latest');

      /**
       * add autoRefresh=3
       * to auto refresh in 3s after submit
       */
      urlParams.push('autoRefresh=3');

      /**
       * add timestamp randon params to ensure the iframe can refresh correctly
       * only when timestamp is different
       */
      // let configTimestamp = config.timestamp;
      // if (configTimestamp && this._cachedTimeStamp !== configTimestamp) {
      //   this._cachedTimeStamp = configTimestamp;
      // }
      // urlParams.push(`timestamp=${this._cachedTimeStamp}`);
      
      /**
       * webform url
       */
      webformUrl = survey123Service.getSurvey123WebformUrl(surveyItemId, {
        queryParams: urlParams
      });
    }

    return webformUrl;
  }

  /**
   * data source renderer
   */
  dataRender = (ds: DataSource) => {
    /**
     * if mapView datasource
     */
    if (ds.type === DataSourceTypes.WebMap) {
      this.mapViewHandler(ds);
    }

    /**
     * if featurelayerView datasource
     */
    if (ds.type === DataSourceTypes.FeatureLayer) {
      this.featureLayerViewHandler(null, ds);
    }

    return <div></div>
  }

  /**
   * check the webform option change
   */
  checkWebformOptionChanged = (newOption) => {
    const cachedOption = this._formOption;
    if (Object.is(cachedOption, newOption)) {
      return false;
    }
    if (!cachedOption && newOption) {
      return true;
    }
    if (cachedOption.surveyItemId !== newOption.surveyItemId 
      || cachedOption.portalUrl !== newOption.portalUrl
      || cachedOption.token !== newOption.token 
      || cachedOption.surveyStatusCode !== newOption.surveyStatusCode
      || (cachedOption.hideElements ? cachedOption.hideElements.asMutable() : []).sort().join(',') !== (newOption.hideElements ? newOption.hideElements.asMutable() : []).sort().join(',')) {
      return true;
    }
    return false;
  }

  /**
   * render ds
   */
  renderDS() {
    /**
     * because we're now calling the survey jsapi to create/updat the survey webform
     * we need to detect webform option change
     * if the the surveyId/hideElements/token/portalUrl is changed, we should recreate the webform
     * if the default value changed, or the entire option is not changed at all, do not recreate the webform
     */
    let dsId = null;
    let rootDsId = null;
    const options = this.buildWebFormConfig();
    if (this.isDsConfigured()) {
      /**
       * get used data source
       */
      dsId = this.props.useDataSources[0].dataSourceId;
      rootDsId = this.props.useDataSources[0].rootDataSourceId;
    }
    const needRecreateWebform = this.checkWebformOptionChanged(options);
    this._formOption = options;
    const webformUrl = this.getWebformUrl();
    if (webformUrl && (!this.webform || needRecreateWebform)) {
      const formNode = document.querySelector('#' + this.domId);
      if (formNode) {
        document.querySelector('#' + this.domId).innerHTML = ''; // clear the webform and reload
        this.webform = null;
      }
      this.loadSurveyAPI()
        .then(() => {
          this.webform = new this.API.Survey123WebForm(options);
          return true;
        });
    }

    if (dsId && rootDsId && this.isDsConfigured()) {
      // return <DataSourceComponent useDataSource={this.props.useDataSources[0]}>
      //   {
      //     this.dataRender
      //   }
      // </DataSourceComponent>
      return <JimuMapViewComponent useMapWidgetIds={this.props.useMapWidgetIds} onActiveViewChange={this.onActiveViewChange} ></JimuMapViewComponent>
    }

    return <div></div>;
  }

  /**
   * render
   */
  render() {
    const webformUrl = this.getWebformUrl();
    // let options = this.buildWebFormConfig();
    let result;

    /**
     * if no webformUrl
     */
    if (!webformUrl) {
      result = <div className="survey123__noSurvey">
        <WidgetPlaceholder icon={this.iconSurvey123} message={this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })} widgetId="" />
      </div>
    } else {
      if (!this.domId) {
        this.updateDomId();
      }
      result = <div className="survey123__webform">
        <div className="embed-container" id={this.domId}></div>
        {/* <div className="embed-container" ref={(f) => this.iframeContainer = f}>
          <iframe name="survey123webform" width="500" height="400" src={webformUrl} ref={(f) => this.survey123webform = f}></iframe>
        </div> */}
        {
          //<iframe src={webformUrl} name="survey123webform" ref={(f) => this.survey123webform = f}></iframe>
        }
      </div>
    }

    /**
     * html
     */
    return <div css={getStyle(this.props.theme)} className="survey123">
      {
        result
      }
      {
        /*
         * render ds
         */
        this.renderDS()
      }
    </div>

  }
}
