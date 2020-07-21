# Create Redux store

This widget demonstrates how to provide your own Redux store,action, and reducer to share state between widgets.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `samples/widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works

Create an extension class to implement the `ReduxStoreExtension` interface in the `my-store.ts` file.

```js
import { extensionSpec, ImmutableObject, IMState } from 'jimu-core';

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension {
  id = 'my-local-redux-store-extension';
  // Returns your redux actions
  getActions() {
    return Object.keys(MyActionKeys).map(k => MyActionKeys[k]);
  }
  //This returns the local state
  getInitLocalState() {
    return {
      a: null,
      b: null
    }
  }
  //This is the reducer and specifies how the application state changes in response to the actions.
  getReducer() {
    return (localState: IMMyState, action: ActionTypes, appState: IMState): IMMyState => {
      switch (action.type) {
        case MyActionKeys.MyAction1:
          return localState.set('a', action.val);
        case MyActionKeys.MyAction2:
          return localState.set('b', action.val);
        default:
          return localState;
      }
    }
  }
  //Return the local key for myState
  getStoreKey() {
    return 'myState';
  }
}

```

In the `manifest.json` there is an `extensions` property that provides the location and information for the redux store extension.

```json
 "extensions": [
    {
      "name": "My store",
      "point": "REDUX_STORE",
      "uri": "extensions/my-store"
    }
  ],

```

In the `widget.tsx` the `onChange` function dispatches the action type based on the change in the value.

```js
onChange = (evt) => {
    this.props.dispatch({
      type: 'MY_ACTION_1',
      val: evt.target.value
    });
  }

```

