# Jimu-icons

### We provide many icon components out of the box, these components are divided into two categories: `Filled` and `Outlined`.

### Each category is divided into several subcategories:
- Application
- Brand
- Data
- Directional
- Editor
- GIS
- Suggested

---
## Naming rules

### Standard forma: category/name-a-b-c

1. All words use English small letters, separated words with "-".
2. The icon name should be concise, and describe the icon intuitively.
3. Use as few words as possible.

Example: `directional/arrow-up`

---
## Preview icon components in Storybook:

Run the command:
```
cd client/storybook
npm ci
npm start
```
Open this [URL](http://localhost:6006/?path=/docs/theme-system-icons--page) to preview the icon components.

---
## How to use icon component of jimu-icons.

```tsx
import { PhoneFilled } from 'jimu-icons/filled/application/phone'

ReactDOM.render(<PhoneFilled size='m' color='#050505' />, root)
```

---
## The size of the icon

#### Standard size
We standardized the size of the icon component:

| --Size-- | --Pixel-- |
| :-: | :-: |
| s | 12px |
| m | 16px |
| l | 20px |

#### Any size
We recommend using the standard size to use the icon, if you really want to use the exact value as the size of the icon, you can use the numeric size:

```tsx
import { PhoneFilled } from 'jimu-icons/filled/application/phone'

ReactDOM.render(<PhoneFilled size={50} />, root)
```

#### Use icon in button component
The size of the icon in the button follows the standard:

| Button size | Icon size |
| :-: | :-: |
| sm | m |
| default | m |
| lg | l |

## How to use svg resources directly

The svg used by icon components is placed under `jimu-icons/svg/`, if you want to use svg directly, here is an example:

```tsx 
import { Icon } from 'jimu-ui'
import svg from 'jimu-icons/svg/filled/application/phone.svg'

export const Component = (props) => {
  return <Icon size={12} icon={svg}></Icon>
}
```
---
## How to add new icon

- Drop your icon file in format of SVG to `client/jimu-icons/svg/filled(outlined)` directory.
- Run `npm run build-jimu-icon-components` in the `client` directory, the icon components will be automatically generated in the corresponding directory