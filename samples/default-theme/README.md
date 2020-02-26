# Sample theme variables 
This sample demonstrates how to create a theme. 

## How to use the sample
Clone the sample repo and paste the folder contents in the client/your-extensions/themes
folder of your Experience Builder installation. 

## How it works

In the code snippet below it overrides the theme variables to create a custom theme. Use this [json](variables.json) as a reference in creating your own theme. All the variables can be overridden in the `variables.json` file in a theme folder. 

```json
{
	"darkTheme": false,
	"coloration": "default",
	"colors": {
		"white": "#fff",
		"black": "#000",
		"transparent": "transparent",
		"primary": "#0a77c6",
		"secondary": "#ecf1f8",
  },
  "typography": {
		"fontFamilyBase": "Avenir Next",
		"fontSizeRoot": "100%",
    "fontSizeBase": "0.875rem"
  }
}

```
