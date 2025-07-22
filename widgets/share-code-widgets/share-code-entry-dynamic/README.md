# Share code between widgets - load shared code dynamically

This sample demonstrates how to load the share code dynamically.

## How to use the sample
Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

## How it works
To create shared code entry, please refer to the `share-code-entry` widget.

To load the shared code dynamically, please follow the below:
```typescript
import { moduleLoader } from 'jimu-core'
moduleLoader.loadModule('widgets/shared-code/entry', props.context.folderUrl)
```
