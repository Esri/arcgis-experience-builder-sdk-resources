# Use Coding Components

This sample shows how to use [`arcgis-coding-components`](https://developers.arcgis.com/javascript/latest/references/coding-components/) in a widget. It supports Experience Builder Developer Edition versions 1.17–1.18. For versions prior to 1.17, widgets must initialize the coding components themselves.

## Contents

- `manifest.json` - Defines widget metadata and EXB version.
- `src/runtime/widget.tsx` - Functional runtime component that imports Calcite Components and Map components.
- `src/setting/setting.tsx` - Builder settings panel. Allows users to select a target map widget.

## Prerequisites

- ArcGIS Experience Builder Developer Edition versions 1.17-1.18. 

## Installation

1. Clone the SDK resources repository (or download zip).
2. Copy the folder `widgets/web-component-widgets/use-coding-components` into your EXB install `client/your-extensions/widgets/`
3. Restart (or rebuild) the EXB dev environment if required.
4. Add the widget to an experience and select a map widget in its settings panel.

## How it works

The widget uses components from `arcgis-coding-components`, available in the Experience Builder SDK starting with 1.17. This SDK entry enables multiple widgets to reuse the same shared implementation.

- Data source wiring: Renders a `DataSourceComponent` pointed at the selected map's feature layer.
- Feature selection: In `onDataSourceInfoChange`, grabs the first record from the data source and stores its `feature` in local state.
- Arcade Editor setup: References `ArcgisArcadeEditor` via `ref` and, once a `feature` is available, assigns a custom `profile` (bundles: `core`, `dataAccess`, `geometry`, `portal`) including `$feature` resolved to the underlying `FeatureLayer`.

## License

Source code derived from this sample should preserve the Apache 2.0 license header used elsewhere in the repository [License.txt](../../../License.txt).
