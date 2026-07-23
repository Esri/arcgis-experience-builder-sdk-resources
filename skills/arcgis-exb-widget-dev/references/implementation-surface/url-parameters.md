# Implementation Surface: URL Parameters

## URL Parameters

- Declare supported URL params in `manifest.urlParameters` when runtime behavior depends on URL input.
- Keep URL-param-driven behavior optional and safe by default; handle missing/invalid parameters gracefully.
- Parse and normalize URL values once, then pass validated values into widget logic.
- Do not trust raw URL input for queries/actions without validation and boundary checks.
- Keep setting options and runtime behavior aligned (for example enable/disable URL parameter support in config).
- Document supported URL parameters and examples in `README.md` when exposed to users.
- URL parameters are saved in `state.queryObject` and `state.urlHashObject`. The `state.queryObject` is derived from the query string (after `?`) and the `state.urlHashObject` is derived from the hash string (after `#`).
- Widget can use `UrlManager.getInstance().setWidgetUrlParams(widgetId, urlHashParams)` to update the URL parameters in the browser address bar.

```ts
// read URL parameters from state
const queryObject = useSelector((state: IMState) => state.queryObject)
const urlHashObject = useSelector((state: IMState) => state.urlHashObject)

// update URL parameters in the browser address bar
UrlManager.getInstance().setWidgetUrlParams(widgetId, { param1: 'value1', param2: 'value2' })
```
