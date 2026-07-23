# Widget Resource Management

This sample demonstrates how to manage per-widget resources (uploaded files) via `AppResourceManager` in Experience Builder **Builder**, and how to correctly consume those resources in the **runtime** widget.

Typical use cases include letting an app author upload a logo/image/JSON file in the widget setting panel and then rendering/using it in the runtime widget.

## How to use the sample

Clone the [sample repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) and copy this widget's folder (within `widgets`) to the `client/your-extensions/widgets` folder of your Experience Builder installation.

In Experience Builder:

1. Add **Widget Resource Management** to a page.
2. Open the widget **settings** panel.
3. Upload a file (an image is easiest to verify).
4. Click **Use** on one resource to bind it to the widget config.
5. Preview/Run the experience and verify the runtime widget renders the image.
6. To delete a resource, make sure it is not in use: click **Unuse**, then click **Remove**.

## How it works

This sample contains two parts:

- **Setting UI** ([src/setting/setting.tsx](src/setting/setting.tsx)): upload/list/use/unuse/remove widget resources.
- **Runtime widget** ([src/runtime/widget.tsx](src/runtime/widget.tsx)): read the selected resource from config and render it.

### 1) Upload and manage resources in Builder

In the setting component, the widget uses `AppResourceManager` (Builder-only) to upload and manage files for the current widget instance (`props.id`).

Upload:

```ts
const appResourceManager = AppResourceManager.getInstance()
const res = await appResourceManager.uploadWidgetResource(widgetId, file)
```

List resources:

The uploaded resources are stored in the app config (Builder state) under the widget id. This sample reads them from Redux:

```ts
const appResourceList = state.appStateInBuilder?.appConfig?.appResourceList
return appResourceList?.widgetResourceList?.[widgetId]
```

Use / Unuse:

This sample stores the selected resource URL in the widget config as `logo`:

```ts
props.onSettingChange({
  id: widgetId,
  config: { logo: resourceUrl }
})
```

Remove:

Before removing, the sample checks whether a resource is currently referenced by the widget (to avoid breaking the experience). The **Remove** button is disabled when the resource is in use.

```ts
const inUse = appResourceManager.getInUseWidgetResources(widgetId)
appResourceManager.removeWidgetResource(widgetId, resourceUrl)
```

### 2) Consume resource URLs in runtime

`uploadWidgetResource()` returns a resource URL that is intended to be stored in app config. In runtime, you should convert it into a usable URL (may include item resource path, tokens, etc.) before using it.

This sample uses `appConfigUtils.processResourceUrl()`:

```ts
const logo = props.config?.logo
const logoUrl = appConfigUtils.processResourceUrl(logo)
return logo ? <img src={logoUrl} /> : <span>placeholder</span>
```

## Notes

- Resource upload/remove APIs are available in **Builder** via `jimu-for-builder`. Runtime widgets should only **read and use** resources.
- This sample renders the selected file using an `<img>` tag. If you upload a non-image file, the image may fail to render (expected).
- The processed URL may include authentication info depending on your deployment. Prefer storing the original resource URL in config and process it at runtime.

## Summary

- This sample demonstrates using `AppResourceManager` in the **Builder setting panel** to upload/list/remove widget resources, and persisting the chosen resource URL into the widget config (this sample uses `config.logo`).
- In **runtime**, do not use the raw resource URL directly. Use `appConfigUtils.processResourceUrl()` to convert it into a final, accessible URL before loading it (for example, in an `<img>` tag).
