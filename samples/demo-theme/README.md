# Sample theme variables 
This sample demonstrates how to create a theme by overriding theme variables.

## How to use the sample
Clone the sample repo and paste the folder contents in the client/your-extensions/themes
folder of your Experience Builder installation. 

## How it works

When a custom theme is selected, the theme manager from the Jimu framework will read the custom variables and merge them with the default ones to create a new variables object at runtime. The variables object applies the style modules to dynamically generate CSS style sheets.

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
