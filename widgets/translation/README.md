# Translation widget

This sample demonstrates how to utilize the extension for `AppConfigProcessor` extension point to translate the strings in app config.

## How to use the sample

* Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.
* In your app config, replace the strings that you need to translate with the placeholder: `${key}`, then add the `key` into `src/runtime/translations/default.ts`
* Translate the strings and put the translations in the `translations` folder, use the locale as the file name, then add the locale into `manifest.json` property `translatedLocales`.

## How it works

First, this widget declares an extension for `AppConfigProcessor` extension point in manifest,

```json
"extensions": [
    {
      "point": "APP_CONFIG_PROCESSOR",
      "uri": "extensions/translation"
    }
  ]
```

Then, this widget creates a class that implements the `extensionSpec.AppConfigProcessorExtension` interface. This class defines the `process` method, which recieves the `AppConfig` parameter. It replaces the placeholders in the app config with the translated strings then it returns the replaced app config by using `utils.replaceI18nPlaceholdersInObject`.

There is a sample app config in the widget folder (`sample-app-config.json`) for reference.
