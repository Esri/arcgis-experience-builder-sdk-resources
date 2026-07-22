# Implementation Surface: Translations

## Translations

- Before adding a new widget string, check `defaultMessages` in `jimu-*` first and reuse existing keys/messages when they fit.
- Only add new strings to widget translation files when no suitable message exists in `jimu-*`.
- Keep runtime and setting translations separated; do not import or reuse runtime translation bundles in setting code (or vice versa).
  - Runtime strings should be defined under `src/runtime/translations/default.ts`.
  - Setting strings should be defined under `src/setting/translations/default.ts`.
- Use conventional keys:
  - `_widgetLabel`
  - `_action_<actionName>_label`
  - `_ext_<extensionName>_label`
  - `_layout_<layoutName>_label`
- Keep `_widgetLabel` in `default.ts` aligned with `manifest.json` `label`.
- Do not inline user-visible strings in TSX unless nearby code has an established exception.
- For parameterized text, define placeholders in `default.ts` and pass values at usage site; keep placeholder names stable.
- Declare supported locales in the widget `manifest.json` with `translatedLocales`, and keep that list aligned with the actual translation files you ship.
- For source code repository
  - Do not modify `./translations/*.js`, which are owned by translation team.
  - Register new widget in `client/extensions/translation-manifest.txt`, including runtime and setting.
- For develop edition, create the required locale JS files under `./translations/` yourself by translating the messages and generating the related JS files. Name generated locale files with the locale identifier, for example `en.js` and `pt-br.js`. Use the existing `System.register` translation module format for these JS files. Example:
```js
System.register([], function (_export) {
  return {
    execute: function () {
      _export({
        _widgetLabel: 'My Widget name',
        selectedCount: '{count} selected'
      })
    }
  }
})
```
- In runtime and setting TSX, read strings through the `hooks.useTranslation` in `jimu-core` , not hard-coded literals.

```ts
// src/runtime/translations/default.ts
export default {
  _widgetLabel: 'My Widget name',
  selectedCount: '{count} selected'
}

// src/runtime/widget.tsx
import { hooks, defaultMessages as jimuCoreMsg } from 'jimu-core'
import defaultMessages from './translations/default'

const translate = hooks.useTranslation(jimuCoreMsg, defaultMessages)
```
