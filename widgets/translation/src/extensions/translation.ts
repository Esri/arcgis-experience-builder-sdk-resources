import { type extensionSpec, type AppConfig, utils, createIntl, getAppStore } from 'jimu-core'
import defaultMessage from '../runtime/translations/default'

export default class Translation implements extensionSpec.AppConfigProcessorExtension {
  id = 'translation'
  widgetId: string

  async process (appConfig: AppConfig): Promise<AppConfig> {
    // Do not replace when run in builder.
    if (window.jimuConfig.isInBuilder) {
      return Promise.resolve(appConfig)
    }
    const widgetJson = appConfig.widgets[this.widgetId]

    const intl = createIntl({
      locale: getAppStore().getState().appContext.locale,
      messages: Object.assign({}, defaultMessage, widgetJson.manifest.i18nMessages)
    })

    utils.replaceI18nPlaceholdersInObject(appConfig, intl, defaultMessage)
    return Promise.resolve(appConfig)
  }
}
