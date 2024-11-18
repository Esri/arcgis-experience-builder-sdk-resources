import { moduleLoader, DataSourceComponent, type FeatureLayerDataSource, React, type AllWidgetProps, DataSourceManager, type IMDataSourceInfo, type FeatureDataRecord, type ArcGISQueryParams } from 'jimu-core'
import 'calcite-components'

const Widget = (props: AllWidgetProps<{ [key: string]: never }>) => {
  const ref = React.useRef(null)
  const [feature, setFeature] = React.useState(null)
  const useDs = props.useDataSources?.[0]

  function loadESMScript (url) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = url
      script.onload = function () {
        resolve(true)
      }
      script.onerror = function (event) {
        reject(new Error('Load script error:' + url))
      }
      document.head.appendChild(script)
    })
  }

  React.useEffect(() => {
    Promise.all([
      loadESMScript('https://jsdev.arcgis.com/coding-components/4.31/arcgis-coding-components.esm.js'),
      moduleLoader.loadModule('https://jsdev.arcgis.com/coding-components/4.31/arcgis-coding-components.css')
    ]).then(() => {
      console.log('ArcGIS Coding Components loaded')
    })
  })

  React.useEffect(() => {
    if (!ref.current || !feature) {
      return
    }
    const arcadeEditorElt = ref.current
    // Tell the Arcade Editor to use a custom profile and provide the necessary data.
    arcadeEditorElt.profile = {
      bundles: ['core', 'dataAccess', 'geometry', 'portal'],
      variables: [
        {
          name: '$feature',
          type: 'feature',
          description: 'The feature passed to the script during execution.',
          definition: (DataSourceManager.getInstance().getDataSource(useDs.dataSourceId) as FeatureLayerDataSource).layer
        }
      ]
    }

    arcadeEditorElt.testData = {
      profileVariableInstances: {
        $feature: feature
      },
      spatialReference: { wkid: 3857 }
    }
  }, [feature, useDs])

  const onInfoChange = (info: IMDataSourceInfo) => {
    const ds = DataSourceManager.getInstance().getDataSource(props.useDataSources[0].dataSourceId)
    if (ds && ds.getRecords().length > 0) {
      setFeature((ds.getRecords()[0] as FeatureDataRecord).feature)
    }
  }
  return (
    <div className="jimu-widget m-2">
      <arcgis-arcade-editor ref={ref}/>
      <DataSourceComponent
        useDataSource={useDs} query={{ outFields: ['*'] } as ArcGISQueryParams}
        widgetId={props.id}
        onDataSourceInfoChange={onInfoChange}/>
    </div>
  )
}

export default Widget
