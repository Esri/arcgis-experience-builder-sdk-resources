const fs = require('fs');
const path = require('path');

const webpackExtCommon = require('./webpack-extensions.common');
const basePath = path.join(__dirname, '..');

let configs = [], widgetsConfigInfo = [], themesConfigInfo = [];

fs.readdirSync(basePath).forEach(repoFolder => {
  if(!fs.statSync(path.join(basePath, repoFolder)).isDirectory()){
    return;
  }
  if(!webpackExtCommon.isExtensionRepo(path.join(basePath, repoFolder))){
    return;
  }

  let widgetsFolder = path.join(basePath, repoFolder, 'widgets');
  if(fs.existsSync(widgetsFolder) && !webpackExtCommon.checkWidgets(widgetsFolder)){
    widgetsConfigInfo.push(webpackExtCommon.getWidgetsInfoForWebpack(widgetsFolder));
  }

  let themesFolder = path.join(basePath, repoFolder, 'themes');
  if(fs.existsSync(themesFolder) && !webpackExtCommon.checkThemes(themesFolder)){
    themesConfigInfo.push(webpackExtCommon.getThemesInfoForWebpack(themesFolder));
  }
});

let allWidgetInfo = webpackExtCommon.mergeWebpackInfo(widgetsConfigInfo, 'widgets');
let allThemeInfo = webpackExtCommon.mergeWebpackInfo(themesConfigInfo, 'themes');

let toBeCleanWidgets = allWidgetInfo.allInfos.map(info => {
  return `dist/${info.uri}`;
});

let toBeCleanThemes = allThemeInfo.allInfos.map(info => {
  return `dist/${info.uri}`;
});

clearCustomWidgets();

Object.keys(allWidgetInfo.allEntries).length > 0 && configs.push(webpackExtCommon.getWidgetsWebpackConfig(allWidgetInfo.allEntries, allWidgetInfo.allToBeCopiedFiles, toBeCleanWidgets));
Object.keys(allThemeInfo.allEntries).length > 0 && configs.push(webpackExtCommon.getThemesWebpackConfig(allThemeInfo.allEntries, allThemeInfo.allToBeCopiedFiles, toBeCleanThemes));

module.exports = configs;


function clearCustomWidgets(){
  const existedWidgetInfos = getWidgetInfos('../dist/widgets/widgets-info-existed.json');
  const widgetInfos = getWidgetInfos('../dist/widgets/widgets-info.json');
  widgetInfos.forEach(w => {
    // Not in existed widgets means the widget is custom widget, need to remove it.
    if (!existedWidgetInfos.some(existedWidget => existedWidget.uri === w.uri)) {
      let distPath
      if(process.env.OUTPUT_FOLDER){
        distPath = path.join(__dirname, `../${process.env.OUTPUT_FOLDER}`)
      }else{
        distPath = path.join(__dirname, '../dist')
      }

      const widgetFolder = path.join(distPath, w.uri)
      if(fs.existsSync(widgetFolder)){
        fs.rmdirSync(widgetFolder, {recursive: true, maxRetries: 2})
      }
    }
  })
}

function getWidgetInfos(relativePath){
  const infoPath = path.join(__dirname, relativePath);
  let infos = [];
  if(fs.existsSync(infoPath)){
    infos = JSON.parse(fs.readFileSync(infoPath));
  }

  return infos;
}
