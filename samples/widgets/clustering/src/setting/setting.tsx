import {React} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
import { JimuMapViewSelector, SettingRow, SettingSection} from "jimu-ui/advanced/setting-components";

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, {}> {

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
   };

  render(){
    return <div className="widget-setting p-2">  
    <SettingSection
      title={this.props.intl.formatMessage({
        id: "Map-Layer",
        defaultMessage: "Select Map widget" 
      })}
    >
      <SettingRow>      
        <JimuMapViewSelector
          onSelect={this.onMapSelected}
          useMapWidgetIds={this.props.useMapWidgetIds}
        />
      </SettingRow>
    </SettingSection>
       </div>
  }
}