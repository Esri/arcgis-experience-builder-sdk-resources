This patch fixes these bugs:
  * "jimu-icons" is missing error.
  * Unit tests do not work.
  * Download does not work on Node.js 16 if an app contains custom widgets.

Steps:
  1. [Download](https://github.com/Esri/arcgis-experience-builder-sdk-resources/archive/refs/heads/master.zip) the repository code and unzip it.
  2. Browse to the patch directory (`patches/1.6/patch1/arcgis-experience-builder`)
  3. Replace the files in the `client` folder with the files in the `client` folder on your Experience Builder installation.
  4 Run `npm ci` in the `client` folder
  5. Restart the node server in both `client` and `server` folders
