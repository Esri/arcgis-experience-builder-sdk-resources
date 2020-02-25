import {AllWidgetProps, React, IMState, FormattedMessage} from 'jimu-core';
import {IMConfig} from '../config';
import defaultMessage from './translations/default';

interface ExtraProps{
  locale: string;
}

export default function Widget(props: AllWidgetProps<IMConfig> & ExtraProps){
  return <div className="widget-demo-function jimu-widget" style={{overflow: 'auto'}}>
    This widget demonstrates creating a functional component.
    <div>
      config: {JSON.stringify(props.config)}
    </div>
    <div>
      locale: {props.locale}
    </div>
    <div>
      i18n: <FormattedMessage id="str1" defaultMessage={defaultMessage.str1}></FormattedMessage>
    </div>
  </div>;
}

Widget.mapExtraStateProps = (state: IMState, ownProps: AllWidgetProps<IMConfig>): ExtraProps => {
  return {
    locale: state.appContext.locale
  }
}
