import { DataSourceComponent, type FeatureLayerDataSource, React, type AllWidgetProps, DataSourceManager, type IMDataSourceInfo, type FeatureDataRecord, type ArcGISQueryParams, hooks } from 'jimu-core'

const Widget = (props: AllWidgetProps<{ [key: string]: never }>) => {
  const ref = React.useRef<HTMLArcgisArcadeEditorElement>(null)
  const [feature, setFeature] = React.useState(null)
  const isArcgisArcadeEditorLoaded = hooks.useArcgisArcadeEditor()
  const useDs = props.useDataSources?.[0]

  React.useEffect(() => {
    if (!isArcgisArcadeEditorLoaded || !ref.current || !feature || !useDs) {
      return
    }
    const arcadeEditorElt = ref.current
    // Tell the Arcade Editor to use a custom profile and provide the necessary data.
    arcadeEditorElt.profile = {
      bundles: ['core', 'data-access', 'geometry', 'portal-access'],
      variables: [
        {
          name: '$feature',
          type: 'feature',
          description: 'The feature passed to the script during execution.',
          definition: (DataSourceManager.getInstance().getDataSource(useDs.dataSourceId) as unknown as FeatureLayerDataSource).layer
        }
      ]
    }

    arcadeEditorElt.testData = {
      profileVariableInstances: {
        $feature: feature
      },
      spatialReference: { wkid: 3857 }
    }
  }, [feature, isArcgisArcadeEditorLoaded, useDs])

  const onInfoChange = (info: IMDataSourceInfo) => {
    if (!useDs) {
      return
    }
    const ds = DataSourceManager.getInstance().getDataSource(useDs.dataSourceId)
    if (ds && ds.getRecords().length > 0) {
      setFeature((ds.getRecords()[0] as unknown as FeatureDataRecord).feature)
    }
  }
  return (
    <div className="jimu-widget m-2">
      {isArcgisArcadeEditorLoaded && <arcgis-arcade-editor ref={ref} />}
      {useDs && <DataSourceComponent
        useDataSource={useDs} query={{ outFields: ['*'] } as ArcGISQueryParams}
        widgetId={props.id}
        onDataSourceInfoChange={onInfoChange}/>}
    </div>
  )
}

export default Widget
