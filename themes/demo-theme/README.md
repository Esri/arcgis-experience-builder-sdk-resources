# Sample theme

This sample contains the minimal required files to create a custom theme.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this theme's folder (within `themes`) to the `client/your-extensions/themes` folder of your Experience Builder installation.

## How it works

When a custom theme is selected, the theme manager from the Jimu framework will read the custom variables in the `variables.json` and merge them with the default ones to create a new variables object at runtime. The variables object is then applied to the style modules (including the custom ones from `style.ts`) to dynamically generate CSS style sheets.

### Override theme variables

The `variables.json` file in the sample theme folder contains all variables from the default theme, which can be overridden with different values.

A simple example:

```json
{
  "colors": {
    "primary": "red"
  },
  "typography": {
    "fontFamilyBase": "Impact, Arial",
    "fontSizeBase": "1rem"
  }
}
```

> NOTE: In order to have your theme customization to be reflected correct, please remove any unchanged variables from the demo `variables.json` file to avoid unneeded theme overrides.

### Style Modules

Any custom CSS styles can be added inside of the `style.ts` file.

Global styles can be added to the `globalStyles` function and exported as a module with the name of "Global".

Styles for UI components can be added the same way: wrap the CSS in a function and export it as a module with the same name as the component. For example, the `buttonStyles` function is exported as "Button" in the sample `style.ts` file.

Uncomment the code inside of `style.ts` to see examples.

### Localization

Themes support localization files to provide translation texts for different locales to use, such as `_themeLabel` used by the theme setting panel in the builder to display the name of the theme.

Register supported locales in the `manifest.json` as:

``` json
  "translatedLocales": [
    "en",
    "ar",
    "zh-cn"
  ]
```

Each locale needs to have a supporting translation file added under the `/translations` directory named as `{locale}.js`, except for "en", which has its file named `default.ts`.

For example, the "ar" locale should have an `ar.js` file in the `/translations` folder.

Then add and edit the text in each locale file, such as the `_themeLabel` string mentioned above.
