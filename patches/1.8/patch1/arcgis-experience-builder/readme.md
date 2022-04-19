This patch fixes FeatureLayer in MapService does not respect the data source filter changes bug.

Steps:
  1. [Download](https://github.com/Esri/arcgis-experience-builder-sdk-resources/archive/refs/heads/master.zip) the repository code and unzip it.
  2. Browse to the patch directory (`patches/1.8/patch1/arcgis-experience-builder`)
  3. Replace the files in the `client` folder with the files in the `client` folder on your Experience Builder installation.
  4. Run `npm ci` in the `client` folder
  5. Restart the node server in both `client` and `server` folders
