# Show Unit Tests widget

This sample demonstrates how to write unit tests for a widget.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation. Then to run the unit tests, run `npm run test` in the `client` folder.

## How it works

The main focus of this sample is `tests/widget.test.tsx`. It uses `jest.mock(...)` to mock the modules from the ArcGIS API for JavaScript that the widget is using.

```js
jest.mock('jimu-core', () => {
  return {
    ...jest.requireActual('jimu-core'),
    loadArcGISJSAPIModule: jest.fn().mockImplementation(moduleId => {
      let module;
      if (moduleId === 'esri/layers/FeatureLayer') {
        module = jest.fn().mockImplementation(() => {
          return {
            queryFeatureCount: () => Promise.resolve(5)
          }
        });
      }
      return Promise.resolve(module)
    })
  }
});
```

Then it uses behavior-driven development unit testing patterns like `describe(..)`, `it(...)`, and `expect(..)` to specify the unit tests.

```js
describe('test show-ut widget', () => {
  it('test p1, use render props', () => {
    const { queryByText, rerender } = render(<Widget config={{ p1: true }} />);
    expect(queryByText('p1 is checked.').className).toBe('has-p1');

    rerender(<Widget config={{ p1: false }} />);
    expect(queryByText('p1 is checked.')).toBeNull();
  })
  // ...
});
```

When the tests are run by using the command `npm run test`, all test files are run, and the results are reported back to you in the terminal.
