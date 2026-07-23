import { React, ReactRedux, type IMState } from 'jimu-core'
import { type AllWidgetSettingProps, AppResourceManager } from 'jimu-for-builder'

export default function Setting (props: AllWidgetSettingProps<any>) {
  const widgetId = props.id
  const [busy, setBusy] = React.useState(false)
  const appResourceManager = AppResourceManager.getInstance()

  const allResources = ReactRedux.useSelector((state: IMState) => {
    const appResourceList = state.appStateInBuilder?.appConfig?.appResourceList
    return appResourceList?.widgetResourceList?.[widgetId]
  })
  const validResources = React.useMemo(() => {
    if (!allResources) return []
    return Object.values(allResources)
  }, [allResources])

  const onUpload = React.useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    try {
      const res = await appResourceManager.uploadWidgetResource(widgetId, file)
      if (!res?.success) {
        alert(res.message)
      }
    } finally {
      setBusy(false)
      e.target.value = ''
    }
  }, [appResourceManager, widgetId])

  const onUse = React.useCallback((resourceUrl: string) => {
    props.onSettingChange({
      id: widgetId,
      config: { logo: resourceUrl }
    })
  }, [props, widgetId])

  const onUnuse = React.useCallback(() => {
    props.onSettingChange({
      id: widgetId,
      config: { logo: '' }
    })
  }, [props, widgetId])

  const onRemove = React.useCallback((resourceUrl: string) => {
    const res = appResourceManager.removeWidgetResource(widgetId, resourceUrl)
    if (!res?.success) {
      alert(res.message)
    }
  }, [appResourceManager, widgetId])

  const inUseWidgetResources = appResourceManager.getInUseWidgetResources(widgetId)

  return (
    <div>
      <h4>Widget Resources</h4>
      <div>
        <input type="file" onChange={onUpload} disabled={busy} />
        {busy ? <span>Working...</span> : null}
      </div>
      <div>
        {validResources.length === 0 &&
          <div>No resources yet</div>
        }
        {validResources.map((r) => (
          <div key={r.url} className='mb-2' style={{ border: '1px solid #ccc' }}>
            <p title={r.url} className='text-truncate'>
              resourceUrl: {r.url}
            </p>
            <p title={r.originalName} className='text-truncate'>
              originalName: {r.originalName}
            </p>
            <p title={r.fileFormat} className='text-truncate'>
              fileFormat: {r.fileFormat}
            </p>
            <p title={r.created?.toString()} className='text-truncate'>
              created: {r.created}
            </p>
            <p title={r.size?.toString()} className='text-truncate'>
              size: {r.size}
            </p>
            {props.config.logo !== r.url && <button onClick={() => { onUse(r.url) }} disabled={busy}>Use</button>}
            {props.config.logo === r.url && <button onClick={onUnuse} disabled={busy}>Unuse</button>}
            <button onClick={() => { onRemove(r.url) }} disabled={busy || inUseWidgetResources.includes(r.url)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
