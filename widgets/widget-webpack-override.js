const fs = require('fs')
const path = require('path')

const basePath = path.join(__dirname, '../..') // the client folder
const publicPathFile = path.join(basePath, 'jimu-core/lib/set-public-path.ts')

module.exports = function (webpackConfig) {

  webpackConfig.entry['widgets/shared-code/entry1'] = [publicPathFile, path.join(basePath, 'extensions/widgets/shared-code/entry1.ts')]
  webpackConfig.entry['widgets/shared-code/entry2'] = [publicPathFile, path.join(basePath, 'extensions/widgets/shared-code/entry2.ts')]

  return webpackConfig
}
