import {
  appActions,
  DataRecord,
  DataRecordsSelectionChangeMessage,
  getAppStore,
  Message,
  MessageActionConstructorOptions,
  MessageType,
  StringSelectionChangeMessage
} from 'jimu-core';
import * as QueryAction from '../src/actions/query-action';

interface ConfigForStringChangeMessage {
  fieldName: string;
}

describe('query-action', function () {

  const widgetId = 'myWidget';
  const messageId = widgetId + '123'; //  The unique id. For actions provided by a widget, the id is: widgetId + actionName.

  let queryAction: QueryAction.default;
  beforeEach(() => {
    const options: MessageActionConstructorOptions = {
      id: messageId,
      widgetId,
      label: 'abc'
    }
    queryAction = new QueryAction.default(options);
  });

  it('verifies that a message is of a desired type', function () {
    expect(queryAction.filterMessageType(MessageType.DataRecordSetChange)).toBeFalsy();
    expect(queryAction.filterMessageType(MessageType.DataRecordsSelectionChange)).toBeTruthy();
    expect(queryAction.filterMessageType(MessageType.ExtentChange)).toBeFalsy();
    expect(queryAction.filterMessageType(MessageType.SelectDataRecord)).toBeFalsy();
    expect(queryAction.filterMessageType(MessageType.StringSelectionChange)).toBeTruthy();
  });

  it('verifies that a message is of a desired type, ignoring the messageWidgetId parameter', function () {
    expect(queryAction.filterMessageType(MessageType.DataRecordSetChange, 'xyz')).toBeFalsy();
    expect(queryAction.filterMessageType(MessageType.DataRecordsSelectionChange, 'xyz')).toBeTruthy();
    expect(queryAction.filterMessageType(MessageType.ExtentChange, 'xyz')).toBeFalsy();
    expect(queryAction.filterMessageType(MessageType.SelectDataRecord, 'xyz')).toBeFalsy();
    expect(queryAction.filterMessageType(MessageType.StringSelectionChange, 'xyz')).toBeTruthy();
  });

  it('accepts all messages when filtering', function () {
    const message: Message = {
      type: MessageType.StringSelectionChange,
      widgetId
    };
    expect(queryAction.filterMessage(message)).toBeTruthy();
  });

  it('accepts all messages when getting the setting component URI', function () {
    expect(queryAction.getSettingComponentUri(MessageType.DataRecordSetChange)).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.DataRecordsSelectionChange)).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.ExtentChange)).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.SelectDataRecord)).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.StringSelectionChange)).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.DataRecordSetChange, 'xyz')).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.DataRecordsSelectionChange, 'xyz')).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.ExtentChange, 'xyz')).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.SelectDataRecord, 'xyz')).toEqual('actions/query-action-setting');
    expect(queryAction.getSettingComponentUri(MessageType.StringSelectionChange, 'xyz')).toEqual('actions/query-action-setting');
  });

  it('executes a StringSelectionChange message', function () {
    const propKey = 'pathname';
    const value = 'path to something';
    const message: Message = new StringSelectionChangeMessage(widgetId, value);
    const actionConfig: ConfigForStringChangeMessage = {
      fieldName: propKey
    };

    // We're interested in the parameter used to call `dispatch`
    const dispatchMock = jest.spyOn(getAppStore(), 'dispatch');

    expect(queryAction.onExecute(message, actionConfig)).toBeTruthy();

    // Verify parameter
    expect(dispatchMock).toHaveBeenCalledWith({
      type: appActions.ActionKeys.WidgetStatePropChange,
      widgetId,
      propKey: 'queryString',
      value: `${propKey} = '${value}'`,
    });

    dispatchMock.mockRestore();
  });

  it('executes a DataRecordsSelectionChange message', function () {
    const fieldName = 'featureField';
    const featureFieldValue = 'featureFieldValue';

    const actionConfig = {
      fieldName
    };
    const records: DataRecord[] = [{
      ...(jest.requireActual('jimu-core')), // we're only mocking one function
      getFieldValue: jest.fn().mockReturnValueOnce(featureFieldValue)
    }];
    const message: Message = new DataRecordsSelectionChangeMessage(widgetId, records);

    // We're interested in the parameter used to call `dispatch`
    const dispatchMock = jest.spyOn(getAppStore(), 'dispatch');

    expect(queryAction.onExecute(message, actionConfig)).toBeTruthy();

    // Verify parameter
    expect(dispatchMock).toHaveBeenCalledWith({
      type: appActions.ActionKeys.WidgetStatePropChange,
      widgetId,
      propKey: 'queryString',
      value: `${fieldName} = '${featureFieldValue}'`,
    });

    dispatchMock.mockRestore();
  });

});