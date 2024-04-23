System.register(["jimu-arcgis","jimu-core","jimu-core/data-source","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector","jimu-ui/basic/list-tree"],(function(e,t){var i={},o={},s={},a={},n={},l={},r={},c={},d={},p={},u={},m={},g={},h={},v={};return{setters:[function(e){i.MapViewManager=e.MapViewManager},function(e){o.AllDataSourceTypes=e.AllDataSourceTypes,o.CONSTANTS=e.CONSTANTS,o.ContainerType=e.ContainerType,o.DataSourceComponent=e.DataSourceComponent,o.DataSourceManager=e.DataSourceManager,o.DataSourceStatus=e.DataSourceStatus,o.DataSourceTypes=e.DataSourceTypes,o.DialogMode=e.DialogMode,o.ExpressionPartType=e.ExpressionPartType,o.Immutable=e.Immutable,o.JimuFieldType=e.JimuFieldType,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.LinkType=e.LinkType,o.LoadingType=e.LoadingType,o.MultipleDataSourceComponent=e.MultipleDataSourceComponent,o.OrderRule=e.OrderRule,o.PagePart=e.PagePart,o.PageType=e.PageType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ServiceManager=e.ServiceManager,o.SessionManager=e.SessionManager,o.SupportedUtilityType=e.SupportedUtilityType,o.UtilityManager=e.UtilityManager,o.appConfigUtils=e.appConfigUtils,o.cancelablePromise=e.cancelablePromise,o.classNames=e.classNames,o.css=e.css,o.dataSourceUtils=e.dataSourceUtils,o.defaultMessages=e.defaultMessages,o.esri=e.esri,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.injectIntl=e.injectIntl,o.jsx=e.jsx,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.proxyUtils=e.proxyUtils,o.urlUtils=e.urlUtils},function(e){s.dataSourceJsonCreator=e.dataSourceJsonCreator},function(e){a.useEffect=e.useEffect,a.useState=e.useState},function(e){n.builderAppSync=e.builderAppSync,n.getAppConfigAction=e.getAppConfigAction},function(e){l.getAnchoredWindowTemplates=e.getAnchoredWindowTemplates,l.getFixedModaldWindowTemplates=e.getFixedModaldWindowTemplates,l.getFixedNonModaldWindowTemplates=e.getFixedNonModaldWindowTemplates,l.getFullScreenGridPageTemplates=e.getFullScreenGridPageTemplates,l.getFullScreenPageTemplates=e.getFullScreenPageTemplates,l.getScrollingPageTemplates=e.getScrollingPageTemplates,l.getWindowTemplates=e.getWindowTemplates},function(e){r.searchUtils=e.searchUtils,r.utils=e.utils},function(e){c.Theme2GlobalStyleClassName=e.Theme2GlobalStyleClassName,c.getBoxStyles=e.getBoxStyles,c.getBuilderThemeVariables=e.getBuilderThemeVariables,c.getTheme=e.getTheme,c.getTheme2=e.getTheme2,c.popperPointer=e.popperPointer,c.registerStyles=e.registerStyles,c.styled=e.styled,c.useTheme=e.useTheme,c.withStyles=e.withStyles,c.withTheme=e.withTheme,c.withTheme2=e.withTheme2},function(e){d.AdvancedButtonGroup=e.AdvancedButtonGroup,d.Alert=e.Alert,d.Button=e.Button,d.Card=e.Card,d.CardBody=e.CardBody,d.CardImg=e.CardImg,d.Checkbox=e.Checkbox,d.CollapsableCheckbox=e.CollapsableCheckbox,d.CollapsablePanel=e.CollapsablePanel,d.CollapsableRadio=e.CollapsableRadio,d.CollapsableToggle=e.CollapsableToggle,d.Collapse=e.Collapse,d.ConfirmDialog=e.ConfirmDialog,d.Container=e.Container,d.Dropdown=e.Dropdown,d.DropdownButton=e.DropdownButton,d.DropdownItem=e.DropdownItem,d.DropdownMenu=e.DropdownMenu,d.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,d.FormGroup=e.FormGroup,d.Icon=e.Icon,d.Input=e.Input,d.Label=e.Label,d.Link=e.Link,d.Loading=e.Loading,d.LoadingType=e.LoadingType,d.Modal=e.Modal,d.ModalBody=e.ModalBody,d.ModalFooter=e.ModalFooter,d.ModalHeader=e.ModalHeader,d.NumericInput=e.NumericInput,d.Option=e.Option,d.PanelHeader=e.PanelHeader,d.Popper=e.Popper,d.Radio=e.Radio,d.Row=e.Row,d.Select=e.Select,d.Switch=e.Switch,d.Tab=e.Tab,d.Tabs=e.Tabs,d.TextInput=e.TextInput,d.Toast=e.Toast,d.ToastType=e.ToastType,d.Tooltip=e.Tooltip,d.UrlInput=e.UrlInput,d.defaultMessages=e.defaultMessages,d.getFallbackPlacementsModifier=e.getFallbackPlacementsModifier,d.isOutBoundary=e.isOutBoundary},function(e){p.DataSourceSelector=e.DataSourceSelector,p.FieldSelector=e.FieldSelector,p.FieldSelectorWithFullTextIndex=e.FieldSelectorWithFullTextIndex,p.dataComponentsUtils=e.dataComponentsUtils},function(e){u.ExpressionInput=e.ExpressionInput,u.ExpressionInputType=e.ExpressionInputType},function(e){m.IconPicker=e.IconPicker},function(e){g.SettingRow=e.SettingRow,g.SettingSection=e.SettingSection,g.SidePopper=e.SidePopper},function(e){h.UtilitySelector=e.UtilitySelector},function(e){v.List=e.List,v.Tree=e.Tree,v.TreeAlignmentType=e.TreeAlignmentType,v.TreeCollapseStyle=e.TreeCollapseStyle,v.TreeItemActionType=e.TreeItemActionType,v.TreeStyle=e.TreeStyle}],execute:function(){e((()=>{var e={4077:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#000" fill-rule="evenodd" d="M2.596 6.357c.39-.59.944-1.055 1.595-1.337L15.544.094a1.143 1.143 0 0 1 .91 0L30 5.97V23.66a3.6 3.6 0 0 1-.596 1.983 3.648 3.648 0 0 1-1.595 1.337l-11.353 4.927a1.144 1.144 0 0 1-.91 0L2 26.029V8.34a3.6 3.6 0 0 1 .596-1.984m3.419 15.162c.009.016.022.029.037.038l9.594 5.351a.721.721 0 0 0 .705 0l9.144-5.103a.994.994 0 0 0 .37-.356.95.95 0 0 0 .135-.488v-9.89a.852.852 0 0 0-.122-.438.89.89 0 0 0-.331-.32l-9.497-5.3a.106.106 0 0 0-.104 0l-2.415 1.348a.069.069 0 0 0-.026.025.066.066 0 0 0 .026.092l8.947 4.992c.39.218.716.532.941.91.226.378.345.807.345 1.243v5.514c0 .08-.021.157-.062.226a.459.459 0 0 1-.172.165l-5.633 3.145a3.904 3.904 0 0 1-1.899.49c-.666 0-1.32-.169-1.898-.49L8.972 19.81a1.457 1.457 0 0 1-.542-.524 1.394 1.394 0 0 1-.198-.715V11.76a.069.069 0 0 1 .07-.068c.012 0 .024.003.035.009l7.651 4.268c.05.028.092.068.121.117a.313.313 0 0 1 .045.16v2.526c0 .012.003.024.009.034a.068.068 0 0 0 .06.033.073.073 0 0 0 .035-.009l1.972-1.1c.28-.156.511-.38.673-.651.161-.27.247-.577.247-.89v-.964c0-.278-.076-.55-.22-.79-.144-.241-.35-.44-.598-.58L9.65 9.011a.885.885 0 0 0-.86 0L6.052 10.54a.104.104 0 0 0-.052.088v10.842c0 .018.006.035.015.05" clip-rule="evenodd"></path></svg>'},18371:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},94070:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"></path></svg>'},24786:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8M13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97"></path><path fill="#000" d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828z"></path></svg>'},59788:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},60843:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708z"></path></svg>'},3273:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},58959:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},99820:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1zM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z"></path></svg>'},96009:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},18656:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z"></path></svg>'},55339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},59216:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},34750:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},30224:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},79964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},26826:e=>{"use strict";e.exports=i},48891:e=>{"use strict";e.exports=o},11840:e=>{"use strict";e.exports=s},51315:e=>{"use strict";e.exports=a},23137:e=>{"use strict";e.exports=n},96262:e=>{"use strict";e.exports=l},74758:e=>{"use strict";e.exports=r},34796:e=>{"use strict";e.exports=c},30726:e=>{"use strict";e.exports=d},338:e=>{"use strict";e.exports=p},39342:e=>{"use strict";e.exports=u},20663:e=>{"use strict";e.exports=m},77756:e=>{"use strict";e.exports=g},52785:e=>{"use strict";e.exports=h},59587:e=>{"use strict";e.exports=v}},t={};function f(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,f),s.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var i in t)f.o(t,i)&&!f.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var y={};return(()=>{"use strict";f.r(y),f.d(y,{ByFieldSeriesX:()=>zi,ByFieldSeriesY:()=>Vi,CardLayout:()=>Go,CardLayoutSetting:()=>Xo,CollapsableCheckbox:()=>ve,CollapsableRadio:()=>he,CollapsableToggle:()=>ge,DEFAULT_MAX_SUGGESTION:()=>Ui,DefaultAddress:()=>Qi,DefaultGeocodeLabel:()=>Yi,DefaultGeocodeURL:()=>Xi,DirectionSelector:()=>Pi,JimuLayerViewSelector:()=>ie,JimuLayerViewSelectorDeprecated:()=>J,JimuLayerViewSelectorDropdown:()=>se,JimuMapViewSelector:()=>le,LinkSelector:()=>st,LinkSelectorContent:()=>Je,LinkSelectorSidePopper:()=>Ye,LinkSetting:()=>He,LinkSettingPopup:()=>Ze,MAX_RECENT_SEARCHES:()=>Bi,MAX_SUGGESTION:()=>Fi,MapWidgetSelector:()=>W,MaxCategories:()=>Gi,MaxPieces:()=>_i,MaxSeries:()=>Ji,MultipleJimuMapConfig:()=>Vo,NavQuickStyleItem:()=>Ri,ObjectIdSchema:()=>Zi,OpenTypes:()=>fe,OutStatisticFieldNameSplit:()=>Hi,OutputDsAddress:()=>qi,OutputDsObjectField:()=>Ki,PageTemplatePopper:()=>Zt,ProxySetting:()=>kt,ProxySettingPopup:()=>Rt,QuickStylePopper:()=>Ei,RadioGroup:()=>pe,SearchDataSetting:()=>Eo,SearchDataType:()=>$i,SearchGeneralSetting:()=>Bo,SearchServiceType:()=>Wi,SearchSuggestionSetting:()=>Fo,SettingCollapse:()=>ue,SettingLayout:()=>t,SettingRow:()=>N,SettingSection:()=>I,SidePopper:()=>Qe,SizeMode:()=>Ti,SizeModeSelector:()=>Mi,SortSetting:()=>wi,Status:()=>_o,StylePicker:()=>ce,TemplateList:()=>Qt,TemplateSelector:()=>si,UnControlledSettingCollapse:()=>me,WidgetList:()=>Vt,WidgetListPopper:()=>Jt,WidgetSelector:()=>L,WindowTemplatePopper:()=>ii,_JimuLayerViewSelector:()=>te,_JimuLayerViewSelectorDropdown:()=>oe,_JimuMapViewSelector:()=>ne,_LinkSelector:()=>ot,_LinkSelectorContent:()=>_e,_LinkSelectorSidePopper:()=>Xe,_MapWidgetSelector:()=>$,_SidePopper:()=>qe,changeCurrentDialog:()=>ts,changeCurrentPage:()=>es,checkIsUseDsChenged:()=>lo,checkIsWidgetJsonDsChanged:()=>ro,getAddressFieldsSchemaAndDefaultFieldName:()=>io,getConfigIdList:()=>co,getInitOutDataSource:()=>oo,getInitSchema:()=>eo,getNameOfDefaultAddressField:()=>to,getNewConfigId:()=>po,getOutputDataSourceId:()=>mo,getOutputJsonOriginDs:()=>so,getWhetherDsInUseDataSources:()=>ao,handelDialogInfos:()=>Yo,isDsInDatasources:()=>no,proxySettingUtils:()=>i,setLayoutAuto:()=>Jo,setLayoutCustom:()=>Ho});var e={};f.r(e),f.d(e,{JimuLayerViewSelector:()=>b,JimuLayerViewSelectorDeprecated:()=>h,JimuLayerViewSelectorDropdown:()=>S,LinkSelectorContent:()=>d,ProxySetting:()=>p,ProxySettingPopup:()=>u,RadioGroup:()=>m,SettingCollapse:()=>c,SettingRow:()=>r,SettingSection:()=>l,SidePopper:()=>g,SortSetting:()=>a,StylePicker:()=>n,WidgetSelector:()=>s});var t={};f.r(t),f.d(t,{SettingRow:()=>N,SettingSection:()=>I});var i={};f.r(i),f.d(i,{deleteProxies:()=>ht,getCreateProxyUrl:()=>yt,getDeleteProxyUrl:()=>St,getNeedProxyDataSources:()=>rt,getNeedProxyItems:()=>lt,getNeedProxyUtilities:()=>ct,getProxyJsonFromSourceUrl:()=>pt,getProxyRootUrl:()=>ft,isRegisteredApp:()=>mt,isSameProxy:()=>ut,needToConfigProxy:()=>gt});var o=f(48891);const s=e=>{const t=e.theme;return o.css`
    .component-choose-widget-popup{
      .widget-card-active-btn{
        outline: none;
      }
    }
    div.component-choose-widget-popup-modal{
      width: 850px;
      max-width: 850px;
      height: 600px;
      background: ${t.colors.white};
      border-radius: 4px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .component-choose-widget-clear-border{
        border: 0;
        padding: 0;
      }
      .modal-content{
        border: 0;
        padding: 20px 10px 20px 40px;
        position: static;
      }
      .component-choose-widget-modal-header{
        .choose-widget-popup-close{
          width: 50px;
          height: 50px;
          display: inline-block;
          right: 28px;
          position: absolute;
          top: 10px;
          &:hover{
            cursor: pointer;
          }
        }
        .choose-widget-popup-close:after{
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVQ4jaWSLQ7EIBhEv2LxnAzP1cBzAU6DhKCpZneaQHYpP2k6omreCzA9yjf0IgyfGCMZY+g8zy2ADrpgmsA5R977raTC6IJpAiklCSEopTSVVBgddME0AeeclFJTSQ+jCwY5fh9xVERm8E0wkiAzeCjoJcgMbm/wJjdBf4XdOmwF49irdf4Es6l2E7MVXLOSXAJr7XKqkQTMFcwYQiha65JzLruggy4YZPgfPMkHXzQME+F7oHYAAAAASUVORK5CYII="});
          position: relative;
          left: 18px;
          top: 12px;
        }
      }
      .component-choose-widget-modal-body{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 40px 0 10px 0;
        .widget-card-item{
          width: 70px;
          height: 120px;
          border: 0;
          margin: 0 30px 0 0;
          &:hover{
            cursor: pointer;
          }
          .widget-card-image{
            width: 70px;
            height: 70px;
            border: 1px solid #ccc;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            >div{
              width: 30px;
              height: 30px;
              position: relative;
              &:after{
                display: none;
              }
            }
          }
          .widget-card-content{
            font-size: 12px;
            color: #000;
            letter-spacing: 0.33px;
            padding: 2px;
            text-align: center;
            line-height: 14px;
          }
        }
        .widget-card-selected{
          .widget-card-image{
            border: 2px solid #0C5CB6;
            >div:after{
              content: '';
              display: block;
              width: 16px;
              height: 16px;
              position: absolute;
              top: -20px;
              right: -20px;
              background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jWPkidn2n4ECwESJ5iFgABsLI8PBRiuGS732DKJ8bKQbwMHKzKAqyc0gK8zBIMDNilUNI6FYkBBgBxrExPDg9Xes8iy4NIZYSDJ4GYkx/Pj1j6F25Q2cFuD0wo2nXxi42ZkZYu1lGMItpUg34Mrjzwx//0HYT9//IN0AFiZGBjstIaAh/xkOXntLugHGyvwM/FysDBcefGT48PUP6QaI8ELinZ2FicFGQ4iBnRW7UmY2vegGbBIPXn1j+P//P8OXn38ZPn77zXDxwSesBhBMB4QAxXkBAMaDOywJrob4AAAAAElFTkSuQmCC"});
            }
          }
        }
      }
      .component-choose-widget-modal-footer{
        position: absolute;
        bottom: 20px;
        right: 40px;
        >button{
          font-size: 14px;
          letter-spacing: 0.39px;
          text-align: center;
          vertical-align: middle;
        }
        button:first-of-type {
          background-color: #0075D0;
          border: 1px solid  #0075D0;
          border-radius: 3px;
          color: #ffffff;
        }
        button:last-of-type{
          background-color: #ffffff;
          border: 1px solid #CCCCCC;
          border-radius: 3px;
          color: #000000;
        }
      }
    }
  `},a=e=>{const t=e.theme.colors;return o.css`
    width:100%;
    &.single-row-item {
        .select-con {
            padding: ${o.polished.rem(10)} ${o.polished.rem(0)};
            .option-name-con {
                margin-bottom: 0;
                .close-con>span {
                    margin-left: ${o.polished.rem(10)};
                }
            }
        }
    }
    .padding-0 {
        padding: 0;
    }
    .jimu-tree-item {
        margin-bottom:${o.polished.rem(10)};
    }
    .jimu-tree-item__draggable {
        box-shadow: 0 0 0 2px ${o.polished.rgba(t.white,.3)};
    }
    .add-option-btn {
        & {
            color:${t.palette.primary[600]};
            margin-top:${o.polished.rem(10)};
            margin-bottom: ${o.polished.rem(17)};
            cursor: pointer;
            font-size:13px;
            overflow: hidden;
            padding: 0;
        }
        .add-option-icon{
            margin-right: 4px;
        }
    }
    .no-sort-remind {
        margin: 70px auto 0;
        color: ${t.palette.light[800]};
        font-size: 13px;
        text-align: center;
    }
    .select-con {
        & {
            box-sizing:border-box;
            padding-right: ${o.polished.rem(10)};
            padding: ${o.polished.rem(8)} ${o.polished.rem(10)} ${o.polished.rem(10)} ${o.polished.rem(6)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${o.polished.rem(5)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${t.palette.dark[800]};
              height: ${o.polished.rem(30)};
              line-height: ${o.polished.rem(25)};
              cursor: pointer;
              overflow: hidden;
              width: 0;
              padding-right: ${o.polished.rem(4)};
              .edit-input {
                max-width: 88%;
                input {
                    width: 80px;
                }
                input:placeholder-shown {
                    text-overflow: ellipsis;
                }
              }
            }
            .option-name input {
                display:inline-block;
                width: auto;
                height: 100%;
            }
            .jimu-input {
                line-height: ${o.polished.rem(30)};
                vertical-align: middle;
            }
            .input-wrapper {
                vertical-align: middle;
            }
            .option-name-icon-con {
                margin-left: ${o.polished.rem(5)};
                svg {
                    margin-top:  ${o.polished.rem(5)};
                }
            }
            .option-name-icon {
                color: ${t.palette.dark[400]};
                cursor: pointer;
            }
            .option-name span {
                display: inline-block;
                text-overflow: ellipsis;
                overflow:hidden;
            }
            .close-con {
                svg {
                    margin: 0;
                    margin-top:  ${o.polished.rem(2)};
                }
            }
            .close-con>span {
                margin-right: ${o.polished.rem(10)};
                color: ${t.black};
                cursor: pointer;
            }
        }

        .select-down-con {
            & {
                display: flex;
                align-items: center;
                height: ${o.polished.rem(34)};
            }
            .sort-arrow-down-icon {
                margin-right: 0;
            }
            .select-input {
                flex-grow:1;
                color: ${t.dark};
            }
            .sort-button {
                margin-left: 5px;
                cursor: pointer;
                border:none;
            }
            .sort-field-selector {
                & {
                    background:${t.palette.secondary[200]};
                    border-radius: 2px;
                    flex-grow: 1;
                    width: 0;
                }
            }
        }
    }


  `},n=e=>{const t=e.theme;return o.css`
    .widget-setting--stylepicker {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    .widget-setting--stylepicker-item {
      height: 93px;
      border: 1px solid ${t.colors.palette.light[500]};
      background-color: ${t.colors.white};
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        border-color: ${t.colors.primary};
      }
      &.active {
        border: 2px solid ${t.colors.primary};
      }
      &.full-width {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  `},l=e=>{const t=e.theme;return o.css`
    padding: ${t.sizes[4]};
    border-bottom: 1px solid ${t.colors.palette.light[800]};

    &:last-child {
      border-bottom: 0 none;
    }

    &:nth-of-type(1):nth-last-of-type(1) {
      border-bottom: 0 none;
    }

    .jimu-widget-setting--section-header {
      > h6 {
        color: ${t.colors.palette.dark[600]};
        font-weight: ${t.typography.weights.bold};
        margin-bottom: 0;
      }
      + * {
        margin-top: ${t.sizes[4]};
      }
    }

    .jimu-widget-setting--section-header {
      &.row {
        margin-left: 0;
        margin-right: 0;
      }
    }
  `},r=e=>{const t=e.theme,i=e.flow,s=e.action;return o.css`
    &.jimu-widget-setting--row {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      &:first-of-type {
        margin-top: 0;
      }
      + .jimu-widget-setting--row {
        margin-top: ${t.sizes[4]};
      }
    }
    &.bottom-line {
      padding-bottom: ${t.sizes[4]};
      border-bottom: 1px solid ${t.colors.palette.light[500]};
    }
    &,
    .jimu-widget-setting--row-header {
      > .jimu-widget-setting--row-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${t.colors.palette.dark[400]};
      }
    }
    > .jimu-widget-setting--row-label {
      display: inline-block;
      margin-bottom: ${"wrap"===i?s?"0":t.sizes[2]:"0"};
      margin-right: 20px;
    }
    > input {
      &[type='number'] {
        width: 50px;
        flex-shrink: 0;
      }
    }
    input {
      &[type='number'] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
    .jimu-widget-setting--row-header {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 0.75rem;
      > .btn {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      .jimu-widget-setting--row-label {
        text-align: left;
        flex: 1;
        margin-bottom: 0;
      }
    }
    &.form-inline {
      flex-wrap: nowrap;
      .jimu-widget-setting--row-label {
        max-width: 80%;
        + * {
          flex-shrink: 0;
        }
      }
    }
  `},c=e=>{var t,i,s,a,n,l,r,c;const d=null==e?void 0:e.isOpen,p=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",u=e.theme,m=null===(a=null===(s=null===(i=null==u?void 0:u.colors)||void 0===i?void 0:i.palette)||void 0===s?void 0:s.light)||void 0===a?void 0:a[500],g=null===(r=null===(l=null===(n=null==u?void 0:u.colors)||void 0===n?void 0:n.palette)||void 0===l?void 0:l.light)||void 0===r?void 0:r[800],h=null===(c=null==u?void 0:u.colors)||void 0===c?void 0:c.primary;return"primary"!==p?o.css`
    .dividing-line {
      background-color: ${g};
    }
    `:o.css`
    .handle {
      border-top: 2px solid ${d?h:m};
      background-color: ${m};
      .title {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    .dividing-line {
      background-color: ${g};
    }
    `};function d(e){const t=e.theme,i=t&&t.colors&&t.colors.palette&&t.colors.palette.light[500]||"#ccc",s=t&&t.colors&&t.colors.primary||"blue",a=o.polished.rgba(i,.5);return window.jimuConfig.isInBuilder?o.css`
    .widget-builder-link-selector {
      .collapse-btn{
        margin-right: ${o.polished.rem(-16)};
      }
      .option-name{
        font-size: ${o.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
      }
      .link-selector-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .link-selector-list-item {
          height: ${o.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${a};
          }
        }

        .link-selector-list-select {
          background-color: ${a};
        }
      }

      select {
        padding-top: ${o.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${s} !important;
      }

      .btn-primary {
        background-color: #00A6B6 !important;
        border-color: #00A6B6 !important;
        color: #ffffff !important;
      }

      .form-check-input {
        span {
          background: #00A6B6 !important;
        }
      }

      .form-check-input:hover {
        border-color: gray;
      }

      input[type='radio'].form-check-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: 1px solid #000;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: all 0.2s ease;
        &:before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: #00A6B6 !important;
        margin: 8px;
        transition: all 0.2s ease-out;
        }
        &:hover {
        border-color: #00A6B6 !important;
        }
        &:checked {
        &:before {
            width: 8px;
            height: 8px;
            margin: 3px;
        }
        }
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        width: 100%;
        display: block;
      }
    }
    .url-error-container{
      *{
        color: ${t.colors.danger};
      }
      div{
        width: calc(100% - 20px);
        margin-left: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `:o.css`
    .widget-builder-link-selector {
      .collapse-btn{
        position: absolute;
        right: ${o.polished.rem(-4)};
      }
      .option-name{
        font-size: ${o.polished.rem(13)};
        color: ${t.colors.palette.dark[400]};
        font-weight: 500;
      }
      .item-common{
        background: ${t.colors.white};
      }
      .view-border{
        border: 1px solid ${t.colors.palette.light[400]};
      }
      .link-selector-list {

        .link-selector-list-item {
          height: ${o.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${a};
          }
        }

        .link-selector-list-select {
          background-color: ${a};
        }
      }

      select {
        padding-top: ${o.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${s} !important;
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        width: 100%;
        display: block;
      }
      .url-error-container{
        *{
          color: ${t.colors.danger};
        }
        div{
          width: calc(100% - 20px);
          margin-left: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  `}function p(e){const t=e.theme;return o.css`
    color: ${t.colors.palette.dark[600]};
    .font-size-13{
      font-size: ${o.polished.rem(13)} !important;
    }
    .subscriber-warning{
      font-size: ${o.polished.rem(13)};
    }
    .secondary-title{
      font-size: ${o.polished.rem(14)};
    }
    .content-table{
      font-size: ${o.polished.rem(13)};
      color: ${t.colors.palette.dark[800]};
    }
    .content-table-header{
      height: ${o.polished.rem(32)};
      background-color: ${t.colors.palette.light[400]};
      display: block;
      line-height: ${o.polished.rem(30)};
    }
    .content-table-tr{
      height: ${o.polished.rem(39)};
      line-height: ${o.polished.rem(39)};
      border-bottom: 1px solid ${t.colors.palette.light[400]};
    }
    .col-4, .col-2{
      height: 100%;
    }
    .request-limit{
      margin-top: ${o.polished.rem(6)};
    }
    .request-interval{
      display: block;
      margin-top: ${o.polished.rem(-3)};
    }
  `}function u(e){const t=e.theme;return o.css`
    max-width: ${o.polished.rem(960)} !important;
    .header{
      font-size: ${o.polished.rem(16)};
      color: ${t.colors.palette.dark[600]};
    }
    .proxy-setting-container{
      width: ${o.polished.rem(960)};
      height: ${o.polished.rem(640)};
      border: 0;
      color: ${t.colors.palette.dark[600]};
    }
    .px-30{
      padding-right: ${o.polished.rem(30)};
      padding-left: ${o.polished.rem(30)};
    }
  `}const m=e=>{const t=e.theme,i=e.gutter;return o.css`
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${i||t.sizes[4]};
      .jimu-radio {
        margin-right: ${t.gutters[4]};
      }
    }
  `};function g(e){const t=e.theme;return o.css`
    width: ${o.polished.rem(260)};
    height: calc(100% - 70px);
    padding: 0;
    overflow: hidden;
    border-radius: 0;
    box-shadow: 0 0 0;
    border-left: 1px solid ${t.colors.palette.light[800]};
    border-right: 1px solid ${t.colors.palette.light[800]};
    border-top: 0;
    border-bottom: 0;
    margin: 0 !important;
  `}const h=e=>{const t=e.theme;return o.css`
    .dropdown-menu--inner {
      background-color: ${t.colors.palette.secondary[200]};
      padding: 0;
    }

    .dropdown-toggle-content {
      width: 100%;
    }

    .layerviewselector-input {
      width: 100%;
      height: 30px !important;
      background-color: ${t.colors.palette.secondary[200]};
      &:hover {
        background-color: ${t.colors.palette.secondary[200]};
      }
      flex-direction: unset !important;
    }

    .layerviewselector-input-text {
      max-width: calc(100% - 13px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layerviewselector-bg {
      max-height: 270px;
      overflow-y: auto;
      background-color: ${t.colors.palette.secondary[200]};
    }

    .layerviewselector-item-bg {
      cursor: pointer;
    }

    .layerviewselector-item-bg:hover {
      background-color: ${t.colors.primary};
    }

    .layerviewselector-ds-item {
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .layerviewselector-ds-item:hover {
      background-color: ${t.colors.primary};
    }

    .layerviewselector-ds-item-selected {
      background-color: ${t.colors.primary};
    }
  `};var v=f(34796);const S=e=>{var t,i;const s=e.theme,a=null==e?void 0:e.buttonProps,n=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.input;return o.css`
    width: 100%;
      > .dropdown{
        > .dropdown-button {
          text-align: start;
        }
      }
      ${null!==(i=null==a?void 0:a.type)&&void 0!==i?i:o.css`
      /* Button override */
        > .dropdown{
          > .dropdown-button {
            &,
            &:hover {
              color: ${n.color};
              background-color: ${n.bg};
              background-clip: padding-box;
              box-shadow: ${n.boxShadow};
              transition: ${n.transition};
              text-decoration: none;
              ${function(e,t){const i=e.sizes[t];return`\n    height: ${"auto"!==i.height?i.height:function(e,t){const i=o.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?i:`calc(${i} + ${t} * 2)`}(i,e.border.width)};\n    padding: ${i.paddingY} ${i.paddingX};\n    font-size: ${i.fontSize};\n    line-height: ${i.lineHeight};\n    border-radius: ${i.borderRadius};\n  `}(n,"sm")}
              ${(0,v.getBoxStyles)(n)}
            }
            &[aria-expanded="true"] {
              color: ${n.color};
              background-color: ${n.focus.bg};
              border-color: ${n.focus.borderColor};
              text-decoration: none;
              box-shadow: ${n.boxShadow}, ${n.focus.boxShadow};
            }
          }
        }
      `}

  `},b=e=>{const t=e.isInDropdown?"366px":"calc(100% - 34px)";return o.css`
    .tree-container{
      margin-top: 16px;
      height: ${t};
    }
    `};var w=f(23137),x=f(30726);class C extends o.React.PureComponent{render(){const e=this.props,{className:t,style:i,title:s,role:a,children:n}=e,l=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className","style","title","role","children"]);return o.React.createElement(x.Container,{className:(0,o.classNames)(t,"jimu-widget-setting--section"),style:i,role:a,"aria-label":l["aria-label"],"aria-describedby":l["aria-describedby"]},s&&o.React.createElement(x.Row,{className:"jimu-widget-setting--section-header"},"string"==typeof s?o.React.createElement("h6",{className:"w-100 setting-text-level-1"},s):o.React.createElement("div",{className:"w-100 text-truncate setting-text-level-1"},s)),n)}}const I=(0,v.withStyles)(C,"SettingSection");var j=f(3273),k=f.n(j);const O=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:k()},s)):o.React.createElement("svg",Object.assign({className:a},s))};const P=e=>o.React.createElement("div",{className:"jimu-widget-setting--row-header mb-4"},e.children);class T extends o.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:i,truncateLabel:s,label:a,role:n,indented:l,className:r,level:c=3,bottomLine:d=!1}=e,p=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["action","flow","truncateLabel","label","role","indented","className","level","bottomLine"]),u="string"==typeof a?a:"",m=(0,o.classNames)(r,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==i,"bottom-line":d,"pl-5":l}),g=t?"span":"label",h=a&&o.React.createElement(g,{title:u,className:(0,o.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${c}`,{"w-100 mr-0":"wrap"===i,"text-truncate":s})},a);return o.React.createElement(x.Row,{className:m,role:n,"aria-label":p["aria-label"]},"wrap"===i&&t?o.React.createElement(P,null,"drilldown"===t?o.React.createElement(x.Button,{size:"sm",type:"tertiary",onClick:()=>{this.onActionClick("drilldown")}},h,o.React.createElement(O,{className:"right-icon"})):void 0):h,this.props.children)}}const N=(0,v.withStyles)(T,"SettingRow");var M=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};class R extends o.React.PureComponent{constructor(e){super(e),this.onSelectWidget=e=>{this.setState({currentWidget:e})},this.getListItemJSX=e=>(0,o.jsx)(x.Card,{className:(0,o.classNames)("widget-card-item",{"widget-card-selected":this.state.currentWidget&&0===this.state.currentWidget.indexOf(e.uri)}),key:e.title,onClick:()=>{this.onSelectWidget(e.uri)}},(0,o.jsx)("div",{className:"widget-card-image bg-light-300"},(0,o.jsx)("div",null,(0,o.jsx)(x.CardImg,{top:!0,width:"100%",src:e.image.src,alt:e.image.alt}))),(0,o.jsx)(x.CardBody,{className:"widget-card-content"},(0,o.jsx)("span",{className:"text-capitalize",title:e.title},e.title))),this.state={currentWidget:null,listInfo:[]}}componentDidMount(){this.getListInfo().then((e=>{this.setState({listInfo:e.listInfo})}))}getListInfo(){return M(this,void 0,void 0,(function*(){return yield fetch(`${o.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`).then((e=>M(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>({listInfo:e.map((e=>{const t={title:"",uri:"",image:{src:""}};return t.title=e.label,t.uri=e.path,t.image.src="../"+e.icon,t}))})))}))}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",{className:"component-choose-widget-popup"},(0,o.jsx)(x.Modal,{isOpen:!0,className:"component-choose-widget-popup-modal"},(0,o.jsx)(x.ModalHeader,{className:"component-choose-widget-clear-border component-choose-widget-modal-header"},this.props.title,(0,o.jsx)("span",{className:"choose-widget-popup-close",onClick:this.props.onCancel})),(0,o.jsx)(x.ModalBody,{className:"component-choose-widget-clear-border component-choose-widget-modal-body"},this.state.listInfo.length>0?this.state.listInfo.map((e=>this.getListItemJSX(e))):"Loading..."),(0,o.jsx)(x.ModalFooter,{className:"component-choose-widget-clear-border component-choose-widget-modal-footer"},(0,o.jsx)(x.Button,{onClick:()=>{this.props.onOK(this.state.currentWidget)}},"OK"),(0,o.jsx)(x.Button,{onClick:this.props.onCancel},"Cancel")))))}}const L=(0,v.withStyles)(R,"WidgetSelector");var D=f(74758);const A={label:"divider",divider:!0},E=(e,t)=>{var i,o;let s=[],a=[];for(let i=1;i<t.length;i++)if("dialogs"===t[i].type){e=i;break}return 1===e&&"dialogs"===(null===(i=t[1])||void 0===i?void 0:i.type)?a=t.slice(1):1===e&&"pages"===(null===(o=t[1])||void 0===o?void 0:o.type)?s=t.slice(1):(s=t.slice(1,e),a=t.slice(e)),{pageList:s,dialogList:a}};var U;!function(e){e.Page="pages",e.Dialog="dialogs",e.Widget="widgets"}(U||(U={}));const F=(e,t,i)=>e.sort(((e,o)=>{const s=i===U.Widget?t[i][e].label:t[i][e.id].label,a=i===U.Widget?t[i][o].label:t[i][o.id].label;return s.localeCompare(a,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})),{useState:B}=o.React,$=e=>{var t;const{onSelect:i,showLabel:s=!1,warningMessage:a="",isNeedConfirmBeforeChange:n}=e,l=o.hooks.useTranslation(x.defaultMessages),[r,c]=B(!1),[d,p]=B(null),u={id:"none",label:l("none")},m=o.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),g=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),h=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),v=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),f=v?o.ContainerType.Dialog:o.ContainerType.Page,y=v||h,S=o.React.useMemo((()=>((e,t,i,s)=>{const a=[];if(e[0].maps.length>0){a.push(A);const n={header:!0,label:i===o.ContainerType.Dialog?s("currentWindow"):s("currentPage")};a.push(n),F(e[0].maps,t,U.Widget).forEach((e=>{const n={id:e,label:t.widgets[e].label,headerLabel:i===o.ContainerType.Dialog?s("currentWindow"):s("currentPage")};a.push(n)}))}const n=E(1,e);let l=!1;const r=F(n.pageList,t,U.Page);for(let e=0;e<n.pageList.length;e++)if(n.pageList[e].maps.length>0){l||(a.push(A),l=!0);const i={header:!0,label:t.pages[r[e].id].label};a.push(i),F(r[e].maps,t,U.Widget).forEach((i=>{const o={id:i,label:t.widgets[i].label,headerLabel:t.pages[r[e].id].label};a.push(o)}))}if(n.dialogList){let e=!1;const i=F(n.dialogList,t,U.Dialog);for(let o=0;o<n.dialogList.length;o++)if(n.dialogList[o].maps.length>0){e||(a.push(A),e=!0);const s={header:!0,label:t.dialogs[i[o].id].label};a.push(s),F(i[o].maps,t,U.Widget).forEach((e=>{const s={id:e,label:t.widgets[e].label,headerLabel:t.dialogs[i[o].id].label};a.push(s)}))}}return a})(D.searchUtils.getMapWidgets(m,g,f,y),m,f,l)),[m,g,f,y,l]),[b,w]=B((null===(t=e.useMapWidgetIds)||void 0===t?void 0:t[0])||null),C=o.React.useRef(b);o.hooks.useUpdateEffect((()=>{var t,i;w((null===(t=e.useMapWidgetIds)||void 0===t?void 0:t[0])||null),C.current=(null===(i=e.useMapWidgetIds)||void 0===i?void 0:i[0])||null}),[e.useMapWidgetIds]);const I=e=>{const t=e.target.value;if(t===b)return;const o=t===u.id?[]:[t];n?null===C.current?(null==i||i(o),w(t)):c(!0):(null==i||i(o),w(t)),p(t)},j=(()=>{var t;if(!e.useMapWidgetIds||0===(null===(t=e.useMapWidgetIds)||void 0===t?void 0:t.length))return null;const i=e.useMapWidgetIds[0];return S.find((e=>e.id===i))||null})();return o.React.createElement("div",{className:"w-100 component-map-selector"},s&&o.React.createElement(x.Label,{title:l("selectMapWidget"),className:"jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-3 w-100 mr-0"},l("selectMapWidget")),o.React.createElement(x.Select,{size:"sm",value:j?j.id:u.id,"aria-label":e["aria-label"]||l("selectMapWidget"),"aria-describedby":e["aria-describedby"],"ally-description":e["ally-description"]},[u].concat(S).map(((e,t)=>o.React.createElement(x.Option,{header:e.header,divider:e.divider,value:e.id,key:t,onClick:I},!e.header&&o.React.createElement("div",{className:"sr-only"},e.headerLabel),e.label)))),a&&o.React.createElement(x.Alert,{tabIndex:0,className:"w-100 mt-2",open:!0,text:a,type:"warning"}),r&&o.React.createElement(x.ConfirmDialog,{level:"info",title:l("confirmTitle"),hasNotShowAgainOption:!1,content:e.confirmMessage,onConfirm:()=>{c(!1);const e=d,t=e===u.id?[]:[e];null==i||i(t),w(d)},onClose:()=>{c(!1)}}))},W=$;class z extends o.React.PureComponent{constructor(e){super(e),this.getIsLoading=()=>!!this.props.fromRootDsIds&&this.props.fromRootDsIds.some((e=>this.getIsSingleDsLoading(e))),this.getIsSingleDsLoading=e=>{const t=o.DataSourceManager.getInstance().getDataSource(e),i=null==t?void 0:t.getInfo();return!!i&&i.instanceStatus!==o.DataSourceStatus.CreateError&&(i.instanceStatus!==o.DataSourceStatus.Created||!!t.isDataSourceSet&&!t.areChildDataSourcesCreated())},this.formatMessage=(e,t)=>{const i=Object.assign({},x.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.state={isLoading:this.getIsLoading()}}componentDidMount(){this.state.isLoading&&this.waitChildDssReady().finally((()=>{this.setState({isLoading:!1})}))}componentDidUpdate(e){e.fromRootDsIds!==this.props.fromRootDsIds&&this.setState({isLoading:this.getIsLoading()}),this.state.isLoading&&this.waitChildDssReady().finally((()=>{this.setState({isLoading:!1})}))}waitChildDssReady(){return this.props.fromRootDsIds?Promise.all(this.props.fromRootDsIds.map((e=>this.waitChildDssReadyForSingleDs(e)))).catch((e=>[])):Promise.resolve([])}waitChildDssReadyForSingleDs(e){const t=o.DataSourceManager.getInstance().getDataSource(e);return(null==t?void 0:t.isDataSourceSet)&&!t.areChildDataSourcesCreated()?t.childDataSourcesReady().then((()=>t)):Promise.resolve(t)}getContent(){var e,t,i,s;const a=[];for(let e=0;e<this.props.fromRootDsIds.length;e++)a.push(this.props.fromRootDsIds[e]);const n=(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig:null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appConfig;return o.React.createElement("div",{className:"w-100"},a.map(((e,t)=>{var i;const s=o.DataSourceManager.getInstance().getDataSource(e),a=null===(i=n.dataSources[e])||void 0===i?void 0:i.sourceLabel,l=(e=>{var t,i,s;return(null===(s=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.dataSourcesInfo)||void 0===i?void 0:i[e])||void 0===s?void 0:s.instanceStatus)===o.DataSourceStatus.CreateError})(e),r=null==s?void 0:s.getChildDataSources();return o.React.createElement("div",{key:t},o.React.createElement("div",{className:"text-dark-600 pl-2 pr-2 d-flex align-items-center justify-content-between",style:{fontSize:"14px"}},a,l&&o.React.createElement(x.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.formatMessage("dataSourceCreateError")})),null==r?void 0:r.map(((t,i)=>o.React.createElement("div",{key:i,className:"mt-1 mb-1"},o.React.createElement("div",{className:(0,o.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},null==t?void 0:t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?o.React.createElement("div",{className:"w-100"},this.state.isLoading?o.React.createElement(x.Loading,{type:x.LoadingType.Secondary,width:24,height:16}):this.getContent()):null}}const V=(0,o.injectIntl)(z),G=o.css`
& {
  .ds-selector > span {
    display: none;
  }
}
`;class _ extends o.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=o.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),i=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,s=t.getJimuChildId(i)[0];this.props.onSelect((0,o.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:s,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,o.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,o.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,i)=>null==e?void 0:e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,o.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,o.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,o.jsx)("div",{className:"ds-selector"},(0,o.jsx)(o.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const i=(0,o.Immutable)(Object.keys(e)),s=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&s.push(this.props.jimuLayerViewInfo.dataSourceId),(0,o.jsx)(V,{fromRootDsIds:i,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,o.Immutable)(s)})})))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)(x.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,o.jsx)(x.DropdownButton,{size:"sm",type:"tertiary",className:(0,o.classNames)("w-100 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,o.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,o.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()))),(0,o.jsx)(x.DropdownMenu,{className:(0,o.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className}),css:G},(0,o.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,o.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const J=(0,o.injectIntl)((0,v.withStyles)(_,"JimuLayerViewSelectorDeprecated"));var H=f(30224),K=f.n(H);const q=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:K()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var Q=f(59587),X=f(26826);const Y=(e,t)=>e.itemChildren&&0!==e.itemChildren.length?(e.itemChildren=e.itemChildren.sort(((e,i)=>t[e.itemKey].index-t[i.itemKey].index)),e.itemChildren.forEach((e=>Y(e,t))),e):e,Z=(e,t)=>{if(!e.itemChildren||0===e.itemChildren.length)return e.itemStateTitle.toLowerCase().includes(t.toLowerCase())?e:null;const i=e.itemChildren.map((e=>Z(e,t))).filter(Boolean);return i.length>0&&(e.itemStateExpanded=!0),0===i.length?e.itemStateTitle.toLowerCase().includes(t.toLowerCase())?e:null:(e.itemChildren=i,e)},ee=(e,t,i)=>e.itemKey===t?(e.itemStateChecked=i,e):e.itemChildren&&0!==e.itemChildren.length?(e.itemChildren=e.itemChildren.map((e=>ee(e,t,i))),e):e,te=e=>{const{jimuMapViewId:t,hideLayers:i,disableLayers:s,isMultiSelection:a=!1,defaultSelectedValues:n}=e,l=o.hooks.useTranslation(x.defaultMessages),{useRef:r,useState:c,useEffect:d}=o.React,p=r(null),[u,m]=c(""),[g,h]=c(null),[v,f]=c(null),[y,S]=c(!0);return d((()=>{(e=>{return t=void 0,i=void 0,s=function*(){const t=X.MapViewManager.getInstance().getJimuMapViewById(e);return yield t.whenAllJimuLayerViewLoaded()},new((o=void 0)||(o=Promise))((function(e,a){function n(e){try{r(s.next(e))}catch(e){a(e)}}function l(e){try{r(s.throw(e))}catch(e){a(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,l)}r((s=s.apply(t,i||[])).next())}));var t,i,o,s})(t).then((e=>{S(!1);const t=((e,t,i,o)=>{const s={itemKey:"root item",itemStateTitle:"root item",itemChildren:[]},a={};for(const i of Object.keys(e)){const s=!!t&&t(e[i],e),n=(null==o?void 0:o.length)>0&&o.includes(i);a[i]={itemKey:i,itemStateTitle:e[i].layer.title,itemChildren:[],isItemSelectable:!s,itemStateChecked:!s&&n}}for(const[t,o]of Object.entries(e)){const{parentJimuLayerViewId:n}=o;if(!e[t].fromRuntime){const o=a[t];i&&i(e[t],e)||(null===n?s.itemChildren.push(o):a[n].itemChildren.push(o))}}return s})(e,s,i,n),o=Y(t,e);h(o)}))}),[t]),(0,o.jsx)("div",{className:(0,o.classNames)("component-layer-view-selector","w-100 h-100",e.className||"")},(0,o.jsx)("div",{className:"search-container"},(0,o.jsx)(x.TextInput,{prefix:(0,o.jsx)(q,null),allowClear:!0,size:"sm",type:"text",defaultValue:"",ref:p,placeholder:l("SearchLabel"),onChange:e=>{const t=e.target.value;if(""===t)f(null),m(t),h(g);else{m(t);const e=JSON.parse(JSON.stringify(g)),i=Z(e,t);f(i||{itemKey:"root item",itemStateTitle:"root item",itemChildren:[]})}}})),(0,o.jsx)("div",{className:"tree-container"},y?(0,o.jsx)(x.Loading,{className:"w-100 h-100",type:x.LoadingType.Secondary}):(0,o.jsx)(Q.Tree,{className:"w-100",collapseStyle:Q.TreeCollapseStyle.Arrow,dndEnabled:!1,onUpdateItem:(t,i)=>{if(t.updateType===Q.TreeItemActionType.HandleExpandItem){const[,e]=t.itemJsons;v?f(Object.assign({},e)):h(Object.assign({},e))}if(t.updateType===Q.TreeItemActionType.HandleCheckboxChanged){const[i,o]=t.itemJsons;if(v?f(Object.assign({},o)):h(Object.assign({},o)),a){const t=n?[...n]:[];i.isItemSelectable&&i.itemStateChecked?(t.push(i.itemKey),v&&ee(g,i.itemKey,!0)):i.isItemSelectable&&!1===i.itemStateChecked&&(t.splice(t.indexOf(i.itemKey),1),v&&ee(g,i.itemKey,!1)),e.onChange(t)}else i.isItemSelectable&&i.itemStateChecked?(v&&(ee(g,i.itemKey,!0),ee(g,n[0],!1)),e.onChange([i.itemKey])):i.isItemSelectable&&!1===i.itemStateChecked&&(v&&ee(g,i.itemKey,!1),e.onChange([]))}},rootItemJson:v||g,isMultiSelection:a,checkboxLinkage:!1,size:"sm",treeAlignmentType:Q.TreeAlignmentType.Intact,disableDoubleClickTitle:!0,treeStyle:Q.TreeStyle.Basic,singleLineText:!0,searchedText:u})))},ie=(0,v.withStyles)(te,"JimuLayerViewSelector"),oe=e=>{const t=o.hooks.useTranslation(x.defaultMessages),{useRef:i,useState:s}=o.React,a=i(null),[n,l]=s(!1);return(0,o.jsx)("div",{className:(0,o.classNames)("component-layer-view-selector-dropdown","w-100",e.className||"")},(0,o.jsx)(x.Dropdown,{className:"w-100",direction:"down",toggle:()=>{l(!n)},isOpen:n,autoWidth:!0},(0,o.jsx)(x.DropdownButton,{ref:e=>{a.current=e}},(()=>{var i;const{defaultSelectedValues:o,isMultiSelection:s,jimuMapViewId:a}=e,n=(null==o?void 0:o.length)||0;if(0===n)return t("numSelected",{number:n});if(s)return t("numSelected",{number:n});{const e=X.MapViewManager.getInstance().getJimuMapViewById(a);return null===(i=null==e?void 0:e.jimuLayerViews[o[0]])||void 0===i?void 0:i.layer.title}})()),(0,o.jsx)(x.DropdownMenu,{className:"shadow-lg",css:o.css`
      ${a?`\n          width: ${o.polished.rem(1.5*(null===(r=a.current)||void 0===r?void 0:r.clientWidth))} !important;\n        `:""}
      padding: 16px;
    `,alignment:"end"},(0,o.jsx)(ie,Object.assign({},e,{isInDropdown:!0})))));var r},se=(0,v.withStyles)(oe,"JimuLayerViewSelectorDropdown"),ae=e=>{var t,i,s,a,n,l;if(!e)return"";const r=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig:null===(a=(0,o.getAppStore)().getState())||void 0===a?void 0:a.appConfig;return(null===(n=r.dataSources[e])||void 0===n?void 0:n.label)||(null===(l=r.dataSources[e])||void 0===l?void 0:l.sourceLabel)},ne=e=>{const t=o.hooks.useTranslation(x.defaultMessages),i={id:"none",label:t("none")},s=o.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),a=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),n=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),l=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),r=l?o.ContainerType.Dialog:o.ContainerType.Page,c=l||n,d=o.React.useMemo((()=>{const e=D.searchUtils.getMapWidgets(s,a,r,c);return(()=>{const i=[],a=e[0].maps.length>0;let n=!1;a&&F(e[0].maps,s,U.Widget).forEach(((e,a)=>{if(s.widgets[e].useDataSources&&s.widgets[e].useDataSources.length>0){n||(i.push(A),n=!0);const a={header:!0,label:`${r===o.ContainerType.Dialog?t("currentWindow"):t("currentPage")} | ${s.widgets[e].label}`};i.push(a),s.widgets[e].useDataSources.forEach((a=>{const n={id:`${e}-${a.dataSourceId}`,label:ae(a.dataSourceId),headerLabel:`${r===o.ContainerType.Dialog?t("currentWindow"):t("currentPage")} ${s.widgets[e].label}`};i.push(n)}))}}));const l=E(1,e);let c=!1;const d=F(l.pageList,s,U.Page);for(let e=0;e<l.pageList.length;e++){const t=F(d[e].maps,s,U.Widget);for(let o=0;o<t.length;o++)if(s.widgets[t[o]].useDataSources&&s.widgets[t[o]].useDataSources.length>0){c||(i.push(A),c=!0);const a={header:!0,label:`${s.pages[d[e].id].label} | ${s.widgets[t[o]].label}`};i.push(a),s.widgets[t[o]].useDataSources.forEach((a=>{const n={id:`${t[o]}-${a.dataSourceId}`,label:ae(a.dataSourceId),headerLabel:`${s.pages[d[e].id].label} ${s.widgets[t[o]].label}`};i.push(n)}))}}if(l.dialogList){let e=!1;const t=F(l.dialogList,s,U.Dialog);for(let o=0;o<l.dialogList.length;o++){const a=F(t[o].maps,s,U.Widget);for(let n=0;n<a.length;n++)if(s.widgets[a[n]].useDataSources&&s.widgets[a[n]].useDataSources.length>0){e||(i.push(A),e=!0);const l={header:!0,label:`${s.dialogs[t[o].id].label} | ${s.widgets[a[n]].label}`};i.push(l),s.widgets[a[n]].useDataSources.forEach((e=>{const l={id:`${a[n]}-${e.dataSourceId}`,label:ae(e.dataSourceId),headerLabel:`${s.dialogs[t[o].id].label} ${s.widgets[a[n]].label}`};i.push(l)}))}}}return i})()}),[s,a,r,c,t]),p=(()=>{var t;if(!e.useMapViewIds||0===(null===(t=e.useMapViewIds)||void 0===t?void 0:t.length))return null;const i=e.useMapViewIds[0];return d.find((e=>e.id===i))||null})();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"component-map-view-selector"},o.React.createElement(x.Select,{size:"sm",onChange:t=>{var o;const s=t.target.value,a=s===i.id?[]:[s];null===(o=e.onChange)||void 0===o||o.call(e,a)},value:p?p.id:i.id,"aria-label":e["aria-label"]},[i].concat(d).map(((e,i)=>{var s;return(e=>{var t,i,s;return(null===(s=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.dataSourcesInfo)||void 0===i?void 0:i[e])||void 0===s?void 0:s.instanceStatus)===o.DataSourceStatus.CreateError})(null===(s=e.id)||void 0===s?void 0:s.split("-")[1])?o.React.createElement(x.Option,{disabled:!0,className:"d-flex align-items-center justify-content-start"},o.React.createElement("span",null,e.label),o.React.createElement(x.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError"),style:{marginLeft:"auto"}})):o.React.createElement(x.Option,{header:e.header,divider:e.divider,value:e.id,key:i},!e.header&&o.React.createElement("div",{className:"sr-only"},e.headerLabel),e.label)})))))},le=ne;class re extends o.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return o.React.createElement("div",{className:(0,o.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,i)=>o.React.createElement("div",{key:t,role:"button",className:(0,o.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>{this.onStyleClick(t)}}))))}}const ce=(0,v.withStyles)(re,"StylePicker");class de extends o.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},de.count++,this.inputName=`setting-radiogroup-${de.count}`}render(){const e=this.props,{options:t,className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["options","className"]);return o.React.createElement(x.FormGroup,Object.assign({},s,{onChange:this.onRadioButtonChange,className:`setting--button-group ${i}`}),t.map((e=>o.React.createElement(x.Label,{key:e.value},o.React.createElement(x.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}de.count=0;const pe=(0,v.withStyles)(de,"RadioGroup"),ue=x.CollapsablePanel,me=x.CollapsablePanel,ge=x.CollapsableToggle,he=x.CollapsableRadio,ve=x.CollapsableCheckbox;var fe;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(fe||(fe={}));class ye extends o.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>o.React.createElement("div",{onClick:()=>{this.itemOnClick(e)},key:t,className:(0,o.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{itemselected:this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return o.React.createElement("div",{className:"link-selector-list w-100"},o.React.createElement(x.Select,{value:t,className:"w-100",onChange:e=>{this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value)))},"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>o.React.createElement("option",{key:t,value:e.id},e.name)))))}}function Se(e,t){var i,s;const a=null===(i=null==t?void 0:t.pages)||void 0===i?void 0:i[e];if((null==a?void 0:a.type)===o.PageType.Normal){const i=D.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Page,id:e},o.LayoutItemType.Section,D.utils.getCurrentSizeMode());let n=[],l=[];return a.header&&(n=D.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Header,id:"header"},o.LayoutItemType.Section,D.utils.getCurrentSizeMode())),a.footer&&(l=D.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Footer,id:"footer"},o.LayoutItemType.Section,D.utils.getCurrentSizeMode())),null===(s=n.concat(i,l))||void 0===s?void 0:s.sort(((e,i)=>{var o,s,a,n,l;return null===(a=null===(s=null===(o=null==t?void 0:t.sections)||void 0===o?void 0:o[e])||void 0===s?void 0:s.label)||void 0===a?void 0:a.localeCompare(null===(l=null===(n=null==t?void 0:t.sections)||void 0===n?void 0:n[i])||void 0===l?void 0:l.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}return[]}function be(e,t){var i;return(null===(i=null==t?void 0:t.dialogs)||void 0===i?void 0:i[e])?D.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Dialog,id:e},o.LayoutItemType.Section,D.utils.getCurrentSizeMode()):[]}function we(e,t){if(!e)return[];const i=xe(e,t);if(i&&i.length>0){let e=[],o=[];return i.forEach((i=>{e=e.concat(Ce(i,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{o=o.concat(we(e,t))})),e.concat(o)}return[]}function xe(e,t){return D.searchUtils.getContentsInContainer(t,{type:o.ContainerType.View,id:e},o.LayoutItemType.Section,D.utils.getCurrentSizeMode())||[]}function Ce(e,t){const i=t.sections[e].views,o=[];for(let e=0;e<i.length;e++)o.push({id:i[e],label:t.views[i[e]].label});return o.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}function Ie(e,t){const i=null==e?void 0:e.pages,s={id:o.CONSTANTS.CURRENT_PAGE,name:t.formatMessage({id:"currentPage",defaultMessage:x.defaultMessages.currentPage})},a=i&&Object.keys(i).filter((e=>i[e].type===o.PageType.Normal)).sort(((e,t)=>{var o;return null===(o=i[e].label)||void 0===o?void 0:o.localeCompare(i[t].label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}));let n=[s];return a&&(n=n.concat(a.map((e=>({id:e,name:i[e].label}))))),n}function je(e){const t=null==e?void 0:e.dialogs,i=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Fixed))||[],s=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Anchored))||[],a=i.concat(s).sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})).map((e=>e.id));return a&&a.filter((e=>!t[e].isSplash)).map((e=>({id:e,name:t[e].label})))}function ke(e){var t;return Oe(e.linkType===o.LinkType.View?null===(t=e.value)||void 0===t?void 0:t.split(",")[0]:null)}function Oe(e){return"string"==typeof e&&e.includes("dialog_")}const Pe=["https","mailto","tel","sms","ftp"];class Te extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,o.Immutable)({value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Page){const e=Ie(this.props.appConfig,this.props.intl);return(0,o.Immutable)({linkType:o.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(fe.CurrentWindow)?fe.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=Ie(this.props.appConfig,this.props.intl);return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:x.defaultMessages.chooseAPage})),o.React.createElement("div",null,o.React.createElement(ye,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:x.defaultMessages.chooseAPage})})))}}class Ne extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Dialog){const e=je(this.props.appConfig);return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=je(this.props.appConfig);return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:x.defaultMessages.chooseADialog})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(ye,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:x.defaultMessages.chooseADialog})})))}}class Me extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=D.searchUtils.getBlockAnchorPointsInPage(D.utils.getAppConfig(),D.utils.getCurrentPageId(),D.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,o.Immutable)({linkType:o.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Block){const e=this.getBlockData();return(0,o.Immutable)({linkType:o.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>{var e;return(null===(e=D.searchUtils.getBlockAnchorPointsInPage(D.utils.getAppConfig(),D.utils.getCurrentPageId(),D.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))).map((e=>({id:e.id,name:e.label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(ye,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})})))}}class Re extends o.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,o.Immutable)({linkType:o.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==o.LinkType.Screen?(0,o.Immutable)({linkType:o.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>{var e;return null===(e=D.searchUtils.getScreenAnchorPointsInPage(D.utils.getAppConfig(),D.utils.getCurrentPageId(),D.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),i=[];return t.forEach((e=>{i.push(o.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,s)=>i.push(o.React.createElement("option",{value:t.id,key:`${e.id}-${s}`},t.label))))})),o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})),o.React.createElement("div",null,t.length>0&&o.React.createElement(x.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:x.defaultMessages.jumpTo})},i)))}}var Le=f(59788),De=f.n(Le);const Ae=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:De()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var Ee=f(96009),Ue=f.n(Ee);const Fe=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Ue()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class Be extends o.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return o.React.createElement("div",{className:(0,o.classNames)("w-100",this.props.className)},o.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},o.React.createElement("div",null,this.props.title),o.React.createElement(x.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick},this.state.collapse?o.React.createElement(Ae,{size:"s"}):o.React.createElement(Fe,{size:"s"}))),o.React.createElement(x.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}class $e extends o.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>{if(this.props.originLinkParam.linkType===o.LinkType.View)return this.props.originLinkParam;{let e=(0,o.Immutable)({linkType:o.LinkType.View,value:""});return Oe(this.getDefaultPageOrDialogId())||(e=e.set("openType",this.getInitOpenType())),e}},this.getInitOpenType=()=>!this.props.openTypes||this.props.openTypes.includes(fe.CurrentWindow)?fe.CurrentWindow:this.props.openTypes[0],this.pageOrDialogChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),t=ke(t)?t.without("openType"):t.set("openType",this.getInitOpenType()),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let i=[];i=Object.assign(i,this.state.viewLinkParamArr),i[0]||(i[0]=this.getDefaultPageOrDialogId());const o=this.props.appConfig.sections[t].views;let s=i.filter((t=>o.some((e=>e===t))&&t!==e)),a=[];const n=i.indexOf(e);if(n>-1?s=s.concat(i[n]):a=a.concat(e),s&&s.length>0){let e=[];s.forEach((t=>{e=e.concat(we(t,this.props.appConfig))})),s=s.concat(e)}i=i.filter((e=>!s.some((t=>t===e)))),i=i.concat(a);let l=this.props.linkParam;l=l.set("value",i.join(",")),this.props.onLinkParamChange(l)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageOrDialogId());const i=we(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!i.some((t=>t===e)))));let o=this.props.linkParam;o=o.set("value",t.join(",")),this.props.onLinkParamChange(o,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageOrDialogId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>Se(e,this.props.appConfig).length>0)),i=t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0]);if(i)return i;const o=this.props.appConfig&&this.props.appConfig.dialogs,s=o&&Object.keys(o).filter((e=>be(e,this.props.appConfig).length>0));return null==s?void 0:s[0]},this.getSelectedVeiwIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:i}=e;t&&i===o.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:i,linkType:s}=e.linkParam;return i&&s===o.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:i.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t,i;if(!this.props.appConfig)return null;const s=Ie(this.props.appConfig,this.props.intl),a=je(this.props.appConfig);let n=this.state.viewLinkParamArr[0];s.some((e=>e.id===n))||a.some((e=>e.id===n))||(n=this.getDefaultPageOrDialogId());const l=s.filter((e=>Se(e.id,this.props.appConfig).length>0)),r=a.filter((e=>be(e.id,this.props.appConfig).length>0));return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:x.defaultMessages.chooseViews})),o.React.createElement("div",null,o.React.createElement(x.Select,{value:n,onChange:this.pageOrDialogChange,className:"w-100 mb-4",size:"sm"},o.React.createElement(x.Option,{header:!0},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),l.map(((e,t)=>o.React.createElement(x.Option,{key:t,value:e.id},e.name))),r.length>0&&o.React.createElement(x.Option,{header:!0},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),r.map(((e,t)=>o.React.createElement(x.Option,{key:t,value:e.id},e.name)))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-4":(null===(e=Se(n,this.props.appConfig))||void 0===e?void 0:e.length)>0})},Se(n,this.props.appConfig).map((e=>o.React.createElement(We,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:Ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-4":(null===(t=be(n,this.props.appConfig))||void 0===t?void 0:t.length)>0})},be(n,this.props.appConfig).map((e=>o.React.createElement(We,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:Ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-4":(null===(i=this.getSelectedVeiwIds())||void 0===i?void 0:i.length)>0})},this.getSelectedVeiwIds().map((e=>xe(e,this.props.appConfig).map((e=>o.React.createElement(We,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:Ce(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e}))))))))}}class We extends o.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return o.React.createElement(Be,{className:"mb-4 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},o.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"menu"},this.props.viewsInfo.map(((e,t)=>o.React.createElement(x.Button,{role:"menuitem",onClick:()=>{this.onViewChange(e.id)},key:t,className:(0,o.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{itemselected:this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-checked":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var ze=f(39342);const Ve=(0,o.Immutable)([ze.ExpressionInputType.Static,ze.ExpressionInputType.Attribute,ze.ExpressionInputType.Expression]);class Ge extends o.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.WebAddress?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(fe.NewWindow)?fe.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e.value;let i=this.props.linkParam;i=i.set("value",t).set("expression",null),this.props.onLinkParamChange(i)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>{this.setState({isExpPopupOpen:!0})},this.closeExpPopup=()=>{this.setState({isExpPopupOpen:!1})},this.getDefaultExp=()=>({name:"Expression",parts:[{type:o.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,i,s;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(i=this.props.linkParam)||void 0===i?void 0:i.value)&&this.setState({url:(null===(s=this.props.linkParam)||void 0===s?void 0:s.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})),o.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?o.React.createElement(ze.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:Ve,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})}):o.React.createElement(x.UrlInput,{value:this.state.url,schemes:Pe,onChange:this.onUrlChange,className:"w-100",onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})})))}}class _e extends o.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{if(this.props.isLinkPageSetting)return(0,o.jsx)(x.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})},(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})));{const e=this.getHiddenLinks();return(0,o.jsx)(x.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})},!e.some((e=>e===o.LinkType.None))&&(0,o.jsx)("option",{value:o.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:x.defaultMessages.none})),!e.some((e=>e===o.LinkType.Page))&&(0,o.jsx)("option",{value:o.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),!e.some((e=>e===o.LinkType.View))&&(0,o.jsx)("option",{value:o.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:o.defaultMessages.view})),!e.some((e=>e===o.LinkType.Dialog))&&(0,o.jsx)("option",{value:o.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),!e.some((e=>e===o.LinkType.WebAddress))&&(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:x.defaultMessages.url})),!e.some((e=>e===o.LinkType.Block))&&(0,o.jsx)("option",{value:o.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:o.defaultMessages.block})),!e.some((e=>e===o.LinkType.PageTop))&&(0,o.jsx)("option",{value:o.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:x.defaultMessages.pageTop})),!e.some((e=>e===o.LinkType.PrintPreview))&&(0,o.jsx)("option",{value:o.LinkType.PrintPreview},this.props.intl.formatMessage({id:"printPreview",defaultMessage:x.defaultMessages.printPreview})))}},this.getHiddenLinks=()=>{var e,t,i,s,a;let n=this.props.hiddenLinks||(0,o.Immutable)([]);const l=D.utils.getCurrentPageId(),r=D.utils.getAppConfig(),c=null===(e=r.pages)||void 0===e?void 0:e[l],d=D.searchUtils.findLayoutId(null==c?void 0:c.layout,D.utils.getCurrentSizeMode(),r.mainSizeMode),p=r.layouts[d],u=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(s=null===(i=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.currentDialogId:null===(a=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.currentDialogId;return((null==p?void 0:p.type)===o.LayoutType.FixedLayout||u)&&(n=n.concat([o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop])),n},this.getLinkContent=e=>{switch(e){case o.LinkType.None:return null;case o.LinkType.Page:return(0,o.jsx)(Te,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case o.LinkType.Dialog:return(0,o.jsx)(Ne,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Block:return(0,o.jsx)(Me,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Screen:return(0,o.jsx)(Re,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.View:return(0,o.jsx)($e,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case o.LinkType.WebAddress:return(0,o.jsx)(Ge,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);const i=e.target.value;i===o.LinkType.PageTop&&(t=(0,o.Immutable)({})),this.setState({linkParam:t.set("linkType",i)})},this.radioOpenTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:this.fixLinkParam(e)}):this.setState({linkParam:this.fixLinkParam(e)})},this.fixLinkParam=e=>{var t;let i=e;if((null==e?void 0:e.linkType)===o.LinkType.View&&(null==e?void 0:e.value)){const o=null===(t=this.props.appConfig)||void 0===t?void 0:t.views,s=e.value.split(","),a=s.slice(1).filter((e=>null==o?void 0:o[e])),n=[s[0]].concat(a).join(",");i=i.set("value",n)}return i},this.settingConfirm=()=>{const e=(0,o.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===o.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,i=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&i.length>0)}if(e.linkType===o.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let i=!1;return t&&t.length>0&&(i=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),i}{const t="valid"!==o.urlUtils.checkAbsoluteUrl(e.value,Pe);return e.value&&!t}}return e.linkType===o.LinkType.PageTop||e.linkType===o.LinkType.PrintPreview||e.linkType===o.LinkType.None||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,o.Immutable)(this.props.linkParam),originLinkParam:(0,o.Immutable)(this.props.linkParam)};else{const e={linkType:o.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(fe.CurrentWindow)?fe.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,o.Immutable)(e),originLinkParam:(0,o.Immutable)(e)}}}needOpenIn(e){return!e||![o.LinkType.Dialog,o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop,o.LinkType.PrintPreview].some((t=>t===e.linkType))&&!ke(e)}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,o.jsx)("div",{className:(0,o.classNames)(this.props.className,"w-100 h-100")},(0,o.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,o.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,o.jsx)(x.Container,null,(0,o.jsx)(x.Row,{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:x.defaultMessages.linkTo})),(0,o.jsx)(x.Row,{className:"mb-4"},e),this.state.linkParam.linkType!==o.LinkType.None?(0,o.jsx)("div",null,(0,o.jsx)(x.Row,{className:"mb-4"},t),this.needOpenIn(this.state.linkParam)&&(0,o.jsx)("div",null,(0,o.jsx)(x.Row,{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:x.defaultMessages.openIn})),(0,o.jsx)(x.Row,{role:"radiogroup",className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:x.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===fe.CurrentWindow)))&&(0,o.jsx)(x.Label,{className:"link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center"},(0,o.jsx)(x.Radio,{name:"openIn",className:"mr-2",onChange:()=>{this.radioOpenTypeChange(fe.CurrentWindow)},checked:this.state.linkParam.openType===fe.CurrentWindow}),this.props.intl.formatMessage({id:"appWindow",defaultMessage:x.defaultMessages.appWindow})),(!this.props.openTypes||this.props.openTypes.some((e=>e===fe.TopWindow)))&&(0,o.jsx)(x.Label,{className:"link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center"},(0,o.jsx)(x.Radio,{name:"openIn",className:"mr-2",onChange:()=>{this.radioOpenTypeChange(fe.TopWindow)},checked:this.state.linkParam.openType===fe.TopWindow}),this.props.intl.formatMessage({id:"topWindow",defaultMessage:x.defaultMessages.topWindow})),(!this.props.openTypes||this.props.openTypes.some((e=>e===fe.NewWindow)))&&(0,o.jsx)(x.Label,{className:"link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center"},(0,o.jsx)(x.Radio,{name:"openIn",className:"mr-2",onChange:()=>{this.radioOpenTypeChange(fe.NewWindow)},checked:this.state.linkParam.openType===fe.NewWindow}),this.props.intl.formatMessage({id:"newWindow",defaultMessage:x.defaultMessages.newWindow}))))):null),(0,o.jsx)("div",{className:"w-100",style:{position:"absolute"}},(0,o.jsx)(x.Button,{className:"w-100 text-dark link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})},(0,o.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:o.LinkType.WebAddress}})}}const Je=o.ReactRedux.connect((e=>{var t,i;return{appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.browserSizeMode:e.browserSizeMode}}))((0,o.injectIntl)((0,v.withStyles)(_e,"LinkSelectorContent"))),He=Je;const Ke=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class qe extends o.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=o.React.createRef(),this.popperRef=o.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,x.isOutBoundary)(t,e))):(0,x.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle()},this.keepFocusAfterClose=()=>{setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,i;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(i=this.closeBtnRef.current)||void 0===i||i.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const i="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,o=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=D.searchUtils.findLayoutItem(D.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,s=!e.isTemplatePage&&this.props.isTemplatePage;(i||o||s)&&this.props.isOpen&&this.toggle(),e.isOpen&&!this.props.isOpen&&this.keepFocusAfterClose()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:i,className:s,dispatch:a,leftSidebarCollapse:n,rightSidebarCollapse:l,trigger:r,backToFocusNode:c,widgetId:d,layoutSelection:p,title:u,isTemplatePage:m,addFocusableContainerClass:g}=e,h=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage","addFocusableContainerClass"]);return(0,o.jsx)(x.Popper,Object.assign({reference:this.getReference(i),placement:this.getPlacement(i),open:t,forceLatestFocusElements:!0,className:(0,o.classNames)("bg-light-300",s),modifiers:Ke},h,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,o.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,o.jsx)(x.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:(0,o.classNames)("p-4",{[x.FOCUSABLE_CONTAINER_CLASS]:g}),closeButtonRef:this.closeBtnRef}),void 0!==u?(0,o.jsx)("div",{css:o.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const Qe=o.ReactRedux.connect(((e,t)=>{var i,o,s,a,n,l,r,c,d,p;return{leftSidebarCollapse:null===(o=null===(i=e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===o?void 0:o.collapse,rightSidebarCollapse:null===(a=null===(s=e.widgetsState)||void 0===s?void 0:s["right-sidebar"])||void 0===a?void 0:a.collapse,layoutSelection:t.widgetId?(null===(n=null===window||void 0===window?void 0:window.jimuConfig)||void 0===n?void 0:n.isBuilder)?null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===r?void 0:r.selection:null===(c=e.appRuntimeInfo)||void 0===c?void 0:c.selection:null,isTemplatePage:(null===(d=null===window||void 0===window?void 0:window.jimuConfig)||void 0===d?void 0:d.isBuilder)&&"template"===(null===(p=e.appRuntimeInfo)||void 0===p?void 0:p.currentPageId)}}))((0,v.withStyles)(qe,"SidePopper"));class Xe extends o.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return o.React.createElement(Qe,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?x.defaultMessages.setLinkForTitle:x.defaultMessages.setLink},{title:t})},o.React.createElement("div",{className:"bg-light-300 w-100 h-100 px-4"},o.React.createElement(Je,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const Ye=(0,o.injectIntl)((0,v.withTheme)(Xe)),Ze=Ye;var et=f(24786),tt=f.n(et);const it=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:tt()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class ot extends o.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=o.React.createRef(),this.toggle=()=>{const e=!this.state.isOpen;this.setState({isOpen:e},(()=>{this.setState({renderPopper:e})}))},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,i;null===(i=(t=this.props).onSettingConfirm)||void 0===i||i.call(t,e),this.toggle()},this.getIsOpen=()=>this.state.isOpen&&!o.urlUtils.getAppIdPageIdFromUrl().pageId,this.state={isOpen:!1,renderPopper:!1}}render(){const e=this.props,{theme:t,intl:i,buttonLabel:s}=e,a=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["theme","intl","buttonLabel"]),n=s||this.props.intl.formatMessage({id:"setLink",defaultMessage:x.defaultMessages.setLink});return o.React.createElement(o.React.Fragment,null,o.React.createElement(x.Button,{className:"w-100 text-black",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:n},o.React.createElement("div",{className:"w-100 px-2 text-truncate"},o.React.createElement(it,{className:"text-black mr-1"}),n)),this.state.renderPopper&&o.React.createElement(Ye,Object.assign({},a,{isOpen:this.getIsOpen(),position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const st=(0,v.withTheme)((0,o.injectIntl)(ot));var at=f(338),nt=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};function lt(){return nt(this,void 0,void 0,(function*(){const e=yield rt(),t=yield ct(),i={};return Object.keys(e).forEach((t=>{i[t]||(i[t]={items:[],isPremium:e[t].isPremium,isSubscriber:e[t].isSubscriber}),i[t].items=i[t].items.concat(e[t].dataSources.map((e=>({label:o.dataSourceUtils.getLabelFromArcGISServiceUrl(t),id:e.id}))))})),Object.keys(t).forEach((e=>{i[e]||(i[e]={items:[],isPremium:t[e].isPremium,isSubscriber:t[e].isSubscriber}),i[e].items=i[e].items.concat(t[e].utilities.map((e=>{const t=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return{label:(null==t?void 0:t.label)||(null==t?void 0:t.name)||(null==t?void 0:t.sourceLabel),id:e.utilityId}})))})),i}))}function rt(){var e,t,i,s;return nt(this,void 0,void 0,(function*(){const a=null===(s=null===(i=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.dataSources,n=[];return a&&Object.keys(a).forEach((e=>{const t=o.DataSourceManager.getInstance().getDataSource(e);n.push(dt(t))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function ct(){var e,t,i,s;return nt(this,void 0,void 0,(function*(){const a=null===(s=null===(i=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.utilities,n=[];return a&&Object.keys(a).forEach((e=>{n.push(function(e){var t,i,s,a;return nt(this,void 0,void 0,(function*(){const n={};if(!e)return n;const l=null===(a=null===(s=null===(i=null===(t=(0,o.getAppStore)())||void 0===t?void 0:t.getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.widgets,r=l&&Object.values(l).some((t=>{var i;return null===(i=t.useUtilities)||void 0===i?void 0:i.some((t=>t.utilityId===e.id))})),c=e.url;if(c&&r){const t=yield o.proxyUtils.isUtilityPremium(e),i=yield o.proxyUtils.isUtilitySubscriber(e);if(t||i){const s=yield o.UtilityManager.getInstance().getUtility(e.id);n[c]={utilities:[s],isPremium:t,isSubscriber:i}}}return n}))}(a[e]))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].utilities=t[i].utilities.concat(e[i].utilities):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function dt(e,t=!1){var i,s,a,n,l,r;return nt(this,void 0,void 0,(function*(){const c={};if(!e)return c;e.isDataSourceSet&&!e.areChildDataSourcesCreated()&&(yield e.childDataSourcesReady());const d=null===(n=null===(a=null===(s=null===(i=(0,o.getAppStore)())||void 0===i?void 0:i.getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===n?void 0:n.widgets,p=(null===(l=e.getMainDataSource())||void 0===l?void 0:l.id)===e.id,u=at.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,d,!1).length>0,m=o.dataSourceUtils.getFullArcGISServiceUrl(null===(r=e.getDataSourceJson())||void 0===r?void 0:r.url,!1);if(p&&m&&(t||u)){const t=yield o.proxyUtils.isDataSourcePremium(e.getDataSourceJson()),i=yield o.proxyUtils.isDataSourceSubscriber(e.getDataSourceJson());(t||i)&&(c[m]={dataSources:[e],isPremium:t,isSubscriber:i})}const g=[];if(p&&e.isDataSourceSet){const i=(e.type===o.AllDataSourceTypes.WebMap||e.type===o.AllDataSourceTypes.WebScene)&&u||t;e.getChildDataSources().forEach((e=>{g.push(dt(e,i))}))}return Promise.allSettled(g).then((e=>{let t=c;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function pt(e,t){var i;if(!e||!t)return null;let o=null;for(const s in t)if((null===(i=t[s])||void 0===i?void 0:i.sourceUrl)===e){o=t[s];break}return o}function ut(e,t,i,o){return!(!e||!t)&&(e.sourceUrl===t&&((!e.hitsPerInterval&&!i||e.hitsPerInterval===i)&&!((e.intervalSeconds||o)&&e.intervalSeconds!==o)))}function mt(){var e,t;const i=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==i?void 0:i.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function gt(){var e,t,i,s,a,n,l,r,c,d;return nt(this,void 0,void 0,(function*(){if((null===(i=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===i?void 0:i.isInPortal)||(null===(n=null===(a=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appContext)||void 0===a?void 0:a.jimuConfig)||void 0===n?void 0:n.isDevEdition))return yield Promise.resolve(!1);const p=mt();let u=!1;if(!p){const e=null===(l=(0,o.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder.appInfo,t=null===(d=null===(c=null===(r=(0,o.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder)||void 0===c?void 0:c.user)||void 0===d?void 0:d.username;u=(null==e?void 0:e.owner)===t}if(!p&&!u)return yield Promise.resolve(!1);const m=yield lt(),g=Object.keys(m).map((e=>nt(this,void 0,void 0,(function*(){return yield o.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.allSettled(g).then((e=>e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)))).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function ht(e,t){return nt(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return void(yield Promise.resolve());const i=St();yield o.esri.restRequest.request(i,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>nt(this,void 0,void 0,(function*(){var i;return e.results&&Object.values(e.results).forEach((e=>{e.success&&vt(e.proxyId,t)})),null==t||t.exec(),(null===(i=e.results)||void 0===i?void 0:i.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((i=>nt(this,void 0,void 0,(function*(){return e.forEach((e=>{vt(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(i)}`)}))))}))}function vt(e,t){var i,s,a;const n=null===(a=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.appProxies,l=n&&Object.values(n).find((t=>t.proxyId===e));l&&(null==t||t.removeAppProxy(l.id))}function ft(){var e,t,i,s,a,n,l;const r=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,c=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appId;return`${r}/sharing/rest/content/users/${null===(l=null===(n=null===(a=(0,o.getAppStore)().getState())||void 0===a?void 0:a.appStateInBuilder)||void 0===n?void 0:n.appInfo)||void 0===l?void 0:l.owner}/items/${c}`}function yt(){return`${ft()}/createProxies`}function St(){return`${ft()}/deleteProxies`}var bt=f(18371),wt=f.n(bt);const xt=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:wt()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class Ct extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:x.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:x.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:x.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:x.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:x.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&o.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxySettingConfig?null:(0,o.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerInervalChange=e=>{const t=e,i={sourceUrl:this.props.sourceUrl,hitsPerInterval:t},o=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),i):i;this.props.onChange(this.props.sourceUrl,o)},this.onIntervalUnitChange=e=>{const t=e.target.value,i=this.getIntervalSeconds(t),o={sourceUrl:this.props.sourceUrl,intervalSeconds:i},s=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),o):o;this.props.onChange(this.props.sourceUrl,s)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const i=this.props.label,s=!!this.props.proxySettingConfig,a=this.getIntervalUnit(null===(e=this.props.proxySettingConfig)||void 0===e?void 0:e.intervalSeconds),n=o.SessionManager.getInstance().getMainSession(),l=`${this.props.sourceUrl}?token=${n.token}`;return o.React.createElement("tr",{className:"row m-0 content-table-tr"},o.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:x.defaultMessages.disabledProxyTooltip})},o.React.createElement(x.Switch,{onChange:this.onToggleProxy,checked:s,className:"mr-2",disabled:!this.state.isHostedInSamePortal,"aria-label":this.props.intl.formatMessage({id:"authorized",defaultMessage:x.defaultMessages.authorized}),"aria-checked":s})),o.React.createElement("td",{className:"col-4",title:i},o.React.createElement(x.Link,{to:l,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left","aria-label":this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:x.defaultMessages.subscriberContent})},i)),o.React.createElement("td",{className:"col-2"},this.props.isPremium&&o.React.createElement(xt,{size:"m"})),o.React.createElement("td",{className:"col-2"},s&&o.React.createElement(x.NumericInput,{size:"sm",value:null===(t=this.props.proxySettingConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerInervalChange,precision:0,min:1,className:"request-limit","aria-label":this.props.intl.formatMessage({id:"requestLimit",defaultMessage:x.defaultMessages.requestLimit})})),o.React.createElement("td",{className:"col-2"},s&&o.React.createElement(x.Select,{value:a,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval","aria-label":this.props.intl.formatMessage({id:"requestInterval",defaultMessage:x.defaultMessages.requestInterval})},Object.keys(this.interval).map(((e,t)=>o.React.createElement("option",{value:e,key:t,selected:e===a},this.interval[e]))))))}}var It=f(11840);class jt extends o.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:x.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:x.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:x.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:x.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:x.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{const i=this.props.proxySettingConfigs||{},s=Object.assign({},i),a=It.dataSourceJsonCreator.getDataSourceTypeFromArcGISWholeServiceUrl(e)===o.DataSourceTypes.SceneService;if(t){if(s[e]=t,a){const i=e.replace("/SceneServer","/FeatureServer"),o=Object.assign(Object.assign({},t),{sourceUrl:i});s[i]=o}}else delete s[e],a&&delete s[e.replace("/SceneServer","/FeatureServer")];this.props.onChange(s)}}render(){const e=this.props.needProxyItems,t=this.props.proxySettingConfigs;return o.React.createElement("div",{className:(0,o.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},o.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:x.defaultMessages.subscriberWarning})),o.React.createElement("div",{className:"secondary-title mt-5 mb-4"},this.props.intl.formatMessage({id:"data",defaultMessage:x.defaultMessages.data})),o.React.createElement("table",{className:"content-table w-100"},o.React.createElement("thead",{className:"content-table-header container"},o.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>o.React.createElement("th",{key:t,className:(0,o.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),o.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((i,s)=>{var a,n;const l=e[i];return o.React.createElement(Ct,{isPremium:l.isPremium,isSubscriber:l.isSubscriber,sourceUrl:i,intl:this.props.intl,key:s,onChange:this.onProxyChange,label:null===(n=null===(a=l.items)||void 0===a?void 0:a[0])||void 0===n?void 0:n.label,proxySettingConfig:null==t?void 0:t[i]})})))))}}const kt=(0,o.injectIntl)((0,v.withStyles)(jt,"ProxySetting"));var Ot;!function(e){e.IMAGE="image",e.ICON="icon"}(Ot||(Ot={}));var Pt=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};const Tt={};class Nt extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxySettingConfigs=e=>Pt(this,void 0,void 0,(function*(){var t,i;const s={},a=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies;return Object.keys(e).forEach((e=>{const t=pt(e,a);t&&(s[e]=t.without("id").without("proxyId").without("proxyUrl"))})),s})),this.registerApp=()=>Pt(this,void 0,void 0,(function*(){var e,t,i,s;const a=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(Tt[a])return yield Tt[a];const n=`${null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.portalUrl}/sharing/rest/oauth2/registerApp`;return Tt[a]=o.esri.restRequest.request(n,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:a,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield Tt[a]})),this.createProxies=e=>Pt(this,void 0,void 0,(function*(){var t,i,s;if(!e)return yield Promise.resolve(null);const a=null===(s=null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.appProxies,n={};let l=[];if(Object.keys(e).forEach((t=>{const i=e[t];if(!i)return;const o=i.hitsPerInterval,s=i.intervalSeconds,r=pt(t,a);ut(r,t,o,s)?n[r.id]=r:l=l.concat({sourceUrl:t,hitsPerInterval:o,intervalSeconds:s})})),0===l.length)return(0,o.Immutable)(n);mt()||(yield this.registerApp());const r={referrers:[this.getAppUrl()].concat(o.proxyUtils.getProxyReferrers())},c=yt();return o.esri.restRequest.request(c,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:r,proxies:l}}).then((e=>{var t,i;const s=(null==e?void 0:e.appProxies)||[],a=n,l=null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig,r=null==l?void 0:l.appProxies;return s.forEach((e=>{const t=pt(e.sourceUrl,r),i=(null==t?void 0:t.id)||o.appConfigUtils.getUniqueId(l.set("appProxies",r?r.merge(a):a),"appProxy");a[i]=Object.assign(Object.assign({},e),{id:i})})),(0,o.Immutable)(a)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,i,s,a,n;const l=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,r=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appInfo,c="Web Experience Template"===(null==r?void 0:r.type),d=null===(a=o.urlUtils.getAppUrl({appId:l,isTemplate:c}))||void 0===a?void 0:a.replace(/^\//,"");return`${null===(n=this.getAppRootUrl())||void 0===n?void 0:n.replace(/\/$/,"")}/${d}`},this.onProxyConfigChange=e=>{this.setState({proxySettingConfigs:e})},this.onFinish=()=>{var e,t,i,s;this.setState({isLoading:!0});const a=this.state.proxySettingConfigs||{},n=null===(i=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies,l=n&&Object.values(n).filter((e=>{var t;let i=a[null==e?void 0:e.sourceUrl];if(It.dataSourceJsonCreator.getDataSourceTypeFromArcGISWholeServiceUrl(null==e?void 0:e.sourceUrl)===o.DataSourceTypes.FeatureService){const o=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),s=a[o];i=i||Object.assign(Object.assign({},s),{sourceUrl:null==e?void 0:e.sourceUrl})}return!i||!ut(e,i.sourceUrl,i.hitsPerInterval,i.intervalSeconds)}));ht(null==l?void 0:l.map((e=>e.proxyId)),null===(s=this.state)||void 0===s?void 0:s.getAppConfigAction()).then((()=>{this.createProxies(a).then((e=>{var t;if(!this.__unmount){if(e){const i=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==i||i.editAppProxy(e[t])})),null==i||i.exec()}const i=(0,o.getAppStore)().getState().appStateInBuilder.appConfig;this.props.onFinish(i).then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,i,s,a,n,l,r,c,d,p;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(s=null===(i=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===i?void 0:i.palette)||void 0===s?void 0:s.secondary[300]};
        line-height: ${o.polished.rem(40)};
        color: ${null===(r=null===(l=null===(n=null===(a=this.props)||void 0===a?void 0:a.theme)||void 0===n?void 0:n.colors)||void 0===l?void 0:l.palette)||void 0===r?void 0:r.dark[800]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(p=null===(d=null===(c=this.props)||void 0===c?void 0:c.theme)||void 0===d?void 0:d.colors)||void 0===p?void 0:p.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxySettingConfigs:null,needProxyItems:null}}componentDidMount(){this.__unmount=!1,o.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.initNeedProxyItemsAndProxySettingConfigs()}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&this.initNeedProxyItemsAndProxySettingConfigs()}initNeedProxyItemsAndProxySettingConfigs(){return Pt(this,void 0,void 0,(function*(){this.setState({isLoading:!0});try{const e=yield lt(),t=yield this.getProxySettingConfigs(e);this.__unmount||this.setState({proxySettingConfigs:t,needProxyItems:e,isLoading:!1})}catch(e){this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}}))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxySettingConfigs,t=this.state.needProxyItems,i=this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:x.defaultMessages.subscriberContents});return(0,o.jsx)(x.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,o.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static","aria-label":i},(0,o.jsx)(x.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,o.jsx)("div",{className:"flex-grow-1 text-truncate"},i)),(0,o.jsx)(x.ModalBody,{className:"d-flex px-30"},(0,o.jsx)(kt,{onChange:this.onProxyConfigChange,proxySettingConfigs:e,needProxyItems:t})),(0,o.jsx)(x.ModalFooter,{className:"px-30"},(0,o.jsx)(x.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:o.defaultMessages.publish})),(0,o.jsx)(x.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:o.defaultMessages.cancel}))),this.state.isLoading&&(0,o.jsx)(x.Loading,{type:o.LoadingType.Secondary}),this.state.isError&&(0,o.jsx)(x.Toast,{open:this.state.isError,type:x.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"creatProxyToPublishAppError",defaultMessage:x.defaultMessages.creatProxyToPublishAppError})}))}}const Mt=(0,v.withStyles)((0,v.withTheme)((0,o.injectIntl)(Nt)),"ProxySettingPopup"),Rt=o.ReactRedux.connect(((e,t)=>{var i,o;return{appProxies:null===(o=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.appProxies}}))(Mt);class Lt extends o.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&o.css`
      background-color: ${e.colors.palette.light[300]};
      ${(0,v.popperPointer)({background:e.colors.palette.light[300],border:{color:e.colors.palette.light[600],width:"1px"}})}
    `}render(){const e=this.props,{pageId:t,sizemode:i,dispatch:s}=e,a=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["pageId","sizemode","dispatch"]);return(0,o.jsx)(x.Popper,Object.assign({className:"page-aware-popper",css:this.getStyle()},a))}}const Dt=o.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(Lt);var At=f(55339),Et=f.n(At);const Ut=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Et()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var Ft=f(4077),Bt=f.n(Ft);const $t=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Bt()},s)):o.React.createElement("svg",Object.assign({className:a},s))},Wt=1e3;class zt extends o.React.PureComponent{constructor(e){super(e),this.sectionItem={itemType:o.LayoutItemType.Section,label:this.props.intl.formatMessage({id:"section",defaultMessage:o.defaultMessages.section}),uri:"",manifest:{properties:{},defaultSize:{width:500,height:500}},icon:"../builder/widgets/element-selector/dist/runtime/assets/section.svg",name:"section",group:9,order:900},this.groupLabelMap={1:this.props.intl.formatMessage({id:"mapCentric",defaultMessage:x.defaultMessages.mapCentric}),2:this.props.intl.formatMessage({id:"dataCentric",defaultMessage:x.defaultMessages.dataCentric}),3:this.props.intl.formatMessage({id:"pageElements",defaultMessage:x.defaultMessages.pageElements}),4:this.props.intl.formatMessage({id:"menuAndTollbars",defaultMessage:x.defaultMessages.menuAndTollbars}),8:this.props.intl.formatMessage({id:"layout",defaultMessage:o.defaultMessages.layout}),9:this.props.intl.formatMessage({id:"section",defaultMessage:o.defaultMessages.section})},this.allGroup={value:Wt,label:this.props.intl.formatMessage({id:"all",defaultMessage:x.defaultMessages.all})},this.getRequireEnterpriseIconTooltip=e=>{if((null==e?void 0:e.length)>0){const t=e.join(", ");return this.props.intl.formatMessage({id:"requireEnterpriseAndUserTypeExtensions",defaultMessage:x.defaultMessages.requireEnterpriseAndUserTypeExtensions},{userTypeExtensions:t})}return this.props.intl.formatMessage({id:"requireEnterprise",defaultMessage:x.defaultMessages.requireEnterprise})},this.WidgetCard=({widgetInfo:e})=>{var t,i,s,a;return(0,o.jsx)("div",{className:"d-flex align-items-start justify-content-center widget-card"},(null===(t=e.manifest)||void 0===t?void 0:t.requireEnterprise)&&(0,o.jsx)(x.Button,{title:this.getRequireEnterpriseIconTooltip(null===(i=e.manifest)||void 0===i?void 0:i.requiredUserTypeExtensions),type:"tertiary",className:"widget-enterprise-btn",icon:!0,size:"sm"},(0,o.jsx)($t,null)),(0,o.jsx)(x.Button,{className:"w-100 h-100 p-0",key:e.name,onClick:()=>{this.props.onSelect(e)},"aria-label":e.label},(0,o.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content"},(0,o.jsx)("div",{className:"d-flex justify-content-center"},(0,o.jsx)("div",{className:"widget-card-image"},(0,o.jsx)(x.Icon,{size:20,className:"w-100 m-0",autoFlip:null===(a=null===(s=e.manifest)||void 0===s?void 0:s.properties)||void 0===a?void 0:a.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:this.props.theme.colors.dark}))),(0,o.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,o.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:o.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label)))))},this.WidgetGroup=({group:e})=>{if(!e)return null;const t=this.WidgetCard;return(0,o.jsx)("div",{className:"widget-group w-100 mb-4"},(0,o.jsx)("h4",{className:"group-label w-100 text-break",title:e.label},e.label),(0,o.jsx)("div",{className:"card-grid m-0"},e.itemList.sort(((e,t)=>e.order-t.order)).map(((e,i)=>e?(0,o.jsx)(t,{widgetInfo:e,key:i}):(0,o.jsx)("div",{className:"widget-card",style:{visibility:"hidden"},key:i})))))},this.getGroupList=(e,t,i)=>{var o,s,a,n;const l=[this.allGroup];if(e){const t=this.getCommonGroups(e,Wt,i);t&&Object.values(t).forEach((e=>{"number"==typeof e.groupId&&l.push({value:e.groupId,label:this.getGroupLabel(e.groupId)})}))}return(null===(s=null===(o=this.state.jimuForBuilderUtils)||void 0===o?void 0:o.showCustomWidgets)||void 0===s?void 0:s.call(o,e))&&this.getCustomGroup(e,t,Wt,i)&&l.push({value:null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP,label:this.getGroupLabel(null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP)}),l.filter((e=>!!e.label))},this.changeSelectedGroup=e=>{this.setState({selectedGroup:e.target.value})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value,selectedGroup:Wt})},this.state={selectedGroup:Wt,commonWidgetList:null,remoteCustomWidgetList:null,searchValue:"",jimuForBuilderUtils:null},this.searchInputRef=o.React.createRef()}componentDidMount(){this.loadJimuForBuilderUtilsPromise=o.cancelablePromise.cancelable(o.moduleLoader.loadModule("jimu-for-builder").then((e=>{var t;this.setState({jimuForBuilderUtils:null==e?void 0:e.utils}),this.groupLabelMap[null===(t=null==e?void 0:e.utils)||void 0===t?void 0:t.CUSTOM_GROUP]=this.props.intl.formatMessage({id:"custom",defaultMessage:x.defaultMessages.custom})}))),o.lodash.defer((()=>{this.searchInputRef.current.focus()}))}componentDidUpdate(e,t){!t.jimuForBuilderUtils&&this.state.jimuForBuilderUtils&&(this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList),this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList))}componentWillUnmount(){var e,t,i;null===(e=this.loadJimuForBuilderUtilsPromise)||void 0===e||e.cancel(),null===(t=this.loadCommonWidgetsPromise)||void 0===t||t.cancel(),null===(i=this.loadCommonWidgetsPromise)||void 0===i||i.cancel()}loadCommonWidgetList(e){e&&(this.loadCommonWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{var t,i;const o=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));null===(i=(t=this.props).onWidgetLoaded)||void 0===i||i.call(t),this.setState({commonWidgetList:o})}))))}loadCustomWidgetList(e){e&&(this.loadRemoteCustomWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{var t,i;const o=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));null===(i=(t=this.props).onWidgetLoaded)||void 0===i||i.call(t),this.setState({remoteCustomWidgetList:o})}))))}getStyle(){const{theme:e}=this.props;return o.css`
      color: ${e.colors.palette.dark[800]};

      .widget-enterprise-btn {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .px-20 {
        padding-left: 18px;
        padding-right: 18px;
      }

      .pt-20 {
        padding-top: 20px;
      }

      .list-container {
        height: calc(100% - 150px);
        overflow-y: auto;
        padding-bottom: 20px;
      }

      .groups {
        font-size: 13px;
        font-weight: 600;
        color: ${e.colors.palette.dark[400]};
      }

      .group-select {
        width: 210px;
      }

      .widget-group {
        .group-label{
          font-size: 13px;
          font-weight: 600;
          color: ${e.colors.palette.dark[400]};
        }
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-row-gap: 0.5rem;
        grid-column-gap: 0.5rem;
      }

      .widget-card {
        height: 80px;
        width: 108px;
        padding: 0;
        border: none;
        position: relative;

        .widget-card--content {
          padding-top: 12px;
          cursor: pointer;
          background-color: ${e.colors.palette.light[500]};
          &:hover {
            background-color: ${e.colors.palette.light[600]};
          }
        }

        .widget-card-image {
          width: 20px;
          height: 20px;
          &:after {
            display: none;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }

        .widget-card-name {
          line-height: 1rem;
          max-height: 2rem;
          white-space: normal;
          color: ${e.colors.dark};
          padding: 0 10px;
          font-size: 13px;
        }
      }
    `}getGroupLabel(e){return this.groupLabelMap[e]}getCommonGroups(e,t,i){const o=t===Wt?e:null==e?void 0:e.filter((e=>e.group===t)),s={};return null==o||o.forEach((e=>{var t;e.group!==(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)&&this.isFuzzySearch(e.label,i)&&(s[e.group]||(s[e.group]={label:this.getGroupLabel(e.group),groupId:e.group,itemList:[]}),s[e.group].itemList.push(e))})),s}getCustomGroup(e,t,i,o){var s,a,n;if(i===Wt||i===(null===(s=this.state.jimuForBuilderUtils)||void 0===s?void 0:s.CUSTOM_GROUP)){const i=(t||[]).concat((null==e?void 0:e.filter((e=>{var t;return e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)})))||[]).filter((e=>this.isFuzzySearch(e.label,o)));if(!o||i.length>0)return{label:this.getGroupLabel(null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP),groupId:null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP,itemList:i}}return null}isFuzzySearch(e,t){return!!e&&(!t||e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}render(){var e,t,i,s,a,n;const l=this.WidgetGroup,{commonWidgetList:r,remoteCustomWidgetList:c,selectedGroup:d,searchValue:p}=this.state,u=!!r;let m=r;u&&this.props.isAccepted(this.sectionItem,this.props.isPlaceholder)&&(m=r.concat([this.sectionItem]));const g=u&&this.getCommonGroups(m,d,p),h=null===(t=null===(e=this.state.jimuForBuilderUtils)||void 0===e?void 0:e.showCustomWidgets)||void 0===t?void 0:t.call(e,m),f=h&&this.getCustomGroup(m,c,d,p),y=this.getGroupList(m,c,p);return(0,o.jsx)("div",{className:`content mt-4 ${window.jimuConfig.isInBuilder?v.Theme2GlobalStyleClassName:""}`,css:this.getStyle()},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-4 px-20"},(0,o.jsx)(x.TextInput,{ref:this.searchInputRef,prefix:(0,o.jsx)(q,{size:16,color:null===(n=null===(a=null===(s=null===(i=this.props.theme)||void 0===i?void 0:i.colors)||void 0===s?void 0:s.palette)||void 0===a?void 0:a.dark)||void 0===n?void 0:n[200]}),value:p,onChange:this.onSearchValueChange,className:"w-100",size:"sm",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:o.defaultMessages.search}),allowClear:!0})),(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-4 px-20"},(0,o.jsx)("div",{className:"groups"},this.props.intl.formatMessage({id:"category",defaultMessage:x.defaultMessages.category})),(0,o.jsx)(x.Select,{className:"group-select",size:"sm",value:d,onChange:this.changeSelectedGroup},y.map(((e,t)=>(0,o.jsx)("option",{value:e.value,key:t,selected:e.value===d},e.label))))),(0,o.jsx)("div",{className:"w-100 list-container px-20"},!r&&(0,o.jsx)(x.Loading,{type:x.LoadingType.Secondary}),u&&Object.values(g).sort(((e,t)=>e.groupId-t.groupId)).map(((e,t)=>(0,o.jsx)(l,{key:t,group:e}))),h&&(0,o.jsx)(l,{group:f})))}}zt.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const Vt=(0,o.injectIntl)(zt),Gt=[(0,x.getFallbackPlacementsModifier)(["top","right","bottom","left"],!0),{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:0}}];class _t extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=e=>{this.state.open&&this.props.onClose&&this.props.onClose(e)},this.onWidgetLoaded=()=>{this.setState({generation:this.state.generation+1})},this.state={open:!0,generation:0}}getStyle(){const{theme:e}=this.props;return o.css`
      background-color: ${e.colors.palette.light[400]};
      color: ${e.colors.palette.dark[800]};

      .content {
        height: 600px;
        width: 380px;
        overflow: hidden;
        padding: 0;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        color: ${e.colors.palette.dark[600]};
      }

      .px-20 {
        padding-left: 20px;
        padding-right: 20px;
      }

      .pt-20 {
        padding-top: 20px;
      }
    `}render(){var e;return this.state.open?(0,o.jsx)(Dt,{theme:this.props.theme,placement:null!==(e=this.props.placement)&&void 0!==e?e:"bottom",toggle:this.togglePopper,css:this.getStyle(),version:this.state.generation,modifiers:Gt,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0},(0,o.jsx)("div",{className:"shadow-lg content",css:this.props.css},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center px-20 pt-20"},(0,o.jsx)("div",{className:"title"},this.props.intl.formatMessage({id:"addWidget",defaultMessage:x.defaultMessages.addWidget})),(0,o.jsx)(x.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.togglePopper,title:this.props.intl.formatMessage({id:"close",defaultMessage:o.defaultMessages.close})},(0,o.jsx)(Ut,null))),(0,o.jsx)(Vt,{isPlaceholder:this.props.isPlaceholder,isAccepted:this.props.isAccepted,onSelect:this.props.onSelect,onWidgetLoaded:this.onWidgetLoaded,theme:this.props.theme}))):null}}_t.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const Jt=(0,v.withTheme2)((0,o.injectIntl)(_t));var Ht=f(96262);function Kt(e){var t,i,s,a;const{template:n,onClick:l}=e,r=(0,o.getAppStore)().getState().appContext.locale,c=null!==(i=null===(t=n.i18nLabel)||void 0===t?void 0:t[r])&&void 0!==i?i:n.label,d=null!==(a=null===(s=n.i18nDescription)||void 0===s?void 0:s[r])&&void 0!==a?a:n.description,p=null!=n.gifThumbnail,u="templage_desc_"+n.name,m=o.React.useMemo((()=>o.css`
    transform: ${(0,o.getAppStore)().getState().appContext.isRTL&&n.flipThumbnail?"scaleX(-1);":""}  ;
  `),[n]);return(0,o.jsx)("div",{className:"block-item"},(0,o.jsx)(x.Tooltip,{title:d},(0,o.jsx)(x.Button,{role:"option","aria-label":c,"aria-describedby":u,onClick:l,className:"block-item--icon p-0"},(0,o.jsx)("img",{className:(0,o.classNames)("default-icon",{"multiple-icon":p}),css:m,src:n.thumbnail,draggable:!1,width:n.thumbnailWidth/2,height:n.thumbnailHeight/2}),p&&(0,o.jsx)("img",{className:(0,o.classNames)("gif-icon",{"multiple-icon":p}),css:m,draggable:!1,src:n.gifThumbnail}))),(0,o.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:o.css`max-width: ${n.thumbnailWidth/2}px`},c),(0,o.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},d))}var qt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};function Qt(e){const{templates:t,onItemSelect:i}=e,s=qt(e,["templates","onItemSelect"]),a=o.React.useMemo((()=>(0,v.getBuilderThemeVariables)()),[]),n=o.React.useMemo((()=>o.css`
    width: auto;
    padding: 20px;
    background-color: ${a?a.colors.palette.light[300]:"var(--light-300)"};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    .block-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      padding: 0;

      .jimu-btn {
        border-radius: unset !important;
      }

      .block-item--icon {
        background: ${a?a.colors.palette.light[200]:"var(--light-200)"};
        border: none;
        position: relative;

        .default-icon {
          opacity: 1;
        }
        .gif-icon {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .block-item--icon:hover {
        outline: 2px solid ${a?a.colors.palette.primary[600]:"var(--primary-600)"};
        .default-icon.multiple-icon {
          opacity: 0;
        }
        .gif-icon {
          opacity: 1;
        }
      }

      .block-item-label {
        color: ${a?a.colors.palette.dark[400]:"var(--dark-400)"};
      }
    }

    .size-mode-SMALL & .block-item {
      width: 140px;
      height: auto;
    }
  `),[a]);return(0,o.jsx)("div",Object.assign({className:window.jimuConfig.isInBuilder?v.Theme2GlobalStyleClassName:"",css:n},s,{role:"listbox"}),t.map((e=>(0,o.jsx)(Kt,{key:e.name,template:e,onClick:()=>{i(e)}}))))}class Xt extends o.React.PureComponent{constructor(e){super(e),this.onTabSelect=e=>{this.props.onTabSelect(e)},this.onFullScreenTypeChange=e=>{this.setState({fullScreenType:e.target.value})},this.state={fullScreenType:"all"}}render(){const{theme:e,formatMessage:t}=this.props,{fullScreenType:i}=this.state;let s=[];return s="fixed"===i?(0,Ht.getFullScreenPageTemplates)():"grid"===i?(0,Ht.getFullScreenGridPageTemplates)():[(0,Ht.getFullScreenPageTemplates)()[0],(0,Ht.getFullScreenGridPageTemplates)()[0]].concat((0,Ht.getFullScreenPageTemplates)().slice(1),(0,Ht.getFullScreenGridPageTemplates)().slice(1)),(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h5",{className:"pt-4 px-5 mb-2 text-dark-600 text-truncate",title:t("addPage")},t("addPage")),(0,o.jsx)(x.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:o.css`
            height: calc(100% - 49px);
            width: 390px;
            .tab-content {
              height: calc(100% - 30px);
              .tab-pane {
                height: 100%;
                overflow-y: scroll;
              }
              .tab-pane:first-of-type {
                overflow-y: hidden;
              }
            }
            .jimu-nav {
              padding-left: ${e&&e.sizes[5]};
              padding-right: ${e&&e.sizes[5]};
            }
            .nav-item {
              width: 50%;
              .tab-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          `,onChange:this.onTabSelect},(0,o.jsx)(x.Tab,{id:"fullScreenApp",title:t("fullScreenApp"),className:x.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)("div",{className:"d-flex flex-column h-100"},(0,o.jsx)(x.Select,{className:"align-self-end my-4",value:i,"aria-label":t("page"),css:o.css`
                  width: 120px;
                  padding-right: 1.2rem;
                `,size:"sm",onChange:this.onFullScreenTypeChange},(0,o.jsx)("option",{value:"all"},t("all")),(0,o.jsx)("option",{value:"fixed"},t("fixed")),(0,o.jsx)("option",{value:"grid"},t("grid"))),(0,o.jsx)(Qt,{className:(0,o.classNames)({[x.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:s,onItemSelect:this.props.onItemSelect,css:o.css`
                  height: calc(100% - 64px);
                  overflow: auto;
                  padding-top: 0;
                `}))),(0,o.jsx)(x.Tab,{id:"scrollingPage",title:t("scrollingPage"),className:x.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(Qt,{className:(0,o.classNames)({[x.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,Ht.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const Yt=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class Zt extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(Dt,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:Yt,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            width: 390px;
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(Xt,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}class ei extends o.React.PureComponent{constructor(e){super(e),this.onTypeChange=e=>{this.setState({type:e.target.value})},this.state={type:"all"}}render(){const{formatMessage:e}=this.props,{type:t}=this.state;let i=[];return i="fixedModalWindow"===t?(0,Ht.getFixedModaldWindowTemplates)():"fixedNonModalWindow"===t?(0,Ht.getFixedNonModaldWindowTemplates)():"anchoredWindow"===t?(0,Ht.getAnchoredWindowTemplates)():(0,Ht.getWindowTemplates)(),(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h5",{className:"pt-4 px-5 mb-2 text-dark-600 text-truncate",title:e("addDialog")},e("addDialog")),(0,o.jsx)("div",{className:"d-flex flex-column h-100"},(0,o.jsx)(x.Select,{className:"align-self-end my-4",value:this.state.type,"aria-label":e("addDialog"),css:o.css`
              width: 170px;
              padding-right: 1.2rem;
            `,size:"sm",onChange:this.onTypeChange},(0,o.jsx)("option",{value:"all"},e("all")),(0,o.jsx)("option",{value:"fixedModalWindow"},e("fixedModalWindow")),(0,o.jsx)("option",{value:"fixedNonModalWindow"},e("fixedNonModalWindow")),(0,o.jsx)("option",{value:"anchoredWindow"},e("anchoredWindow"))),(0,o.jsx)(Qt,{templates:i,onItemSelect:this.props.onItemSelect,css:o.css`
              height: calc(100% - 110px);
              overflow: auto;
              padding-top: 0;
              .block-item .block-item--icon {
                outline-offset: -2px;
              }
            `})))}}const ti=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class ii extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(Dt,{placement:"bottom",theme:t,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:ti,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            width: 390px;
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(ei,{formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const oi=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function si(e){const{title:t,templates:i,templateContentStyle:s,referenceElement:a,onItemSelect:n,onClose:l}=e,r=o.React.useMemo((()=>e.theme?e.theme:window.jimuConfig.isInBuilder?(0,v.getTheme2)():(0,v.getTheme)()),[e.theme]),c=o.React.useMemo((()=>o.css`
    min-width: 300px;
    width: auto;
    border: 1px solid ${r?r.colors.palette.light[600]:"var(--light-600)"};
    box-shadow: 0 4px 20px 4px rgba(0,0,0,0.50);

    .template-content {
      max-height: 600px;
      height: ${t?"calc(100% - 50px)":"100%"};
      overflow: auto;
    }

    .size-mode-SMALL & .template-content {
      width: 320px;
    }
  `),[r,t]),d=o.React.useCallback((()=>{null==l||l(),"function"==typeof(null==a?void 0:a.focus)&&o.lodash.defer((()=>{null==a||a.focus()}))}),[l,a]),p=o.React.useCallback((e=>{d(),n(e)}),[d,n]);return(0,o.jsx)(Dt,{placement:"bottom",theme:r,css:c,reference:a,offset:[0,10],toggle:d,open:!0,showArrow:!0,modifiers:oi},t&&(0,o.jsx)("h5",{className:"text-dark-600 text-truncate title px-5 pt-4 mb-0"},t),(0,o.jsx)("div",{className:"template-content",style:s},(0,o.jsx)(Qt,{templates:i,onItemSelect:p})))}var ai=f(59216),ni=f.n(ai);const li=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:ni()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var ri=f(34750),ci=f.n(ri);const di=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:ci()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var pi=f(99820),ui=f.n(pi);const mi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:ui()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var gi=f(58959),hi=f.n(gi);const vi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:hi()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var fi=f(94070),yi=f.n(fi);const Si=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:yi()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class bi extends o.React.PureComponent{constructor(e){super(e),this.preValue=null,this.initRuleOptionName=(e,t)=>{var i,s;const a=(null==e?void 0:e.map((e=>null==e?void 0:e.ruleOptionName)))||[],n=(null==t?void 0:t.map((e=>null==e?void 0:e.ruleOptionName)))||[];let l=!1;(null==e?void 0:e.length)===(null==t?void 0:t.length)&&a.join("")===n.join("")||(l=!0,this.initEditOptionNameStatus(e)),(l||!(null===(s=null===(i=this.state)||void 0===i?void 0:i.ruleOptionName)||void 0===s?void 0:s.length)&&(null==a?void 0:a.length)>0)&&this.setState({ruleOptionName:(0,o.Immutable)(a)})},this.initEditOptionNameStatus=e=>{const t=e.map((e=>!1));this.setState({editOptionNameStatus:t})},this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:x.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,i,o)=>{const s=this.deepClone(this.props.value);s[t].rule[e][i]=o,this.props.onChange(s,t)},this.onOptionKeyUp=(e,t,i,o,s)=>{"Enter"!==e.key&&" "!==e.key||this.onOptionChange(t,i,o,s)},this.onSelectChange=(e,t,i)=>{const o=e[0];if(!o)return;const s=this.deepClone(this.props.value),a=o.name;s[i].rule[t].jimuFieldName=a,this.props.onChange(s,i)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,i=this.createOptionText(t),o=this.deepClone(this.state.option);o.ruleOptionName=i;const s=e?this.deepClone(this.props.value):[];s.push(o),this.props.onChange(s)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:x.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const i=e+1;return this.createOptionText(i)},this.deleteOption=(e,t)=>{if(t&&"Enter"!==t.key&&" "!==t.key)return!1;const i=this.deepClone(this.props.value);i.splice(e,1),this.props.onChange(i)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t=!1,i)=>{const{editOptionNameStatus:s}=this.state;if(i&&"Enter"!==i.key&&" "!==i.key)return!1;const a=(null==s?void 0:s.asMutable({deep:!0}))||[];a[e]=t,this.setState({editOptionNameStatus:(0,o.Immutable)(a)},(()=>{var e;null===(e=this.inputRef)||void 0===e||e.select()}))},this.handleOptionNameChange=(e,t)=>{if(!t)return;const i=this.deepClone(this.props.value),o=t;!this.isOptionNameRepeat(o)&&o&&(i[e].ruleOptionName=o),this.props.onChange(i)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((i=>{i.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const i in e){const o=("object"==typeof e[i]||"function"==typeof e[i])&&null!==e[i];t[i]=o?this.deepClone(e[i]):e[i]}return t},this.setInputRef=e=>{e&&(this.inputRef=e,e.focus())},this.createRuleOptionElement=(e,t,i,s)=>{const a=t.jimuFieldName?(0,o.Immutable)([t.jimuFieldName]):(0,o.Immutable)([]);return(0,o.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||i},this.props.useDataSource&&(0,o.jsx)("div",{className:"sort-field-selector"},(0,o.jsx)(at.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,i,s)},selectedFields:a,isDataSourceDropDownHidden:!0,useDropdown:!0,useKeyUpEvent:!0})),[{getTitle:()=>this.nls("ascending"),order:o.OrderRule.Asc},{getTitle:()=>this.nls("decending"),order:o.OrderRule.Desc}].map(((e,a,n)=>(0,o.jsx)(x.Button,{key:a,title:e.getTitle(),size:"sm",type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(i,s,"order",this.props.singleRowItemOnly?[...n,n[0]][a+1].order:e.order)},onKeyUp:t=>{this.onOptionKeyUp(t,i,s,"order",this.props.singleRowItemOnly?[...n,n[0]][a+1].order:e.order)}},e.order===o.OrderRule.Asc&&(0,o.jsx)(vi,{size:"12",className:"sort-arrow-down-icon"}),e.order===o.OrderRule.Desc&&(0,o.jsx)(mi,{size:"12",className:"sort-arrow-down-icon"})))))},this.onRuleOptionNameChange=(e,t)=>{var i;const s=e.target.value,a=(null===(i=this.state.ruleOptionName)||void 0===i?void 0:i.asMutable({deep:!0}))||[];a[t]=s,this.setState({ruleOptionName:(0,o.Immutable)(a)})},this.createOptionNameElement=(e,t)=>{var i;const{editOptionNameStatus:s}=this.state,a=e.ruleOptionName,n=null===(i=this.state.ruleOptionName)||void 0===i?void 0:i[t],l=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:x.defaultMessages.optionNamePlaceholder}),r=(0,o.jsx)(x.TextInput,{className:"flex-grow-1 h-100 edit-input",size:"sm",type:"text",defaultValue:a,onChange:e=>{this.onRuleOptionNameChange(e,t)},onAcceptValue:e=>{this.handleOptionNameChange(t,e)},onBlur:()=>{this.toggleOptionNameDisplay(t,!1)},ref:e=>{this.setInputRef(e)},placeholder:l,title:n||l,"aria-label":n||l});return(0,o.jsx)("div",{className:"option-name d-flex align-items-center flex-grow-1","aria-label":a},s[t]?r:(0,o.jsx)("span",{id:"optionNameCon",title:a,onDoubleClick:()=>{this.toggleOptionNameDisplay(t,!0)}},a),(0,o.jsx)(x.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),"aria-describedby":"optionNameCon",onClick:()=>{this.toggleOptionNameDisplay(t,!s[t])},onKeyDown:e=>{this.toggleOptionNameDisplay(t,!s[t],e)}},(0,o.jsx)(li,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,i)=>{let s;s=(0,o.jsx)("div",{className:"close-con text-right"},(0,o.jsx)(x.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(i)},onKeyUp:e=>{this.deleteOption(i,e)}},(0,o.jsx)(Ut,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const a=()=>t.rule.map(((t,o)=>this.createRuleOptionElement(e,t,o,i)));return(0,o.jsx)("div",{className:"select-con flex-grow-1",key:i,role:"group","aria-label":t.ruleOptionName},this.props.singleRowItemOnly&&(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con"},(0,o.jsx)(Si,{size:14}),a(),s))||(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con d-flex align-items-center"},(()=>this.createOptionNameElement(t,i))(),s),a()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:x.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:o.OrderRule.Asc}]},ruleOptionName:null,editOptionNameStatus:(0,o.Immutable)([])}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var i,o,s,a;this.preValue=null==e?void 0:e.value,this.initRuleOptionName(null===(i=this.props)||void 0===i?void 0:i.value,null==e?void 0:e.value),(null===(o=null==e?void 0:e.useDataSource)||void 0===o?void 0:o.dataSourceId)!==(null===(a=null===(s=this.props)||void 0===s?void 0:s.useDataSource)||void 0===a?void 0:a.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:x.defaultMessages.invalidExpression});return(0,o.jsx)("div",{className:(0,o.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",null,(0,o.jsx)(x.Button,{type:"tertiary",className:"add-option-btn",onClick:this.addOption},(0,o.jsx)(di,{size:"s",className:"add-option-icon"}),(0,o.jsx)("span",null,this.props.intl.formatMessage({id:"addOption",defaultMessage:x.defaultMessages.addOption}))),(0,o.jsx)(o.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(i=>Array.isArray(e)?(0,o.jsx)(Q.List,{size:"sm",className:"setting-ui-unit-list",itemsJson:e.asMutable({deep:!0}).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,o]=i,s=o.map((e=>e.itemStateDetailContent));e.updateType===Q.TreeItemActionType.HandleDidDrop&&this.props.onChange(s)},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:Q.TreeItemActionType.RenderOverrideItem,children:[{name:Q.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:Q.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:Q.TreeItemActionType.RenderOverrideItemBody,children:[{name:Q.TreeItemActionType.RenderOverrideItemDragHandle},{name:Q.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{var i;const{itemJsons:s}=t.props,a=s[0],n=s[1];return this.createOptionElement((0,o.Immutable)([null===(i=this.props.useDataSource)||void 0===i?void 0:i.asMutable({deep:!0})]),a.itemStateDetailContent,n.indexOf(a))}}):t)),Array.isArray(e)&&0===e.length&&(0,o.jsx)("div",{className:"no-sort-remind"},(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:x.defaultMessages.noOptionRemindText})),(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:x.defaultMessages.pleaceAddOne})))))}}const wi=(0,v.withStyles)((0,o.injectIntl)(bi),"SortSetting");var xi=f(60843),Ci=f.n(xi);const Ii=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Ci()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var ji=f(18656),ki=f.n(ji);const Oi=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:ki()},s)):o.React.createElement("svg",Object.assign({className:a},s))};const Pi=e=>{const t=o.hooks.useTranslation(x.defaultMessages),{vertical:i=!1,onChange:s,autoFlip:a=!0,className:n,size:l="sm"}=e,r=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["vertical","onChange","autoFlip","className","size"]);return o.React.createElement(x.AdvancedButtonGroup,Object.assign({size:l,className:(0,o.classNames)("setting--direction-selector",n)},r),o.React.createElement(x.Button,{size:l,title:t("horizontal"),type:"default",icon:!0,active:!i,onClick:()=>{s(!1)}},o.React.createElement(Ii,{autoFlip:a})),o.React.createElement(x.Button,{size:l,title:t("vertical"),type:"default",icon:!0,active:i,onClick:()=>{s(!0)}},o.React.createElement(Oi,null)))};var Ti;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(Ti||(Ti={}));class Ni extends o.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,Ti.Auto),this._onCustomSelected=this.onSelect.bind(this,Ti.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return o.css`
      .auto-dropdown.jimu-dropdown {
        width: 26px;
        height: 26px;

        .btn {
          padding: 0 !important;
        }
      }

      & > .jimu-dropdown .jimu-dropdown-button,
      & > .jimu-dropdown .jimu-dropdown-button:hover {
        height: 26px;
        padding: 0 0.375rem;
      }
    `}autoInput(){return(0,o.jsx)(x.Input,{style:{width:"110px"},css:o.css`
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,i=t.formatMessage({id:"auto"}),s=t.formatMessage({id:"custom"});return(0,o.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,o.jsx)(x.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,o.jsx)(x.DropdownButton,{icon:!0}),(0,o.jsx)(x.DropdownMenu,null,(0,o.jsx)(x.DropdownItem,{onClick:this._onAutoSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Ti.Auto&&(0,o.jsx)(xt,{size:"s"})),i),(0,o.jsx)(x.DropdownItem,{onClick:this._onCustomSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===Ti.Custom&&(0,o.jsx)(xt,{size:"s"})),s))),e===Ti.Auto&&this.autoInput(),e===Ti.Custom&&this.props.children)}}const Mi=(0,o.injectIntl)(Ni),Ri=e=>{const{title:t,children:i,selected:s,onClick:a}=e,n=(()=>{var e,t,i;const s=(0,v.useTheme)(),a=null===(e=null==s?void 0:s.colors)||void 0===e?void 0:e.palette.primary[600],n=null===(t=null==s?void 0:s.colors)||void 0===t?void 0:t.palette.light[200],l=null===(i=null==s?void 0:s.colors)||void 0===i?void 0:i.black;return o.React.useMemo((()=>o.css`
      width: 100%;
      height:  ${o.polished.rem(50)};
      padding: ${o.polished.rem(8)}  ${o.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l};
      background-color: ${n};
      position: relative;
      &.selected {
        outline: 3px solid ${a};
      }
      >.overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
  `),[a,n,l])})();return(0,o.jsx)("div",{css:n,title:t,className:(0,o.classNames)("quick-style-item",{selected:s}),onClick:a},(0,o.jsx)("div",{className:"overlay"}),i)};const Li=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],Di=(0,v.styled)(x.Popper)((()=>{var e,t,i,o;const s=(0,v.getTheme2)(),a=null===(e=null==s?void 0:s.colors)||void 0===e?void 0:e.palette.dark[600],n=null===(t=null==s?void 0:s.colors)||void 0===t?void 0:t.palette.dark[800];return`\n    background-color: ${null===(i=null==s?void 0:s.colors)||void 0===i?void 0:i.palette.light[300]};\n    color: ${a};\n    border: 1px solid ${null===(o=null==s?void 0:s.colors)||void 0===o?void 0:o.palette.light[600]};\n    > .popper-box {\n      > .panel-header {\n        color: ${a};\n        .action-btn {\n          color: ${a};\n          &:hover {\n            color: ${n};\n          }\n        }\n      }\n    }\n  `})),Ai=e=>{const{className:t,placement:i="right-start",popperNodeRef:s,onInitResizeHandler:a,onInitDragHandler:n,version:l,modifiers:r}=e,c=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className","placement","popperNodeRef","onInitResizeHandler","onInitDragHandler","version","modifiers"]),d=o.React.useRef(null),p=o.hooks.useForkRef(s,d),[u,m]=o.hooks.useControlled({controlled:l,default:0}),g=o.React.useMemo((()=>[...Li,...null!=r?r:[]]),[r]);return o.React.useEffect((()=>{null==a||a((()=>{var e;null===(e=d.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=d.current)||void 0===e||e.classList.remove("d-none")}))}),[a,m]),o.React.useEffect((()=>{null==n||n((()=>{var e;null===(e=d.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=d.current)||void 0===e||e.classList.remove("d-none")}))}),[n,m]),o.React.createElement(Di,Object.assign({className:(0,o.classNames)("shadow-2",t),modifiers:g,placement:i,popperNodeRef:p,version:u},c))};const Ei=e=>{const{onClose:t,children:i,floating:s}=e,a=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["onClose","children","floating"]),n=o.hooks.useTranslation(x.defaultMessages)("quickStyle");return o.React.createElement(Ai,Object.assign({},a,{headerTitle:s?n:"",onHeaderClose:t}),o.React.createElement(o.React.Fragment,null,!s&&o.React.createElement(x.PanelHeader,{className:"px-4 py-2",title:n,onClose:t}),i))},Ui=6,Fi=20,Bi=6;var $i,Wi;!function(e){e.Both="Both",e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}($i||($i={})),function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(Wi||(Wi={}));const zi="FieldName",Vi="FieldValue",Gi=99,_i=1e3,Ji=20,Hi="__",Ki="objectid",qi="address",Qi="Default Address",Xi="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",Yi="ArcGIS World Geocoding Service",Zi={jimuName:Ki,alias:"OBJECTID",type:o.JimuFieldType.Number,name:Ki},eo=(e="",t=[])=>{const i={};return null==t||t.forEach(((e,t)=>{i[null==e?void 0:e.jimuName]=e,0===t&&(i[Ki]=Zi)})),{label:e,idField:Ki,fields:i}},to=(e,t=0)=>{let i=Qi;return null==e||e.forEach((o=>{i=t?`${i}${t}`:i,o.jimuName===i&&(i=to(e,t+=1))})),i},io=(e=[])=>{const t=null==e?void 0:e.map((e=>({jimuName:null==e?void 0:e.alias,alias:null==e?void 0:e.alias,type:o.JimuFieldType.String,name:null==e?void 0:e.alias}))),i=to(t,0),s={jimuName:i,alias:i,type:o.JimuFieldType.String,name:i};return t.unshift(s),{addressFieldsSchema:t,defaultAddressFieldName:i}},oo=(e,t,i,s)=>{const a=s||(e=>{return(t=e)&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(t)?Yi:(e=>{if(!e)return"geocoder";const t=e.split("/");return t[t.length-2]||"geocoder"})(e);var t})(i),n=mo(t,e),l=eo(s);return{id:n,type:o.DataSourceTypes.FeatureLayer,label:a,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:l,geometryType:"esriGeometryPoint"}},so=e=>e?e.type===o.DataSourceTypes.SceneLayer?e.getAssociatedDataSource():e:null,ao=(e,t)=>!(!e||!t)&&t.some((t=>t.dataSourceId===e.dataSourceId)),no=(e,t)=>{var i;return(null===(i=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId))))||void 0===i?void 0:i.length)>0},lo=(e,t)=>{var i;if((null==e?void 0:e.length)!==(null==t?void 0:t.length))return!0;const o=[];return null==e||e.forEach((e=>{var i;const s=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId)));(null==s?void 0:s.length)>0&&o.push({dsFields:null==e?void 0:e.fields,preDsFields:null===(i=s[0])||void 0===i?void 0:i.fields})})),(null==o?void 0:o.length)!==(null==e?void 0:e.length)||(null===(i=null==o?void 0:o.filter((e=>{var t,i,o,s;const a=(null===(t=null==e?void 0:e.dsFields)||void 0===t?void 0:t.length)!==(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.length),n=(null===(s=null===(o=null==e?void 0:e.dsFields)||void 0===o?void 0:o.filter((t=>{var i;return!(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.includes(t))})))||void 0===s?void 0:s.length)>0;return a||n})))||void 0===i?void 0:i.length)>0},ro=(e,t,i)=>{var o,s,a;const n=(null===(o=null==e?void 0:e.useDataSources)||void 0===o?void 0:o.asMutable({deep:!0}))||[],l=(null===(s=null==e?void 0:e.outputDataSources)||void 0===s?void 0:s.asMutable({deep:!0}))||[];if((null==n?void 0:n.length)!==(null==t?void 0:t.length)||(null==l?void 0:l.length)!==(null==i?void 0:i.length))return!0;const r=lo(t,n),c=(null===(a=l.filter((e=>!(null==i?void 0:i.includes(e)))))||void 0===a?void 0:a.length)>0;return r||c},co=e=>null==e?void 0:e.map((e=>e.configId)),po=e=>e&&0!==(null==e?void 0:e.length)?`config_${uo(e)+1}`:"config_0",uo=e=>{var t;const i=null==e?void 0:e.map((e=>{var t;const i=null===(t=null==e?void 0:e.split("_"))||void 0===t?void 0:t.pop();return i?Number(i):0}));return null===(t=null==i?void 0:i.sort(((e,t)=>t-e)))||void 0===t?void 0:t[0]},mo=(e,t)=>{var i;if(!e)return`${t}_output_0`;const o=null===(i=null==e?void 0:e.split("_"))||void 0===i?void 0:i.pop();return`${t}_output_${Number(o)}`};var go=f(77756),ho=f(20663);const vo=e=>{const t={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:Q.TreeItemActionType.RenderOverrideItem,children:[{name:Q.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:Q.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:Q.TreeItemActionType.RenderOverrideItemBody,children:[{name:Q.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:Q.TreeItemActionType.RenderOverrideItemDragHandle},{name:Q.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:Q.TreeItemActionType.RenderOverrideItemTitle},{name:Q.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},i=o.css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `,s=(0,v.useTheme)(),{disPlayField:a,useDataSource:n,onFieldChange:l}=e;return(0,o.jsx)("div",{className:"w-100"},(0,o.jsx)(at.FieldSelector,{useDataSources:n?(0,o.Immutable)([n]):(0,o.Immutable)([]),onChange:e=>{l(e,a,!0)},selectedFields:(0,o.Immutable)(null==a?void 0:a.map((e=>null==e?void 0:e.name))),isMultiple:!0,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{css:i},(0,o.jsx)(Q.List,Object.assign({size:"sm",className:"mt-2",itemsJson:Array.from(a).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${null==e?void 0:e.name}${t}`,itemStateIcon:at.dataComponentsUtils.getIconFromFieldType(e.type,s),itemStateTitle:e.alias||e.jimuName||e.name,itemStateCommands:[]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,o]=i,s=o.map((e=>e.itemStateDetailContent));l(s,a,!0)}},t))))},{useEffect:fo,useRef:yo}=o.React,So=(0,o.Immutable)([o.AllDataSourceTypes.FeatureLayer,o.AllDataSourceTypes.SceneLayer]),bo=e=>{var t;const i=o.hooks.useTranslation(x.defaultMessages,o.defaultMessages),s=yo(null),{trigger:a,isOpen:n,id:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:d,toggle:p,updateConfigForLayerOptions:u,onSettingChange:m,dsStatusChange:g,hideIconSetting:h}=e,v=(null==r?void 0:r[c])||(0,o.Immutable)({}),{configId:f,label:y,icon:S,searchFields:b,searchExact:w,displayFields:C,hint:I,useDataSource:j}=v,[k,O]=o.React.useState(null),[P,T]=o.React.useState(y);fo((()=>{f&&T(y)}),[f]),fo((()=>{f&&y!==P&&T(y)}),[v]),fo((()=>{n&&(clearTimeout(s.current),s.current=setTimeout((()=>{const e=document.querySelector(".search-ds-setting-popper .action-close");null==e||e.focus()}),200))}),[n]);const N=(e,t)=>{const i=co(null==r?void 0:r.asMutable({deep:!0})),o=f||po(i);let s=r?r.asMutable({deep:!0}):[];const a=null==e?void 0:e.getLabel(),n=M(t);t.fields=null==n?void 0:n.map((e=>null==e?void 0:e.jimuName));const l={configId:o,icon:null,label:a,displayLabel:!0,useDataSource:t,displayFields:n,searchFields:n,hint:"",searchServiceType:Wi.FeatureService};return(null==v?void 0:v.configId)?s=s.map((e=>(null==e?void 0:e.configId)===o?l:e)):s.push(l),{dsConfigItem:l,datasourceConfig:s}},M=e=>{var t,i,s,a,n;const l=o.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),r=null===(t=l.getLayerDefinition())||void 0===t?void 0:t.displayField,c=null===(i=null==l?void 0:l.getSchema())||void 0===i?void 0:i.fields;let d;const p=[];for(const e in c)(null===(s=null==c?void 0:c[e])||void 0===s?void 0:s.type)!==o.JimuFieldType.Date&&p.push(null==c?void 0:c[e]),(null===(a=null==c?void 0:c[e])||void 0===a?void 0:a.name)===r&&(null===(n=null==c?void 0:c[e])||void 0===n?void 0:n.type)!==o.JimuFieldType.Date&&(d=null==c?void 0:c[e]);const u=(null==p?void 0:p.length)>1?p[1]:p[0];return d?[(0,o.Immutable)(d)]:[(0,o.Immutable)(u)]},R=(e,t,i=!1)=>{var s,a;if(!e)return;const n=i?"displayFields":"searchFields";let l=D(e);0===(null==l?void 0:l.length)&&(l=null===(a=null===(s=(0,o.Immutable)(t))||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const d=null==r?void 0:r.asMutable({deep:!0});let p=null==v?void 0:v.setIn([n],l);p=L(p),null==d||d.splice(c,1,null==p?void 0:p.asMutable({deep:!0})),u((0,o.Immutable)(d))},L=e=>{var t,i,o,s;const a=(null===(i=null===(t=null==e?void 0:e.searchFields)||void 0===t?void 0:t.asMutable({deep:!0}))||void 0===i?void 0:i.map((e=>null==e?void 0:e.jimuName)))||[],n=(null===(s=null===(o=null==e?void 0:e.displayFields)||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===s?void 0:s.map((e=>null==e?void 0:e.jimuName)))||[],l=Array.from(new Set(a.concat(n)));return e.setIn(["useDataSource","fields"],l)},D=e=>null==e?void 0:e.filter((e=>(null==e?void 0:e.type)!==(null===o.JimuFieldType||void 0===o.JimuFieldType?void 0:o.JimuFieldType.Date))),A=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),s=null==v?void 0:v.setIn(e,t);null==i||i.splice(c,1,null==s?void 0:s.asMutable({deep:!0})),m((0,o.Immutable)(i))},E=(null==v?void 0:v.useDataSource)?[null===(t=null==v?void 0:v.useDataSource)||void 0===t?void 0:t.asMutable({deep:!0})]:[];return(0,o.jsx)(go.SidePopper,{className:"search-ds-setting-popper",isOpen:n,position:"right",toggle:p,trigger:a,title:i("setLayerSource"),backToFocusNode:d},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(go.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(go.SettingRow,{flow:"wrap",label:i("data")},(0,o.jsx)(at.DataSourceSelector,{closeDataSourceListOnChange:!0,types:So,useDataSources:(0,o.Immutable)(E),disableRemove:()=>!0,mustUseDataSource:!0,onChange:e=>{e&&e.length>0?(e=>{o.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,o.Immutable)(e)).then((e=>{const t=so(e);return t||Promise.reject(Error("")),t})).then((t=>{const{datasourceConfig:i}=N(t,e);u((0,o.Immutable)(i))}))})(e[0]):(()=>{const e=co(null==r?void 0:r.asMutable({deep:!0})),t=f||po(e);let i=r?r.asMutable({deep:!0}):[];const s={configId:t,icon:null,label:"......",displayLabel:!0,useDataSource:null,displayFields:[],searchFields:[],hint:"",searchServiceType:Wi.FeatureService};i=i.map((e=>(null==e?void 0:e.configId)===t?s:e)),u((0,o.Immutable)(i))})()},widgetId:l}))),(null==v?void 0:v.configId)&&k&&(0,o.jsx)("div",null,(0,o.jsx)(go.SettingSection,null,(0,o.jsx)(go.SettingRow,{flow:"wrap",label:i("label")},(0,o.jsx)(x.TextInput,{"aria-label":i("label"),size:"sm",value:P||"",onAcceptValue:e=>{e?(T(null==e?void 0:e.trim()),A(["label"],null==e?void 0:e.trim())):T(y)},onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;T(i)},className:"w-100",placeholder:i("findAddressOrPlace")}))),!h&&(0,o.jsx)(go.SettingSection,null,(0,o.jsx)(go.SettingRow,{label:i("searchIcon")},(0,o.jsx)(ho.IconPicker,{icon:S,onChange:e=>{A(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,o.jsx)(go.SettingSection,{title:i("searchOptions"),role:"group","aria-label":i("searchOptions")},(0,o.jsx)(go.SettingRow,{flow:"wrap",label:i("selectSearchFields"),role:"group","aria-label":i("selectSearchFields")},(0,o.jsx)(at.FieldSelectorWithFullTextIndex,{useDataSources:j?(0,o.Immutable)([j]):(0,o.Immutable)([]),onChange:e=>{R(e,b)},selectedFields:(0,o.Immutable)(null==b?void 0:b.map((e=>null==e?void 0:e.name))),isMultiple:!0,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,widgetId:l,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{className:"mt-2","aria-label":i("exactMatch"),onClick:e=>{A(["searchExact"],!w)}},(0,o.jsx)(x.Checkbox,{title:i("exactMatch"),checked:w,className:"mr-1"}),i("exactMatch"))),(0,o.jsx)(go.SettingRow,{flow:"wrap",label:i("displayFields"),role:"group","aria-label":i("displayFields")},(0,o.jsx)(vo,{disPlayField:C||[],onFieldChange:R,useDataSource:j})),(0,o.jsx)(go.SettingRow,{flow:"wrap",label:i("searchHint")},(0,o.jsx)(x.TextInput,{size:"sm",value:I||"",title:I||i("findAddressOrPlace"),"aria-label":i("searchHint"),onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;A(["hint"],i)},className:"w-100",placeholder:i("findAddressOrPlace")})))),(null==E?void 0:E[0])&&(0,o.jsx)("div",{className:"waiting-for-database"},(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)(E[0]),onDataSourceCreated:e=>{O(e),e&&g(e.id,!0)},onCreateDataSourceFailed:e=>{if(!(null==v?void 0:v.useDataSource))return!1;const t=v.useDataSource.dataSourceId;g(t,!1)}}))))};var wo=f(52785),xo=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};const{useEffect:Co,useRef:Io}=o.React;var jo;!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(jo||(jo={}));const ko=[o.SupportedUtilityType.GeoCoding],Oo=e=>{const t=o.hooks.useTranslation(x.defaultMessages,o.defaultMessages),i=Io(null),{id:s,trigger:a,toggle:n,isOpen:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:d,createOutputDs:p,onSettingChange:u,updateConfigForLayerOptions:m,hideIconSetting:g}=e,h=(null==r?void 0:r[c])||(0,o.Immutable)({}),{configId:v,label:f,icon:y,hint:S,outputDataSourceId:b,displayFields:w}=h,[C,I]=o.React.useState(f),[j,k]=o.React.useState(!1),[O,P]=o.React.useState(jo.Pass),[T,N]=o.React.useState(null==h?void 0:h.useUtility),[M,R]=o.React.useState(!1);Co((()=>{l&&(clearTimeout(i.current),i.current=setTimeout((()=>{const e=document.querySelector(".search-locator-setting-popper .action-close");null==e||e.focus()}),200))}),[l]),Co((()=>{l&&(P(jo.Pass),R(!1),(null==h?void 0:h.useUtility)?(E(null==h?void 0:h.useUtility).then((e=>{L(e).then((e=>{P(null==e?void 0:e.urlCheckResultType)}))})),N(null==h?void 0:h.useUtility),I(null==h?void 0:h.label)):(N(null),I(Yi)))}),[c,v,l]),Co((()=>{I(null==h?void 0:h.label)}),[h]);const L=e=>xo(void 0,void 0,void 0,(function*(){const t=new RegExp("^(([h][t]{2}[p][s])?://)");if(k(!1),!e||!t.test(e))return k(!0),Promise.resolve({urlCheckResultType:jo.NotHttps});try{return(0,o.loadArcGISJSAPIModules)(["esri/request"]).then((t=>{const[i]=t;return i(e,{query:{f:"json"},responseType:"json"}).then((e=>{var t;const i=(null==e?void 0:e.data)||{};if(k(!0),null==i?void 0:i.capabilities){const e=(null==i?void 0:i.singleLineAddressField)||{},o=(null==i?void 0:i.addressFields)||[],s=(null==i?void 0:i.candidateFields)||[],a=(null===(t=null==i?void 0:i.capabilities)||void 0===t?void 0:t.split(","))||[],n=null==a?void 0:a.includes("Suggest");return Promise.resolve({urlCheckResultType:jo.Pass,singleLineFieldName:null==e?void 0:e.name,addressFields:o,isSupportSuggest:n,candidateFields:s})}return Promise.resolve({urlCheckResultType:jo.InvalidURL})}))}))}catch(e){return k(!0),Promise.resolve({urlCheckResultType:jo.InvalidURL})}})),D=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),s=null==h?void 0:h.setIn(e,t);null==i||i.splice(c,1,null==s?void 0:s.asMutable({deep:!0})),u((0,o.Immutable)(i))},A=()=>{const e=co(null==r?void 0:r.asMutable({deep:!0})),t=v||po(e);let i=r?r.asMutable({deep:!0}):[];const s={configId:t,icon:null,label:".....",hint:"",useUtility:null,searchServiceType:Wi.GeocodeService,singleLineFieldName:""};i=r.map((e=>(null==e?void 0:e.configId)===t?s:e)),m((0,o.Immutable)(i))},E=e=>xo(void 0,void 0,void 0,(function*(){return o.UtilityManager.getInstance().getUrlOfUseUtility(e).then((e=>Promise.resolve(e)))})),U=e=>o.UtilityManager.getInstance().getLabelOfUseUtility(e),F=e=>{var t;const i=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return null===(t=null==i?void 0:i.orgSetting)||void 0===t?void 0:t.placeholder},B=o.css`
    &>div {
      padding: 0!important;
    }
  `;return(0,o.jsx)(go.SidePopper,{className:"search-locator-setting-popper",isOpen:l,position:"right",toggle:n,trigger:a,title:t("setLocatorSource"),backToFocusNode:d},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(go.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(go.SettingRow,{flow:"wrap",label:t("locatorSource")},(0,o.jsx)("div",{className:"w-100",css:B},(0,o.jsx)(wo.UtilitySelector,{useUtilities:(e=>{var t;if(!e)return(0,o.Immutable)([]);const i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig)||void 0===t?void 0:t.utilities;if(null==i?void 0:i[e.utilityId])return(0,o.Immutable)([e]);(0,o.Immutable)([])})(T),onChange:e=>{const t=e[0];N(t||null),t?(R(!0),E(t).then((e=>{L(e).then((e=>{if(R(!1),P(null==e?void 0:e.urlCheckResultType),(null==e?void 0:e.urlCheckResultType)!==jo.Pass)N(null);else{const i=e.addressFields.concat(e.candidateFields);((e,t,i,a)=>{const n=co(null==r?void 0:r.asMutable({deep:!0})),l=v||po(n);let c=r?r.asMutable({deep:!0}):[];const d=U(t),u=F(t),{addressFieldsSchema:g,defaultAddressFieldName:f}=io(i),y={configId:l,icon:null,label:d,hint:u,useUtility:t,searchServiceType:Wi.GeocodeService,singleLineFieldName:e,isSupportSuggest:a};p&&(y.outputDataSourceId=`${s}_output_${l}`,y.addressFields=g,y.displayFields=((e,t)=>{let i;return null==e||e.forEach((e=>{var o;(null===(o=null==e?void 0:e.jimuName)||void 0===o?void 0:o.toLocaleLowerCase())===t&&(i=e)})),i||(i=e[0]),[i]})(g,f),y.defaultAddressFieldName=f),(null==h?void 0:h.configId)?c=r.map((e=>(null==e?void 0:e.configId)===l?y:e)):c.push(y),m((0,o.Immutable)(c))})(e.singleLineFieldName,t||null,i,null==e?void 0:e.isSupportSuggest)}}))}))):A()},showRemove:!1,types:ko,closePopupOnSelect:!0})),O!==jo.Pass&&j&&(0,o.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between mt-1"},(0,o.jsx)(x.Alert,{form:"basic",type:"warning",className:"w-100",open:!0,withIcon:!0,text:t("invalidUrlMessage")})))),M&&(0,o.jsx)(x.Loading,{type:x.LoadingType.Secondary,width:38,height:38}),O===jo.Pass&&v&&T&&(0,o.jsx)("div",null,(0,o.jsx)(go.SettingSection,null,(0,o.jsx)(go.SettingRow,{flow:"wrap",label:t("label")},(0,o.jsx)(x.TextInput,{"aria-label":t("label"),size:"sm",value:C||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;I(i)},onAcceptValue:e=>{e?(I(null==e?void 0:e.trim()),D(["label"],null==e?void 0:e.trim())):I(f)},className:"w-100"}))),!g&&(0,o.jsx)(go.SettingSection,null,(0,o.jsx)(go.SettingRow,{label:t("searchIcon")},(0,o.jsx)(ho.IconPicker,{icon:y,onChange:e=>{D(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,o.jsx)(go.SettingSection,{title:t("searchOptions"),role:"group","aria-label":t("searchOptions")},b&&(0,o.jsx)(go.SettingRow,{flow:"wrap",label:t("displayFields"),role:"group","aria-label":t("displayFields")},(0,o.jsx)(vo,{disPlayField:w||[],onFieldChange:(e,t,i=!1)=>{var s,a;if(!e)return;0===(null==e?void 0:e.length)&&(e=null===(a=null===(s=(0,o.Immutable)(t))||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const n=null==r?void 0:r.asMutable({deep:!0}),l=null==h?void 0:h.setIn(["displayFields"],e);null==n||n.splice(c,1,null==l?void 0:l.asMutable({deep:!0})),m((0,o.Immutable)(n))},useDataSource:{dataSourceId:b,mainDataSourceId:b}})),(0,o.jsx)(go.SettingRow,{flow:"wrap",label:t("searchHint")},(0,o.jsx)(x.TextInput,{size:"sm","aria-label":t("searchHint"),title:S||t("findAddressOrPlace"),value:S||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;D(["hint"],i)},className:"w-100",placeholder:t("findAddressOrPlace")}))))))};const{useState:Po,useRef:To}=o.React,No=f(55339),Mo=o.css`
  .warning-alert-con {
    padding: 0 !important;
  }
  .warning-alert-con .jimu-icon-component {
    color: var(--warning-700) !important;
  }
`,Ro=e=>{const t=o.hooks.useTranslation(o.defaultMessages,x.defaultMessages),i=To(!1),s=To(null),a=To(null),{className:n,datasourceConfig:l,useDataSources:r,dsConfigItemIndex:c,createOutputDs:d,showSourcePanel:p,showNewSourceItem:u,id:m,dataSourceCreateStatus:g,onDsConfigIdChange:h,updateConfigForLayerOptions:v,hideSidePopper:f}=e,y=o.ReactRedux.useSelector((e=>{var t,i,o;return null===(o=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===o?void 0:o[m]})),S=o.ReactRedux.useSelector((e=>{var t,i;return null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets})),b={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:Q.TreeItemActionType.RenderOverrideItem,children:[{name:Q.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:Q.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:Q.TreeItemActionType.RenderOverrideItemBody,children:[{name:Q.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:Q.TreeItemActionType.RenderOverrideItemDragHandle},{name:Q.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:Q.TreeItemActionType.RenderOverrideItemTitle},{name:Q.TreeItemActionType.RenderOverrideItemDetailToggle},{name:Q.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},[w,C]=Po(null),[I,j]=Po(null),[k,O]=Po(!1),[P,T]=Po(null),N=o.ReactRedux.useSelector((e=>{var i,o;const s={},a=(null===(o=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===o?void 0:o.utilityStates)||{};return null==l||l.forEach((e=>{(null==e?void 0:e.searchServiceType)===Wi.GeocodeService&&(s[e.configId]=((e,i)=>{var o,s,a;if((null==e?void 0:e.searchServiceType)===Wi.FeatureService)return null;const n=null===(o=null==e?void 0:e.useUtility)||void 0===o?void 0:o.utilityId;return(null===(s=null==i?void 0:i[n])||void 0===s?void 0:s.isSignInError)?t("signInErrorDefault"):!1===(null===(a=null==i?void 0:i[n])||void 0===a?void 0:a.success)?t("utilityNotAvailable"):null})(null==e?void 0:e.asMutable({deep:!0}),a))})),s})),M=o.hooks.useEventCallback((()=>{const e=null==l?void 0:l.asMutable({deep:!0});null==e||e.splice(I,1),v((0,o.Immutable)(e)),f()})),R=e=>{var t,n,r,c,d;(null===(t=l[e])||void 0===t?void 0:t.searchServiceType)===Wi.GeocodeService?i.current?L(e):(n=void 0,r=void 0,c=void 0,d=function*(){return!i.current&&o.moduleLoader.loadModule("jimu-ui/advanced/data-source-selector").then((e=>(i.current=!0,s.current=e.dataComponentsUtils,a.current=e.DataSourceRemoveWaringReason,T(e.DataSourceRemoveWarningPopup),Promise.resolve(!0))))},new(c||(c=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function o(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof c?s:new c((function(e){e(s)}))).then(i,o)}s((d=d.apply(n,r||[])).next())}))).then((()=>{L(e)})):D(e)},L=o.hooks.useEventCallback((e=>{const t=l[e].outputDataSourceId;0===s.current.getWidgetsUsingDsOrItsDescendantDss(t,S).length?D(e):(C(t),O(!0),j(e))})),D=e=>{const t=null==l?void 0:l.asMutable({deep:!0});null==t||t.splice(e,1),v((0,o.Immutable)(t)),f()};return(0,o.jsx)("div",{className:`w-100 mt-2 ${n||""}`,css:Mo},(0,o.jsx)(Q.List,Object.assign({className:"w-100",itemsJson:Array.from(l).map(((e,i)=>{var o;return{itemStateDetailContent:e,itemKey:`${i}`,itemStateChecked:p&&i===c,itemStateTitle:null==e?void 0:e.label,itemStateIcon:{icon:null===(o=e.icon)||void 0===o?void 0:o.svg},itemStateCommands:[{label:t("deleteOption"),iconProps:()=>({icon:No,size:12}),action:()=>{R(i)}}]}})),dndEnabled:!0,renderOverrideItemDetailToggle:(e,i)=>{var s;const{itemJsons:a}=i.props,[n]=a,l=null==n?void 0:n.itemStateDetailContent,c=(null==l?void 0:l.searchServiceType)===Wi.GeocodeService,p=c?null==l?void 0:l.outputDataSourceId:null===(s=null==l?void 0:l.useDataSource)||void 0===s?void 0:s.dataSourceId,u=!!d&&!((e,t=!1)=>{let i,o=!0;if(t){const t=(null==y?void 0:y.outputDataSources)||[];i=(null==t?void 0:t.filter((t=>e===t)).length)>0}else i=(null==r?void 0:r.filter((t=>e===t.dataSourceId)).length)>0;return"boolean"!=typeof(null==g?void 0:g[e])||(null==g?void 0:g[e])||(o=!1),i&&e&&o})(p,c),m=null==N?void 0:N[l.configId];return c&&m?(0,o.jsx)(x.Alert,{className:"warning-alert-con",buttonType:"tertiary",form:"tooltip",size:"small",type:"warning",text:m}):u&&p?(0,o.jsx)(x.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError")}):""},onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,s]=i,a=s.map((e=>e.itemStateDetailContent));h(null),v((0,o.Immutable)(a))},onClickItemBody:(e,t)=>{var i;const{itemJsons:[o]}=t.props,s=(null===(i=null==o?void 0:o.itemStateDetailContent)||void 0===i?void 0:i.searchServiceType)===Wi.GeocodeService;h(+o.itemKey,s)}},b)),u&&(0,o.jsx)(Q.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:"item",itemKey:"index",itemStateChecked:!0,itemStateTitle:"......",itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},b)),P&&(0,o.jsx)(P,{dataSourceId:w,isOpen:k,toggle:()=>{O(!k)},reason:a.current.DataSourceRemoved,afterRemove:()=>{C(null),j(null),O(!1)},beforeRemove:M}))},{useSelector:Lo}=o.ReactRedux,{useRef:Do,useEffect:Ao}=o.React,Eo=e=>{var t,i,s,a,n,l;const r=o.hooks.useTranslation(x.defaultMessages,o.defaultMessages),c=(0,v.useTheme)(),{datasourceConfig:d,id:p,useDataSources:u,searchDataSettingType:m,createOutputDs:g,hideIconSetting:h,enableFiltering:f,onSettingChange:y,onOutputDsSettingChange:S,onEnableFilteringChange:b}=e,w=Do(null),C=Do(null),[I,j]=o.React.useState(!1),[k,O]=o.React.useState(!1),[P,T]=o.React.useState(!1),[N,M]=o.React.useState(!1),[R,L]=o.React.useState(null),[D,A]=o.React.useState(null),[E,U]=o.React.useState((0,o.Immutable)({})),F=Lo((e=>{var t,i,o;return null===(o=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===o?void 0:o[p]})),B=Lo((e=>e.appStateInBuilder.appConfig.utilities)),$=o.css`
    & {
      background-color: ${null===(s=null===(i=null===(t=c.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.secondary)||void 0===s?void 0:s[400]};
    }
  `,W=o.css`
    .data-remind {
      color: ${null===(l=null===(n=null===(a=c.colors)||void 0===a?void 0:a.palette)||void 0===n?void 0:n.dark)||void 0===l?void 0:l[500]};
      font-size: ${o.polished.rem(12)};
    }
  `;Ao((()=>{g&&V()}),[d]),Ao((()=>{z(B)}),[B]);const z=e=>{let t=!1;const i=null==d?void 0:d.filter((i=>{var o;if((null==i?void 0:i.searchServiceType)===Wi.FeatureService)return!0;{const s=null===(o=null==i?void 0:i.useUtility)||void 0===o?void 0:o.utilityId;return!s||!!(null==e?void 0:e[s])||(t=!0,!1)}}));t&&J(i)},V=()=>{const e=(null==F?void 0:F.outputDataSources)||[],t=(null==d?void 0:d.asMutable({deep:!0}))||[];for(let i;i<(null==t?void 0:t.length)-1;i++){const o=t[i];if((null==o?void 0:o.searchServiceType)===Wi.FeatureService)continue;const s=null==o?void 0:o.outputDataSourceId;if(!(null==e?void 0:e.includes(s))){J(d);break}}},G=()=>{T(!1),O(!1),L(null)},_=e=>{const t=e?!P:!k;if(M(t),t){const e=(null==d?void 0:d.length)||0;L(e),Z(e,!0)}e?O(t):T(t)},J=e=>{X(e)&&M(!1);const t=H(e),i=Q(t);g?S&&S(t.outputDataSources,e,i):y&&y(e,i)},H=e=>{var t;return null===(t=null==e?void 0:e.asMutable({deep:!0}))||void 0===t?void 0:t.reduce(((e,t)=>{const i=null==t?void 0:t.useDataSource;if(i&&(no(i,null==e?void 0:e.useDataSources)?e.useDataSources=K(i,null==e?void 0:e.useDataSources):null==e||e.useDataSources.push(i)),g){const i=q(t);i&&e.outputDataSources.push(i)}return e}),{useDataSources:[],outputDataSources:[]})},K=(e,t)=>t.map((t=>{if((null==e?void 0:e.dataSourceId)===(null==t?void 0:t.dataSourceId)){const i=(null==e?void 0:e.fields)||[],o=(null==t?void 0:t.fields)||[],s=Array.from(new Set(o.concat(i)));t.fields=s}return t})),q=e=>{let t;return(null==e?void 0:e.searchServiceType)===Wi.GeocodeService&&(t={id:null==e?void 0:e.outputDataSourceId,type:o.DataSourceTypes.FeatureLayer,label:null==e?void 0:e.label,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:eo(null==e?void 0:e.label,null==e?void 0:e.addressFields),geometryType:"esriGeometryPoint"}),t},Q=(e,t)=>{var i;const o={id:p};return o.useDataSources=null==e?void 0:e.useDataSources,g&&(o.outputDataSources=null===(i=null==e?void 0:e.outputDataSources)||void 0===i?void 0:i.map((e=>null==e?void 0:e.id))),{dsInWidgetJson:o,isWidgetJsonDsChanged:ro(F,o.useDataSources,o.outputDataSources)}},X=e=>(null==e?void 0:e.length)!==(null==d?void 0:d.length),Y=()=>{var e;const t=null===(e=null==d?void 0:d.asMutable({deep:!0}))||void 0===e?void 0:e.filter((e=>(null==e?void 0:e.useDataSource)||(null==e?void 0:e.useUtility)));J((0,o.Immutable)(t))},Z=(e,t=!1)=>{let i;i=t?C.current.getElementsByClassName("add-search-btn")[0]:C.current.getElementsByClassName("jimu-tree-item__body")[e],A(i)};return(0,o.jsx)("div",null,(0,o.jsx)(go.SettingSection,{css:W},(0,o.jsx)(go.SettingRow,{flow:"wrap"},(0,o.jsx)("span",{className:"w-100 data-remind"},r("addSources"))),(0,o.jsx)(go.SettingRow,{flow:"wrap"},(0,o.jsx)("div",{className:"w-100",ref:C},(0,o.jsx)("div",null,(!m||m===$i.Both)&&(0,o.jsx)(x.Dropdown,{className:"w-100",size:"sm",toggle:()=>{j(!I)},isOpen:I,autoWidth:!0},(0,o.jsx)(x.DropdownButton,{className:"add-search-btn w-100",title:r("newSearchSource"),arrow:!1,icon:!0,type:"primary"},(0,o.jsx)(di,{className:"mr-1 d-inline-block",autoFlip:!0}),r("newSearchSource")),(0,o.jsx)(x.DropdownMenu,{css:$},(0,o.jsx)(x.DropdownItem,{className:"w-100",onClick:()=>{_(!0)},title:r("layerSource")},r("layerSource")),(0,o.jsx)(x.DropdownItem,{className:"w-100",onClick:()=>{_(!1)},title:r("locatorSource")},r("locatorSource")))),m===$i.FeatureService&&(0,o.jsx)(x.Button,{type:"primary",className:"w-100 add-search-btn",onClick:()=>{_(!0)}},(0,o.jsx)(di,{className:"mr-1 d-inline-block",autoFlip:!0}),r("layerSource")),m===$i.GeocodeService&&(0,o.jsx)(x.Button,{type:"primary",className:"w-100 add-search-btn",onClick:()=>{_(!1)}},(0,o.jsx)(di,{className:"mr-1 d-inline-block",autoFlip:!0}),r("locatorSource"))),(0,o.jsx)("div",{className:"w-100",ref:w},(0,o.jsx)(Ro,{id:p,dsConfigItemIndex:R,datasourceConfig:d||(0,o.Immutable)([]),showSourcePanel:(()=>{var e;return(null===(e=null==d?void 0:d[R])||void 0===e?void 0:e.searchServiceType)===Wi.GeocodeService?P:k})(),useDataSources:u,onDsConfigIdChange:(e,t)=>{M(!1),"number"==typeof e?(Z(e,!1),R===e?t?(T(!P),O(!1)):(O(!k),T(!1)):(L(e),t?(T(!0),O(!1)):(O(!0),T(!1)))):G()},showNewSourceItem:N,updateConfigForLayerOptions:J,hideSidePopper:G,createOutputDs:g,dataSourceCreateStatus:E}))),(0,o.jsx)(bo,{id:p,dsConfigItemIndex:R,datasourceConfig:d||(0,o.Immutable)([]),useDataSources:u,isOpen:k,onSettingChange:y,trigger:null==w?void 0:w.current,updateConfigForLayerOptions:J,toggle:()=>{k&&L(null),O(!k),M(!1),Y()},dsStatusChange:(e,t=!1)=>{const i=E.set(e,t);U(i)},popperFocusNode:D,hideIconSetting:h}),(0,o.jsx)(Oo,{id:p,dsConfigItemIndex:R,datasourceConfig:d||(0,o.Immutable)([]),useDataSources:u,isOpen:P,onSettingChange:y,updateConfigForLayerOptions:J,trigger:null==w?void 0:w.current,toggle:()=>{P&&L(null),T(!P),M(!1),Y()},popperFocusNode:D,hideIconSetting:h,createOutputDs:g}))),(m===$i.Both||m===$i.FeatureService)&&(0,o.jsx)(go.SettingSection,null,(0,o.jsx)(go.SettingRow,{label:r("enableSearchFilter")},(0,o.jsx)(x.Switch,{checked:f,onChange:e=>{const t=e.target.checked;b&&b(t)},title:r("enableSearchFilter")}))),(m===$i.Both||m===$i.FeatureService)&&(0,o.jsx)("span",null))};var Uo=f(51315);const Fo=e=>{const t=o.hooks.useTranslation(x.defaultMessages,o.defaultMessages),i=(0,v.useTheme)(),s=o.css`
    .check-box-label {
      color: ${i.colors.palette.dark[800]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `,{onSettingChange:a,hideRecentSearchSetting:n}=e,l=e.settingConfig||(0,o.Immutable)({}),{maxSuggestions:r,isUseCurrentLoation:c,isShowRecentSearches:d,recentSearchesMaxNumber:p}=l,[u,m]=o.React.useState(p),[g,h]=o.React.useState(r);(0,Uo.useEffect)((()=>{m(p),h(r)}),[l]);const f=(e,t)=>{const i=l.setIn(e,t);a&&a(i)},y=(e,t=1)=>{if(0===(null==e?void 0:e.length))return!0;if(isNaN(Number(e)))return!1;{const i=Number(e);return Number.isInteger(i)&&i>=t}};return(0,o.jsx)("div",{css:s},(0,o.jsx)(go.SettingRow,{flow:"wrap",className:"mt-2 checkbox-con",label:t("maximumSuggestions")},(0,o.jsx)(x.TextInput,{size:"sm","aria-label":t("maximumSuggestions"),value:g,onChange:e=>{const t=e.target.value;y(t,0)&&h(t)},onAcceptValue:e=>{(!e||e>Fi)&&h(e=r||Ui),y(e,0)&&f(["maxSuggestions"],Number(e))},className:"w-100"})),(0,o.jsx)(go.SettingRow,null,(0,o.jsx)("div",{className:"cursor-pointer",onClick:e=>{f(["isUseCurrentLoation"],!c)},"aria-label":t("useCurrentLocation")},(0,o.jsx)(x.Checkbox,{checked:!!c,className:"mr-1",title:t("useCurrentLocation")}),(0,o.jsx)("span",{className:"check-box-label"},t("useCurrentLocation")))),!n&&(0,o.jsx)(go.SettingRow,{label:t("recentSearches")},(0,o.jsx)(x.Switch,{checked:d||!1,title:t("recentSearches"),onChange:e=>{f(["isShowRecentSearches"],!d)}})),d&&(0,o.jsx)(go.SettingRow,{label:t("maximumNumber")},(0,o.jsx)(x.TextInput,{size:"sm","aria-label":t("maximumNumber"),value:u,onChange:e=>{const t=e.target.value;y(t)&&m(t)},onAcceptValue:e=>{e||m(e=p||Bi),y(e)&&f(["recentSearchesMaxNumber"],Number(e))},style:{width:"50px"}})))},Bo=e=>{const t=o.hooks.useTranslation(x.defaultMessages,o.defaultMessages),{hint:i,onSettingChange:s}=e,[a,n]=o.React.useState(i);return(0,Uo.useEffect)((()=>{n(i)}),[i]),(0,o.jsx)("div",{className:"general-setting-con"},(0,o.jsx)(go.SettingRow,{flow:"wrap",label:t("multySearchHint")},(0,o.jsx)(x.TextInput,{"aria-label":t("multySearchHint"),title:a||t("findAddressOrPlace"),size:"sm",value:a,onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;n(i)},onAcceptValue:e=>{n(e),s&&s(e)},className:"w-100",placeholder:t("findAddressOrPlace")})))};var $o=f(79964),Wo=f.n($o);const zo=e=>{const t=window.SVG,{className:i}=e,s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Wo()},s)):o.React.createElement("svg",Object.assign({className:a},s))};const Vo=function(e){var t,i;const{mapWidgetId:s,disabled:a,disableSwitchMap:n=!1,onClick:l,sidePopperContent:r,isDataSourceValid:c,invalidDataSourceTooltip:d,showDefaultMapWhenEmpty:p}=e,u=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i}(e,["mapWidgetId","disabled","disableSwitchMap","onClick","sidePopperContent","isDataSourceValid","invalidDataSourceTooltip","showDefaultMapWhenEmpty"]),m=o.React.useRef(""),g=o.React.useRef(null),[h,v]=o.React.useState(!1),[f,y]=o.React.useState(""),[S,b]=o.React.useState(null),[w,C]=o.React.useState(null),I=X.MapViewManager.getInstance().getJimuMapViewGroup(s),[j,k]=o.React.useState(!1),O=o.hooks.useTranslation(x.defaultMessages),P=o.ReactRedux.useSelector((e=>{var t,i,o;const a=e.appStateInBuilder;return a&&(null===(o=null===(i=null===(t=null==a?void 0:a.appConfig)||void 0===t?void 0:t.widgets)||void 0===i?void 0:i[s])||void 0===o?void 0:o.useDataSources)})),T=o.ReactRedux.useSelector((e=>{const t=e.appStateInBuilder;return t&&(null==t?void 0:t.dataSourcesInfo)}),((e,t)=>{if(P){for(const i of P)if(e&&t&&e[i.dataSourceId]!==t[i.dataSourceId])return!1;return!0}return!0}));o.React.useEffect((()=>{if(!j)if(P&&0!==(null==P?void 0:P.length)){let e=0;for(const t of P){const i=null==T?void 0:T[t.dataSourceId];!i||i.instanceStatus!==o.DataSourceStatus.Created&&i.instanceStatus!==o.DataSourceStatus.CreateError||(e++,e===P.length&&k(!0))}}else k(!0)}),[j,T,P]);const N=o.React.useCallback((()=>{const e=[];for(let t=0;t<2;t++)e.push({itemKey:t.toString(),itemStateCommands:[{iconProps:()=>({icon:" ",size:12,style:{opacity:0}})}]});return(0,o.jsx)(Q.List,{className:"w-100",itemsJson:e,dndEnabled:!1,handleClickItemBody:()=>{}})}),[]),M=o.React.useCallback((e=>e?e.getLabel()||(null==e?void 0:e.getDataSourceJson().sourceLabel)||e.id:""),[]),R=null===(i=null===(t=null==P?void 0:P.asMutable())||void 0===t?void 0:t.sort(((e,t)=>e.dataSourceId.localeCompare(t.dataSourceId))))||void 0===i?void 0:i.map((e=>{const t=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId);let i=null;return i=t?{itemStateTitle:M(t),itemStateChecked:e.dataSourceId===m.current,itemKey:`${e.dataSourceId}`,itemStateDisabled:a}:{itemStateTitle:O("none"),itemKey:`${e.dataSourceId}`,itemStateDisabled:!0},i}));o.React.useEffect((()=>{if(!(null==I?void 0:I.jimuMapViews))return;const e=Object.keys(null==I?void 0:I.jimuMapViews).map((e=>null==I?void 0:I.jimuMapViews[e].whenJimuMapViewLoaded()));Promise.all(e).then((()=>{var e;const t=(null===(e=null==I?void 0:I.getActiveJimuMapView())||void 0===e?void 0:e.dataSourceId)||"";b(t.length>0?t:" "),C(t.length>0?t:" ")})).catch((e=>{console.error(e)}))}),[I,null==I?void 0:I.jimuMapViews]);const L=o.React.useCallback(((e,t)=>{const{itemJsons:i}=t.props,o=i[0];c&&!c(o.itemKey)||(b(o.itemKey),l&&l(o.itemKey),m.current===o.itemKey?(m.current="",v(!1)):(m.current=o.itemKey,y(o.itemStateTitle),v(!0)),n||I&&o.itemKey!==S&&I.switchMap())}),[S,n,c,I,l]);return o.React.useEffect((()=>()=>{!n&&h&&w!==S&&(I.switchMap(),b(w))}),[S,w,n,I,h]),(0,o.jsx)("div",{ref:g,className:"w-100 multiple-jimu-map-config-component",css:o.css`
    .jimu-tree-item__icon {
      background-color: var(--info-400);
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      svg {
        margin-right: 0!important;
      }
    }
    .jimu-tree-item__body {
      .jimu-icon {
        margin-right: 4px;
        color: var(--danger-700);
      }
      .jimu-tree-item__main-line {
        cursor: pointer;
      }
    }
  `,tabIndex:0},j&&S?(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)(Q.List,Object.assign({},u,{itemsJson:!p||P&&0!==P.length?R:[{itemStateTitle:O("multipleMapDefaultWebMap"),itemKey:"default",itemStateChecked:"default"===m.current,itemStateDisabled:a}],handleClickItemBody:L,renderOverrideItemCommands:(e,t)=>{const{itemJsons:i}=t.props,[s]=i;return c&&!c(s.itemKey)?(0,o.jsx)(x.Tooltip,{title:d,role:"tooltip"},(0,o.jsx)("div",null,(0,o.jsx)(zo,null))):""}})),(0,o.jsx)(go.SidePopper,{position:"right",isOpen:h,toggle:()=>{v(!1),m.current="",null==g||g.current.focus()},title:f,trigger:null==g?void 0:g.current},r)):N())};var Go,_o;!function(e){e.AUTO="Auto",e.CUSTOM="Custom"}(Go||(Go={})),function(e){e.Default="DEFAULT",e.Selected="SELECTED",e.Hover="HOVER"}(_o||(_o={}));const Jo=e=>{const{layout:t,desLayoutId:i,config:o,widgetId:s,status:a,isCardWidget:n}=e,l=(0,w.getAppConfigAction)();i&&l.removeLayout(i);const r=Ko(o,n,t,a);l.editWidgetConfig(s,r),l.editWidgetProperty(s,`layouts.${a}`,{}),l.exec()},Ho=e=>{var t;const{layout:i,regularLayoutId:s,config:a,widgetId:n,appConfig:l,status:r,label:c,isCardWidget:d}=e,p=(0,o.getAppStore)().getState().appStateInBuilder.browserSizeMode,u=(0,w.getAppConfigAction)(),m=u.duplicateLayout(s,!1);u.editLayoutProperty(m.id,"label",c);const g=null===(t=l.widgets[n].layouts[r])||void 0===t?void 0:t[p];g&&u.removeLayout(g);const h=Ko(a,d,i,r);u.editWidgetConfig(n,h),u.editWidgetProperty(n,`layouts.${r}.${p}`,m.id),u.editLayoutProperty(m.id,"parent",{type:o.LayoutParentType.Widget,id:n}),u.exec()};function Ko(e,t,i,o){let s=e;return s=t?e.set("cardLayout",i):e.setIn(["cardConfigs",o,"listLayout"],i),s}const qo=o.css`
  .jimu-radio {
    cursor: pointer;
  }
  .clear-padding {
    padding-left: 0;
    padding-right: 0;
  }
`,Qo=o.css`
  & .modal-content {
    border: none;
  }
  .header-con {
    & {
      border: none;
      padding: ${o.polished.rem(30)};
      padding-bottom: 0;
    }
    svg {
      color: var(--warning-600);
      border-bottom: none;
      margin-right: ${o.polished.rem(12)} !important;
    }
  }
  .modal-body {
    padding: ${o.polished.rem(24)} ${o.polished.rem(30)};
  }
  .modal-footer {
    & {
      padding: ${o.polished.rem(30)};
      padding-top: 0;
    }
  }
`,Xo=e=>{const{id:t,cardLayout:i,status:s,isCardWidget:a,browserSizeMode:n,layouts:l,mainSizeMode:r,config:c,appConfig:d}=e,[p,u]=(0,Uo.useState)(!1),[m,g]=(0,Uo.useState)(null),[h,v]=(0,Uo.useState)(null),[f,y]=(0,Uo.useState)(null),S=o.React.useRef(i),b=o.React.useRef(i);(0,Uo.useEffect)((()=>{S.current=e.cardLayout,b.current=e.cardLayout}),[s,e]);const w=e=>{b.current!==e&&(e===Go.AUTO?(g(C("remindAutoLayoutTitle")),v(C("remindAutoLayoutText")),y("")):(g(C("remindCustomLayoutTitle")),v(C("remindCustomLayoutText")),y(C("remindCustomLayoutBottomText"))),u(!0),S.current=e)},C=o.hooks.useTranslation(x.defaultMessages,o.defaultMessages);return(0,o.jsx)("div",{css:qo,role:"group","aria-label":C("layout")},(0,o.jsx)(I,{className:"clear-padding",title:C("layout")},(0,o.jsx)(N,{flow:"wrap"},(0,o.jsx)("div",{className:"d-flex align-items-center",onClick:()=>{w(Go.AUTO)}},(0,o.jsx)(x.Radio,{title:C("auto"),checked:i===Go.AUTO,className:"mr-2"})," ",C("auto"))),(0,o.jsx)(N,null,(0,o.jsx)("div",{className:"d-flex align-items-center",onClick:()=>{w(Go.CUSTOM)}},(0,o.jsx)(x.Radio,{title:C("custom"),checked:i===Go.CUSTOM||!i,className:"mr-2"})," ",C("custom"))),(0,o.jsx)(x.Modal,{isOpen:p,toggle:()=>{u(!p),S.current=b.current},centered:!0,css:Qo},(0,o.jsx)(x.ModalHeader,{closeIcon:"",className:"header-con"},(0,o.jsx)(zo,{className:"mr-2",size:24}),m),(0,o.jsx)(x.ModalBody,null,(0,o.jsx)("div",null,h),f&&(0,o.jsx)("div",{className:"mt-5"},f)),(0,o.jsx)(x.ModalFooter,null,(0,o.jsx)(x.Button,{title:C("ok"),type:"primary",onClick:()=>{const e=D.searchUtils.findLayoutId(l[_o.Default],n,r),i=D.searchUtils.findLayoutId(l[s],n,r),o={layout:S.current,config:c,widgetId:t,appConfig:d,status:s,regularLayoutId:e,desLayoutId:i,label:C(s.toLowerCase()),isCardWidget:a};S.current===Go.AUTO?Jo(o):Ho(o),u(!1),b.current=S.current}},C("ok")),(0,o.jsx)(x.Button,{title:C("cancel"),onClick:()=>{u(!1)}},C("cancel"))))))};function Yo(e){var t,i;const s=(0,o.getAppStore)().getState().appStateInBuilder,a=s.appRuntimeInfo.currentPageId,n=s.appRuntimeInfo.currentDialogId;let l=s.appRuntimeInfo.dialogInfos||(0,o.Immutable)({});const r=s.appConfig.dialogs,c=s.appConfig.pages,d={canClose:!0,checked:!0,isClosed:!0};return n&&((null===(t=r[n])||void 0===t?void 0:t.isSplash)&&(l=l.set(n,d)),c[a].autoOpenDialogId&&(l=l.set(a+"-"+c[a].autoOpenDialogId,d)),e&&Object.keys(c).forEach((e=>{c[e].autoOpenDialogId===n&&(l=l.set(e+"-"+n,d))}))),(null===(i=r[n])||void 0===i?void 0:i.isSplash)||Object.keys(r).some((e=>{r[e].isSplash&&(l=l.set(e,d))})),e&&l&&Object.keys(l).forEach((t=>{t!==e&&t!==a+"-"+e||(l=l.set(t,{canClose:Zo(e),checked:!1,isClosed:!1}))})),l}function Zo(e){const t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function es(e){const t=(0,o.getAppStore)().getState().appStateInBuilder,i=t.appRuntimeInfo.currentPageId,s=t.appRuntimeInfo.currentDialogId;if(w.builderAppSync.publishChangeSelectionToApp(null),s){const e=Yo();w.builderAppSync.publishDialogInfosChangeToApp(e),w.builderAppSync.publishDialogChangeToApp(null)}i!==e&&w.builderAppSync.publishPageChangeToApp(e),w.builderAppSync.publichActivePagePartChangeToApp(o.PagePart.Body)}function ts(e,t=!1){w.builderAppSync.publishChangeSelectionToApp(null);const i=(0,o.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;if(t||e!==i){w.builderAppSync.publishDialogChangeToApp(e);const t=Yo(e);w.builderAppSync.publishDialogInfosChangeToApp(t),w.builderAppSync.publichActivePagePartChangeToApp(null)}}(0,v.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),y})())}}}));