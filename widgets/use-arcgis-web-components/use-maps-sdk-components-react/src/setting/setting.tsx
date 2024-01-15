import { React } from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';

export default function Setting(props: AllWidgetSettingProps<{}>) {
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds
    })
  }

  return (
    <div className="widget-use-component m-2">
      <MapWidgetSelector onSelect={onMapWidgetSelected} useMapWidgetIds={props.useMapWidgetIds}></MapWidgetSelector>
    </div>
  )
}