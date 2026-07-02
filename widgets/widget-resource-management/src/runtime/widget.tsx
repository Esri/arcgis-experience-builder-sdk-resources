import { appConfigUtils } from 'jimu-core'

export default function Widget(props) {
  const logo = props.config?.logo
  // https://www.arcgis.com/sharing/rest/content/items/xxx/resources/widget_4/logo.png?token=xxx
  const logoUrl = appConfigUtils.processResourceUrl(logo)

  return logo ? <img src={logoUrl} /> : <span>placeholder</span>
}
