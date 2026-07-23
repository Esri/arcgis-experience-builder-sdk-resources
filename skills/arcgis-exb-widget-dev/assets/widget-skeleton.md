# Widget Skeleton

Use this as a shape only. Always adapt to nearby widget conventions and current framework types.

## Folder

```text
my-widget/
  config.json
  icon.svg
  manifest.json
  README.md
  src/
    config.ts
    runtime/
      translations/
        default.ts
      widget.tsx
    setting/
      translations/
        default.ts
      setting.tsx
  tests/
```

## `src/config.ts`

```ts
export interface Config {
  message?: string
}
```

## `src/runtime/widget.tsx`

```tsx
import { React, jsx, hooks, type AllWidgetProps } from 'jimu-core'
import { Paper, WidgetPlaceholder } from 'jimu-ui'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import type { Config } from '../config'
import defaultMessages from './translations/default'

export default function Widget (props: AllWidgetProps<Config>) {
  const translate = hooks.useTranslation(defaultMessages)
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>()
  const mapWidgetId = props.useMapWidgetIds?.[0]

  if (!mapWidgetId) {
    return <WidgetPlaceholder widgetId={props.id} message={translate('selectMap')} />
  }

  return (
    <Paper className='widget-my-widget jimu-widget' aria-label={props.label} variant='flat' shape='none'>
      <JimuMapViewComponent
        useMapWidgetId={mapWidgetId}
        onActiveViewChange={setJimuMapView}
      />
      <div>{jimuMapView ? props.config?.message : translate('loading')}</div>
    </Paper>
  )
}
```

## `src/setting/setting.tsx`

```tsx
import { React, jsx, hooks, type ImmutableObject } from 'jimu-core'
import { TextInput } from 'jimu-ui'
import { SettingSection, SettingRow, MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import type { Config } from '../config'
import defaultMessages from './translations/default'

export default function Setting (props: AllWidgetSettingProps<ImmutableObject<Config>>) {
  const translate = hooks.useTranslation(defaultMessages)

  const onMapChange = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds
    })
  }

  const onMessageChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('message', evt.target.value)
    })
  }

  return (
    <SettingSection title={translate('setting')}>
      <SettingRow label={translate('map')}>
        <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onMapChange} />
      </SettingRow>
      <SettingRow label={translate('message')}>
        <TextInput value={props.config.message ?? ''} onChange={onMessageChange} />
      </SettingRow>
    </SettingSection>
  )
}
```

## `src/runtime/translations/default.ts`

```ts
export default {
  _widgetLabel: 'My widget',
  selectMap: 'Select a map widget.',
  loading: 'Loading'
}
```

## `src/setting/translations/default.ts`

```ts
export default {
  setting: 'Setting',
  map: 'Map',
  message: 'Message'
}
```

## `manifest.json`

Set `exbVersion` to the current framework version from `client/package.json` (`exb-client.version`).
Keep this as a minimal sample. In real widgets, expand `translatedLocales` to all shipped locale files.

```json
{
  "name": "my-widget",
  "label": "My widget",
  "version": "1.0.0",
  "exbVersion": "1.21.0",
  "author": "",
  "description": "Describe what the widget does.",
  "license": "http://www.apache.org/licenses/LICENSE-2.0",
  "properties": {
    "supportAutoSize": true
  },
  "translatedLocales": [
    "en"
  ]
}
```
