import { _getInitConfig } from '../src/actions/query-action-setting';
import { getAppStore, appActions } from 'jimu-core';
import { getInitState } from 'jimu-for-test';
const appConfig = require('./config.json');

describe('query-action-setting', function () {

  beforeEach(() => {
    getAppStore().dispatch(appActions.updateStoreState(getInitState().set('appStateInBuilder', appConfig)));
  });

  it('returns existing data source', function () {
    const props = {
      messageWidgetId: 'myWidget123',
      config: {
        useDataSource: {
          dataSourceId: 'dataSourceId',
          mainDataSourceId: 'mainDataSourceId',
          dataViewId: 'dataViewId',
          rootDataSourceId: 'rootDataSourceId'
        }
      }
    };

    expect(_getInitConfig(props)).toEqual({
      useDataSource: {
        dataSourceId: 'dataSourceId',
        mainDataSourceId: 'mainDataSourceId',
        dataViewId: 'dataViewId',
        rootDataSourceId: 'rootDataSourceId'
      }
    });
  });

  it('skips a data source if the widget does not have one (null)', function () {
    const props = {
      messageWidgetId: 'widget_1',
      config: {
        useDataSource: null
      }
    };

    expect(_getInitConfig(props)).toEqual({
      useDataSource: null
    });
  });

  it('skips a data source if the widget does not have one (empty list)', function () {
    const props = {
      messageWidgetId: 'widget_2',
      config: {
        useDataSource: null
      }
    };

    expect(_getInitConfig(props)).toEqual({
      useDataSource: null
    });
  });

  it('skips a data source if the data source type is Web Map or Web Scene', function () {
    const props = {
      messageWidgetId: 'widget_3',
      config: {
        useDataSource: null
      }
    };

    expect(_getInitConfig(props)).toEqual({
      useDataSource: null
    });
  });

  it('creates a data source if needed', function () {
    const props = {
      messageWidgetId: 'widget_4',
      config: {
        useDataSource: null
      }
    };

    expect(_getInitConfig(props)).toEqual({
      useDataSource: {
        dataSourceId: 'dataSource_2',
        mainDataSourceId: 'dataSource_2_main',
        dataViewId: 'dataSource_2_view',
        rootDataSourceId: 'dataSource_2_root'
      }
    });
  });

});
