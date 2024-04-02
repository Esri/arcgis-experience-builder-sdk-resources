# Share code between widgets - shared entry

This sample demonstrates how to share code between widgets by using shared entry.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
To use this method, you need to follow the following steps:
* Create a `shared-code` folder under the `widgets` folder. Please note that the folder name must be the `shared-code`.
* Put your shared code into the `shared-code` folder, all `.ts` and `.tsx` files in the `shared-code` folder will be compiled as shared entries. The best practice folder structure in the `shared-code` folder is:
```sh
shared-code/
  entry1.ts
  entry2.tsx
  lib/
    entry1/
      module1.ts
      module2.ts
    entry2/
      module1.ts
      module2.ts
```

In the above folder structure, `entry1` and `entry2` will be created.

To support i18n, create a `translations` folder within the `shared-code` folder, or within each entry folder, for example, `shared-code/lib/entry1/translations`. The `translations` folder structure is the same as the widget translations folder.
* At last, you can import the shared code like using the standard ES6 imports, like this:
```typescript
import { sampleFunction } from 'widgets/shared-code/entry1'
```