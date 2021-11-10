This patch fixes these bugs:
  * "jimu-icons" is missing error.
  * Unit tests do not work.
  * Download does not work on Node.js 16 if an app contains custom widgets.

Steps:
  * Replace the files in the `client` folder
  * Run `npm ci` in the `client` folder
  * Restart the node server in both `client` and `server` folders

