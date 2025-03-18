import React from 'react'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

export default function Setting (props: AllWidgetSettingProps<{ [key: string]: never }>) {
  const onSelect = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds
    })
  }

  return (
    <div className="m-2">
      <MapWidgetSelector onSelect={onSelect} useMapWidgetIds={props.useMapWidgetIds}></MapWidgetSelector>
    </div>
  )
}
