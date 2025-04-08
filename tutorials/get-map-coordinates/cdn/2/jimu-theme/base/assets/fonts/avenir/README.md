# Calcite Fonts

Due to existing network restrictions (firewalls, on-premise, etc), some applications will not be able to access the Esri CDN. When that is the case, users won't see the correct Esri fonts.

By adding these files to your project and loading the supplied CSS, you can still provide the correct fonts for your users, even behind a firewall.

## Installation

You can [download the latest release](https://github.com/ArcGIS/calcite-fonts/releases) as static files, or use npm:

```
npm install ArcGIS/calcite-fonts
```
## Usage guidelines
Use of any font listed below is restricted as follows:
- Font files may be used for Esri-business purposes only.
- Fonts files may also be used by Esri Authorized Distributors for Esri business purposes only as they pertain to Esri, Inc. and its products or marketing materials.
- Font files may be used in Esri software only.
- Font files may not be distributed or used by third parties.
- Font files may be embedded in documents as long as the font files are not provided in a separate file that allows them to be exported.

## Use

Once you have the files in your project, simply load the CSS file:

```html
<link rel="stylesheet" href="[path to files]/fonts.css">
```

After the CSS is loaded, Calcite Web should render with the correct fonts. To use these fonts from your custom CSS, simply use the following font stack:

```css
font-family: "Avenir Next", "Avenir", sans-serif;
```

The CSS gives you styles for `300` (light), `400` (regular), `500` (medium), and `700` (bold).

### CDN

```html
<link rel="stylesheet" href="https://webapps-cdn.esri.com/CDN/fonts/v2.0.0/fonts.css">
```

## Sass

A SASS file is also provided if you're using a precompiler for your styles. Simply import `fonts.scss` to pull the `font-face` rules into your app's styles.

If you'd like to customize the font path, the variable `$calcite-fonts-path` is provided. Simply set this to the location of your fonts relative to your build CSS before importing, like so:

```scss
$calcite-fonts-path: "./my/custom/path/";
@import "fonts.scss";
```

Be sure to include a trailing slash on the path.

## OTF files

For native and desktop application you can download the OTF files here:

note: OTF files are hosted on compass, so you'll need to log in with your avworld credentials (if not logged in already).

[Avenir OTF files](https://compass.esri.com/org/creativeLab/Brand/Esri-Calcite-Fonts.zip)

### Custom font loading strategy

The SASS file also provides a variable (`$calcite-fonts-display`) which allows you to customize how fonts load via the [`font-display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display). If you wish to set the strategy to something other than `auto` override the variable before import:

```scss
$calcite-fonts-display: swap;
@import "fonts.scss";
```

## Internationalization

These styles cover every major language, automatically. Non-latin characters are pulled in only when needed, so if your application is in English, the browser will only load the files it needs for displaying English. This is accomplished by using the `unicode-range` property in the `@font-face` declaration. Languages styled with custom fonts include:

| ISO-639 | Language |
| ------- | -------- |
| ar | Arabic |
| bs | Bosnian |
| ca | Catalan |
| cs | Czech |
| da | Danish |
| de | German |
| el | Greek |
| es | Spanish |
| en | English |
| et | Estonian |
| fi | Finnish |
| fr | French |
| ka | Georgian |
| he | Hebrew |
| hi | Hindi |
| hr | Croatian |
| hu | Hungarian |
| id | Indonesian |
| it | Italian |
| lt | Lithuanian |
| lv | Latvian |
| nb | Norwegian |
| nl | Dutch |
| pl | Polish |
| pt | Portuguese |
| ro | Romanian |
| ru | Russian |
| sk | Slovak |
| sl | Slovenian |
| sr | Serbian |
| sv | Swedish |
| th | Thai |
| tr | Turkish |
| uk | Ukrainian |
| vi | Vietnamese |

*Note:* Logographic languages (like Chinese) will still be rendered in a system default. These languages require so many characters that loading a custom font may severely bloat the size of your app and negatively impact performance.

## Get Access to Non-Branded Fonts

If you need to use fonts other than Avenir Next for any reason, we can help! Our enterprise subscription with Monotype should be used whenever possible, and is the preferred alternative to open source options like Google Fonts. Contact [Font-Masters@esri.com](mailto:Font-Masters@esri.com) to get started.  (However, continue using Avenir Next for anything Calcite-themed.)

## Licensing

COPYRIGHT © 2021 Esri

All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License Agreement (MLA), and is bound by the terms of that agreement. You may redistribute and use this code without modification, provided you adhere to the terms of the MLA and include this copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact: Environmental Systems Research Institute, Inc. Attn: Contracts and Legal Services Department 380 New York Street Redlands, California, USA 92373 USA

email: contracts@esri.com
