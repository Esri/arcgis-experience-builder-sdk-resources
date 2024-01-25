# Share code between widgets - shared entry

This sample demonstrates how to share code between widgets by using shared entry.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
To use this method, you need to follow the following steps:
* Create a `shared-code` folder under the `widgets` folder. Please note that the folder name must be the `shared-code`.
* Put your shared code into the `shared-code` folder. In some cases, you may need to create multiple shared entries, so the best practice folder structure in the `shared-code` folder is:
```
shared-code
  |-entry1.ts
  |-entry2.tsx
  |-lib
    |-entry1
      |-module1.ts
      |-module2.ts
    |-entry2
      |-module1.ts
      |-module2.ts
```
* Add the entries into webpack to compile the entries. Open the `webpack/widget-webpack-override.js`, add the entry like this:
```javascript
module.exports = function (webpackConfig) {

  webpackConfig.entry['widgets/shared-code/entry1'] = [publicPathFile, path.join(basePath, 'extensions/widgets/shared-code/entry1.ts')]
  webpackConfig.entry['widgets/shared-code/entry2'] = [publicPathFile, path.join(basePath, 'extensions/widgets/shared-code/entry2.ts')]

  return webpackConfig
}
```
* At last, you can import the shared code like using the standard ES6 imports, like this:
```typescript
import { sampleFunction } from 'widgets/shared-code/entry1'
```