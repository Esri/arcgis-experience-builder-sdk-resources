# Translation widget
This sample demonstrates how to utilize the extension for `AppConfigProcessor` extension point to tranlsate the strings in app config.

## How to use the sample
* Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `samples/widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.
* In you app config, replace the strings that you need to translate with the placeholder: `${key}`, then add the `key` into `src/runtime/translations/default.ts`
* Translate the strings and put the translations in the `translations` folder, use the locale as file name, then add the locale into `manifest.json` property `translatedLocales`

## How it works
First, this widget declares an extension for `AppConfigProcessor` extension point in manifest,
```
"extensions": [
    {
      "point": "APP_CONFIG_PROCESSOR",
      "uri": "extensions/translation"
    }
  ]
```
Then, this widget creates a class that implements `extensionSpec.AppConfigProcessorExtension` interface. This class implements the `process` method, this method receives the `AppConfig` parameter, it replaces the placeholders in the app config with the translated strings then it returns the replaced app config.

There is a sample app config in the widget folder for reference.


