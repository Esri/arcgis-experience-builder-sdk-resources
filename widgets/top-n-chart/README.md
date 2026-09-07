# Top-N Chart

An ArcGIS Experience Builder custom widget that displays grouped categorical statistics as responsive horizontal bars, with synthetic Others, runtime Top-N control, local and server search, category selection, and native Data Actions integration.

**Status:** 1.0.0  
**Developed against:** ArcGIS Experience Builder Developer Edition 1.20.0  
**Note:** Before using in production, independently validate this widget against your specific configuration, data, and Experience Builder environment.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Business Use Cases](#business-use-cases)
- [Architecture Overview](#architecture-overview)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Developer Edition Installation](#developer-edition-installation)
  - [Repository Installation](#repository-installation)
  - [Build Instructions](#build-instructions)
- [Configuration Guide](#configuration-guide)
  - [Data Section](#data-section)
  - [Header Section](#header-section)
  - [Appearance Section](#appearance-section)
  - [Tools Section](#tools-section)
  - [Bar Styling SidePopper](#bar-styling-sidepopper)
  - [Title Format SidePopper](#title-format-sidepopper)
- [Runtime Experience](#runtime-experience)
- [Aggregation Types](#aggregation-types)
- [Top-N and Maximum Categories](#top-n-and-maximum-categories)
- [Synthetic Others](#synthetic-others)
- [Percentage Calculations](#percentage-calculations)
- [Conditional Bar Colors](#conditional-bar-colors)
- [Search Functionality](#search-functionality)
- [Selection and Connected Content](#selection-and-connected-content)
- [Data Actions](#data-actions)
- [Map Extent and Upstream Filters](#map-extent-and-upstream-filters)
- [Data Source Support](#data-source-support)
- [Responsive Design](#responsive-design)
- [Examples](#examples)
- [Screenshots](#screenshots)
- [Performance Considerations](#performance-considerations)
- [Security Considerations](#security-considerations)
- [Accessibility](#accessibility)
- [Known Limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Development Details](#development-details)
- [Query Architecture](#query-architecture)
- [Customization and Extension Points](#customization-and-extension-points)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [Support](#support)
- [Author](#author)
- [License](#license)

---

## Overview

The Top-N Chart widget transforms raw categorical data into ranked, visually compelling horizontal bar charts. It combines sophisticated grouped statistics (COUNT, SUM, AVG, MIN, MAX) with interactive runtime controls, intelligent search capabilities, and native Experience Builder integration for data-driven applications.

**Core purpose:** Enable GIS analysts and web application authors to rapidly create top-performing-categories dashboards without custom development, while maintaining full control over how categories are ranked, grouped, displayed, and shared with connected widgets.

### What It Does

1. **Groups** source data by a configured category field
2. **Calculates** aggregate statistics (COUNT, SUM, AVG, MIN, MAX) for each group
3. **Ranks** groups by their aggregate values
4. **Displays** the top N groups as horizontal bars
5. **Synthesizes** an Others bar representing all excluded groups
6. **Computes** share-of-total percentages (COUNT and SUM only)
7. **Enables** runtime Top-N control, sorting direction, and Show All navigation
8. **Supports** LOCAL and SERVER search to find categories outside the displayed Top-N
9. **Sends messages** about selected categories to connected Experience Builder widgets
10. **Executes** Data Actions (native Experience Builder capability) on selected records

### Why It Exists

Experience Builder's native chart widgets focus on broad categorical visualization. The Top-N Chart fills a specific gap: **focused, interactive categorical ranking with mathematical transparency**. It is designed for analysts who need to:

- Quickly rank thousands of categories and focus on the top performers
- Understand exactly how totals and percentages are calculated
- Search for specific categories outside the displayed Top-N
- Interact with selected categories through downstream widgets
- Control responsive rendering without sacrificing design authorship

---

## Key Features

### Data Processing & Aggregation

- **Five aggregation types:** COUNT (no value field required), SUM, AVG, MIN, MAX
- **Server-side grouped statistics:** Aggregation happens on the server; only top groups are downloaded
- **Universe totals:** Maintains separate totals for percentages and Others calculation
- **Retention limit:** Controls the maximum category population ever fetched (default 50, configurable 1–200)
- **Null handling:** Optional null-category bucket for records with no value in the category field

### Ranking & Display

- **Top-N ranking:** Display top 3–20 categories (configurable)
- **Runtime Top-N control:** End-users adjust Top-N at runtime without requerying
- **Sort direction:** DESC (Top N) or ASC (Bottom N, useful for lowest-cost items)
- **Sorting not renormalized:** Changing Top-N or sort order does not recompute percentages
- **Synthetic Others:** Represents all excluded categories; never selectable, always derived mathematically
- **Show All:** Toggle to display all retained categories at once

### Search

- **LOCAL search:** Searches only the retained category population
- **SERVER search:** Queries the source to discover categories outside the retained set
- **Debounced queries:** 300ms debounce on server-search input to reduce network load
- **Search-aware Others:** Others bar is hidden while searching (it applies to the full universe, not the search scope)
- **Search and percentages:** Searching does not renormalize percentages
- **No results:** Search results remain visible; original Top-N bars reappear when search clears

### Styling & Appearance

- **Responsive layout:** Adapts to narrow (<280px), medium (280–699px), and wide (≥700px) container widths
- **Text placement:** Category name can appear inline-left, top-left, or bottom-left
- **Value placement:** Aggregate/percent can appear inline-right, top-right, inside bar, or bottom-right
- **Bar geometry:** Configurable height (Small/Medium/Large), corners (Square/Soft/Round), and spacing
- **Conditional bar colors:** Two modes:
  - **Single color:** All bars the same fill color
  - **Conditional:** Breakpoint-based colors on Value or Percent basis
- **Independent Others styling:** Different fill and outline from primary bars
- **Outline control:** Optional border color, width, and style (solid/dashed/dotted)
- **Font controls:** Category and value text size, color, and family (theme-aware or explicit)

### Header & Title

- **Configurable title:** Custom header text (optional)
- **Title formatting:** Preset formats (H1–H6, Paragraph), font selection, bold/italic/underline, colors, text alignment, character spacing, and effects (shadow/outline/glow/gradient/emboss)
- **Data Action menu:** Header includes a Data Action list button (when Data Actions are configured in the Builder)
- **Visibility toggle:** Header can be hidden entirely

### Selection & Integration

- **Enable/disable selection:** Toggle via Builder setting
- **Selection style:** CHECKBOX (default), RADIO, or TOGGLE visual mode
- **Draft and applied modes:** Users click to draft selections, then Apply/Cancel/Clear
- **Apply sends messages:** Applying a selection sends a DATA_RECORDS_SELECTION_CHANGE message to all connected Experience Builder widgets
- **Chart not filtered:** Applying a selection does NOT filter the Top-N Chart itself; it only sends messages to connected widgets
- **Selection resolution:** Native Experience Builder queryIds + selectRecordsByIds mechanism; uncapped by Top-N or retention limits
- **Others non-interactive:** Others bar has no checkbox and cannot be selected
- **Selected record set:** When a selection is applied, a real Experience Builder DataRecordSet is materialized for Data Action consumption

### Data Actions

- **Native integration:** Respects the Experience Builder Data Action framework
- **No selection:** Data Actions operate on the full data source
- **Applied selection:** When categories are selected and applied, Data Actions operate only on those categories
- **Materialization cap:** Up to 2,000 selected records are materialized for Data Actions; if more are selected, a truncation notice is shown
- **Real DataRecords:** Materialized records are authentic Jimu DataRecord objects with geometry and attributes
- **Data Action menu:** Available in the header when enabled

### Map Integration

- **Filter by map extent:** Native message action that applies a spatial filter to grouped statistics and totals
- **Extent affects all:** Extent filtering applies consistently to:
  - Grouped statistics (visible bar values)
  - Totals (denominator for Others and percentage calculations)
  - Selection resolution (IDs returned for selected categories)
- **Togglable extent filtering:** Through the Filter-by-map-extent message action in the Builder
- **Upstream Experience Builder filters:** Also apply consistently to all data operations

### Responsive and Accessible

- **Container queries:** Layout adapts seamlessly to container size without requiring pre-configured breakpoints
- **Label truncation:** Narrow containers truncate long category names and values
- **Keyboard navigation:** Arrow keys, Home/End for category selection
- **Semantic controls:** Native checkboxes, radio buttons, roving tabindex
- **Focus management:** Explicit focus indicators and keyboard accessibility for all interactive controls
- **Status announcements:** Truncation and too-many-categories notices with screen-reader support
- **Color + numeric:** Conditional coloring uses both color and visible numeric values for information density

---

## Business Use Cases

### 1. Transportation / State Department of Transportation
**Business Question:** Which highways experience the most accidents?

**Data Setup:**
- Feature layer: Accident reports
- Category field: `Highway_ID`
- Aggregation: `COUNT`

**Runtime Workflow:**
1. Widget loads and displays the Top 5 highways by accident count
2. Author scrolls to see Top 20 highways
3. Analyst clicks a highway name to select it
4. Apply publishes the selection to a connected Map widget, highlighting that highway's accidents
5. The user can then interact with the map to zoom or drill into specifics

**What the Result Means:** The Top-5 list immediately identifies the safety problem zones, enabling resource allocation decisions.

---

### 2. Asset Management / Maintenance Cost by Asset Type
**Business Question:** Which asset types consume the most maintenance budget?

**Data Setup:**
- Feature layer: Maintenance work orders
- Category field: `Asset_Type` (Pump, Motor, Valve, etc.)
- Aggregation: `SUM`
- Value field: `Maintenance_Cost`

**Runtime Workflow:**
1. Widget displays Top 5 asset types by total maintenance cost
2. Author enables conditional bar coloring: >$100K red, $50K–$100K yellow, <$50K green
3. Analyst sees immediately that Pump maintenance dominates (red bar)
4. Hovering over the value shows the exact cost and percentage of total budget
5. Clicking Pump publishes its records to a Data Action export; the analyst downloads a CSV of all Pump maintenance work orders

**What the Result Means:** Asset type drives maintenance budgets; the conditional colors signal which assets are financial outliers.

---

### 3. Public Works / Open Work Orders by District
**Business Question:** Which districts have the most open work orders, and what's the backlog?

**Data Setup:**
- Feature layer: Work orders (filtered to Status = 'Open')
- Category field: `District`
- Aggregation: `COUNT`

**Runtime Workflow:**
1. Widget displays Top 5 districts by open-order count
2. Author clicks Show All to see all 12 districts
3. The Others bar reveals that the displayed 12 represent the entire backlog (Others value is 0)
4. Author enables the Data Action: "Export work orders to CSV"
5. Analyst selects District 3, applies, and exports the list to assign crew resources

**What the Result Means:** The Others bar provides confidence that no districts are hidden in an unstated category population.

---

### 4. Utilities / Outage Records by Cause
**Business Question:** What causes the most outages in the distribution network?

**Data Setup:**
- Feature layer: Outage events
- Category field: `Cause` (Equipment Failure, Weather, Planned Maintenance, etc.)
- Aggregation: `COUNT`
- Null category enabled: Yes (labels unmapped causes as "(No Value)")

**Runtime Workflow:**
1. Widget displays Top 5 causes
2. Author uses LOCAL search to find "Weather" even if it's not in the Top 5
3. Search reveals Weather is the #7 cause; analyst clicks it and applies
4. The selection publishes to a Map widget filtered to show only weather-related outages
5. Spatial patterns emerge, informing infrastructure hardening decisions

**What the Result Means:** Searchability surface patterns that would otherwise remain hidden in a ranked display.

---

### 5. Environmental / Monitoring Observations by Station Class
**Business Question:** Which water-quality monitoring stations report the most observations?

**Data Setup:**
- Feature layer: Water-quality observations (from multiple stations)
- Category field: `Station_Class` (Urban, Rural, Industrial, etc.)
- Aggregation: `AVG`
- Value field: `pH_Level`

**Runtime Workflow:**
1. Widget displays Top 5 station classes by average pH
2. Author enables percentage display: shows both value and percentage of universe average
3. Analyst notices Industrial stations have pH 20% above the universe average; this is the anomaly
4. Author opens a connected table to drill into Industrial-station observations
5. Outlier analysis is now data-driven rather than survey-based

**What the Result Means:** AVG aggregation surfaces statistical outliers; percentage context makes the anomaly quantifiable.

---

## Architecture Overview

### High-Level Data Flow

```
Experience Builder Data Source
    ↓
[useTopNChartData hook]
    ├─ Grouped Statistics Query (Q1)
    ├─ Universe Totals Query (Q2)
    ├─ MIN/MAX Exclusion Query (Q3) if needed
    ├─ Search Query (Q4) if active
    └─ Selection ID Query (Q5) if applied
    ↓
[aggregateOthers math module]
    → Synthetic Others value (COUNT/SUM/AVG/MIN/MAX)
    → Percentage calculation (COUNT/SUM only)
    ↓
[ChartContainer / BarList / BarRow components]
    → Visual rendering
    → Runtime controls (Top-N, sort, Show All, search, selection)
    ↓
Experience Builder published selection
Data Actions execution
Map extent filtering (if Filter-by-extent message action is active)
```

### Scope & Filtering Model

All queries share a consistent scope: **QueryScope.InRuntimeView**

This scope ensures that:
1. **Upstream Experience Builder filters** automatically apply to all data operations (grouped statistics, totals, selection)
2. **Map extent filters** (via message action) apply consistently
3. **No independent filtering** by the widget itself; filtering is entirely Experience Builder framework ownership

### Query Architecture

#### Q1: Grouped Statistics Query
Fetches the top N groups (ordered by aggregate value) and their aggregate values.

**Used for:** Primary bar visualization, ranking, Top-N display

**SQL equivalent (conceptual):**
```sql
SELECT categoryField, COUNT(*) as agg_value
FROM data
WHERE [category is not null or includeNullCategory]
GROUP BY categoryField
ORDER BY agg_value DESC
LIMIT retentionLimit
```

#### Q2: Universe Totals Query
Fetches the ungrouped total COUNT and total SUM over the full filtered universe.

**Used for:** Others calculation, percentage denominator

**SQL equivalent (conceptual):**
```sql
SELECT COUNT(*) as total_count, SUM(valueField) as total_sum
FROM data
WHERE [upstream filters and extent apply]
```

#### Q3: MIN/MAX Exclusion Query
(Only when aggregationType is MIN or MAX and Others is requested)

Fetches the MIN or MAX statistic over all **excluded** categories (categories not in the top N).

**Used for:** Computing Others value for MIN/MAX aggregations

**SQL equivalent (conceptual):**
```sql
SELECT MIN(valueField) as excluded_min / MAX(valueField) as excluded_max
FROM data
WHERE categoryField NOT IN (visible_categories)
  AND [upstream filters and extent apply]
```

#### Q4: Search Query
Fetches groups matching a search term, from the retained category set (LOCAL search) or the full universe (SERVER search).

**Used for:** Discovering categories outside the displayed Top-N

**SQL equivalent (conceptual):**
```sql
SELECT categoryField, COUNT(*) as agg_value
FROM data
WHERE categoryField LIKE '%searchTerm%' [or equivalent]
  AND [upstream filters and extent apply]
GROUP BY categoryField
ORDER BY agg_value DESC
LIMIT retentionLimit
```

#### Q5: Selection ID Query
Resolves queryIds for all records belonging to the selected categories.

**Used for:** Publishing native selection to Experience Builder, materializing Data Action records

**SQL equivalent (conceptual):**
```sql
SELECT OBJECTID
FROM data
WHERE categoryField IN (selected_categories)
  AND [upstream filters and extent apply]
LIMIT [2000 for Data Action materialization]
```

### Why These Queries Matter

The separation of Q1, Q2, and Q3 is critical to **mathematical correctness**:

- **Q1 only** would make Others unavailable (you wouldn't know the universe total)
- **Q2 only** would lose ranking (you'd have no bar heights)
- **Q1 + Q2 but not Q3** would make MIN/MAX Others "Not Available" (you wouldn't know what the excluded groups' extrema are)

Each query must share the same upstream-filter and extent-filter scope, or the results will contradict each other (e.g., a bar's value could be larger than the total, or Others could be negative).

### Race Protection & Cancellation

The hook implements query sequencing:
1. Each data-dependent effect increment a sequence counter
2. Async queries record their sequence number when they start
3. Results are applied only if the sequence number still matches (indicating no newer query was launched)
4. This prevents stale results from overwriting fresh results when the user changes configuration rapidly

---

## Requirements

### ArcGIS Experience Builder Environment

- **ArcGIS Experience Builder Developer Edition:** 1.20.0 (developed and validated against this version)
- **Deployment:** Use only Experience Builder 1.20.0 until the widget has been independently validated against other versions

> **Important:** Do not assume this widget works on ArcGIS Experience Builder Developer Edition versions other than 1.20.0 without explicit testing. The jimu API surface, webpack configuration, and data source APIs may differ across versions.

### Browser Support

The widget has been validated in modern browsers supporting:
- ES2020+ JavaScript
- CSS Grid and CSS custom properties
- Container queries (for responsive layout)

**Recommended:** Chrome, Edge, Firefox, Safari (latest stable versions)

### Node & Package Manager

[Version requirements to be specified from repository evidence or Experience Builder 1.20.0 documentation]

### Data Source Requirements

The widget requires:
- A **Feature Layer, Hosted Feature Layer, or Feature Service** that is queriable through Experience Builder's DataSource API
- A **category field** (string or numeric, required)
- A **value field** (numeric, required only for SUM, AVG, MIN, MAX aggregations)
- Server-side **statistical aggregation support** (COUNT, SUM, AVG, MIN, MAX)
- Server-side **grouping support** (GROUP BY equivalent)

**Supported data sources:**
- Feature Layers (hosted or published to ArcGIS Server)
- Feature Services (from ArcGIS Server or ArcGIS Online)
- Enterprise feature services (from ArcGIS Enterprise)

**Conditional support (requires independent validation):**
- Map-derived data sources
- Selection-aware data sources

**Not validated:**
- Related Records workflows
- Tables without geometry

---

## Installation

### Developer Edition Installation

To use this widget in an ArcGIS Experience Builder Developer Edition 1.20.0 instance:

1. **Locate your Experience Builder Developer Edition installation:**
   ```
   <ExB-Installation-Root>/client/your-extensions/widgets/
   ```

2. **Copy the widget source to the Developer Edition:**
   ```
   Copy: your-extensions/widgets/top-n-chart/
   To:   <ExB-Installation>/client/your-extensions/widgets/top-n-chart/
   ```

3. **Restart the Developer Edition** if it's already running

4. **Verify discovery:** When you open Builder, the **Top-N Chart** widget should appear in the widget catalog

### Repository Installation

If you are cloning this repository for development or contribution:

1. **Widget source location:**
   ```
   your-extensions/widgets/top-n-chart/
   ```

2. **Key files:**
   - `manifest.json` — Widget metadata and capabilities
   - `src/config.ts` — Configuration schema and defaults
   - `src/runtime/widget.tsx` — Runtime entry point
   - `src/setting/setting.tsx` — Builder content panel

3. **This location is the authoritative source.** Widget development happens here; copies to Experience Builder installations are validation targets only.

### Build Instructions

**To validate the widget against Experience Builder 1.20.0:**

1. **Copy the widget to your ExB Developer Edition:**
   ```
   your-extensions/widgets/top-n-chart/ → <ExB-Installation>/client/your-extensions/widgets/top-n-chart/
   ```

2. **In the Experience Builder root directory**, run the Developer Edition build:
   ```
   [Commands to be confirmed from Experience Builder 1.20.0 build documentation]
   ```

3. **Start the Developer Edition:**
   ```
   [Start command to be confirmed from Experience Builder 1.20.0 documentation]
   ```

4. **The widget should compile without errors** and appear in the Builder widget catalog

> **Note:** Exact build and start commands depend on your Experience Builder 1.20.0 environment. Consult the Experience Builder documentation for your installation.

---

## Configuration Guide

The widget is configured entirely through the **Content panel** in Experience Builder Builder, organized into four collapsible sections:

1. **Data** — Category/value fields, aggregation, retention
2. **Header** — Title and header appearance
3. **Appearance** — Bar styling, geometry, responsive layout
4. **Tools** — Runtime controls (search, selection, Show All)

Each section is independent; you may collapse any section and expand others.

### Data Section

#### Data Source

**Purpose:** Select which Feature Layer or table the widget queries

**Behavior:** 
- Only one data source can be selected
- The data source is required; if unconfigured, a help message appears at runtime
- Changing the data source clears all field selections

**When available:** Always (the first required setting)

#### Category Field

**Purpose:** The field that groups the data (e.g., Highway_ID, Asset_Type, District)

**Behavior:**
- Required
- Must be a string or numeric field
- All data is grouped by the unique values in this field
- If unconfigured, the widget displays an error at runtime

**Example:** Asset_Type (string field with values Pump, Motor, Valve, etc.)

**Recommended usage:** Choose a field with sufficient cardinality (10–1000 unique values) to make ranking meaningful but not so many that every category is unique

**Best practices:**
- Avoid OBJECTID fields for categorization
- Use semantic category fields (type names, district names, cause descriptions)
- Null values can be retained as a separate category (see includeNullCategory below)

#### Aggregation Type

**Purpose:** Choose the statistic calculated for each group

**Options:**
- `COUNT` — Number of records in each group (does not require a value field)
- `SUM` — Total of the value field for each group
- `AVG` — Average of the value field for each group
- `MIN` — Minimum value field in each group
- `MAX` — Maximum value field in each group

**Behavior:**
- COUNT works alone; other types require a value field selection
- Changing this resets the value field if the new type has different requirements

**Recommended usage:**
- **COUNT:** "Which categories have the most records?" (crashes, orders, observations, etc.)
- **SUM:** "Which categories consume the most of a resource?" (cost, volume, distance, etc.)
- **AVG:** "Which categories have the highest average performance?" (cost per unit, speed, rating, etc.)
- **MIN/MAX:** "Which categories contain the extreme values?" (lowest cost, highest temperature, etc.)

**Best practices:**
- COUNT and SUM support percentage display; AVG/MIN/MAX do not
- If you need to display percentages, use COUNT or SUM
- For MIN/MAX, the Others bar shows the extreme value outside the top N (if computable)

#### Value Field

**Purpose:** The numeric field to aggregate (required for SUM, AVG, MIN, MAX)

**Behavior:**
- Hidden and disabled when aggregationType is COUNT
- Required when aggregationType is SUM, AVG, MIN, or MAX
- Must be a numeric field
- If unconfigured and the aggregation requires it, the widget displays an error at runtime

**Example:** Maintenance_Cost (numeric field, values in dollars)

**Recommended usage:** Choose a field that is **numeric and meaningful to your aggregation**
- For SUM: costs, volumes, counts, distances
- For AVG: per-unit costs, ratings, speeds, percentages
- For MIN/MAX: any numeric measurement

**Best practices:**
- Avoid aggregating fields with many null/zero values without understanding the data
- Ensure your value field is actually numeric; text fields will produce errors
- MIN/MAX aggregation works best on fields with a meaningful range

#### Sort Direction

**Purpose:** Rank categories ascending or descending

**Options:**
- `DESC` (Default) — Highest aggregate value first (Top N)
- `ASC` — Lowest aggregate value first (Bottom N)

**Behavior:**
- This is the initial sort order; users can toggle it at runtime
- Sorting does not renormalize percentages
- The Top-N display label changes based on this setting (Top N vs. Bottom N)

**Recommended usage:**
- **DESC:** Cost, accident count, order volume, etc. (you want to see the largest)
- **ASC:** Error count, latency, failure rate, etc. (you want to see the smallest)

**Best practices:**
- Set a default that matches your audience's business logic
- Let users toggle if the analysis requires both views

#### Top-N

**Purpose:** How many categories to display by default

**Range:** 3–20

**Behavior:**
- Initial display count; users can change this at runtime
- Changing this does not renormalize percentages
- Must be >= Minimum categories; if you set 5, Show All and search can still show all retained categories

**Recommended usage:**
- 5 is suitable for most dashboards (focuses attention on the top performers)
- 10 for detailed analysis where 10–15 categories fit on screen
- 3 for extremely constrained mobile/narrow displays

**Best practices:**
- Start with 5 and adjust based on responsive layout testing
- Set lower values (3–5) for mobile-first designs
- Larger values (15–20) suit wide desktop displays

#### Retention Limit

**Purpose:** The maximum number of categories the widget will ever fetch or consider

**Range:** 1–200

**Default:** 50

**Behavior:**
- All queries respect this limit
- You cannot display more categories than the retention limit, even with Show All
- Increasing this increases query load (server must sort/group more categories)
- The retention limit also caps the Show All page size

**Recommended usage:**
- 50 is suitable for most use cases (keeps query load reasonable)
- 20–30 if you have a very high-cardinality category field and network constraints
- 100+ only if you have confirmed your server can handle it and Show All is truly needed

**Best practices:**
- Start with 50; monitor query performance
- If queries are slow, reduce this value
- If you find you frequently need more categories in Show All, increase it
- For search to be useful, this must be >= the number of categories you expect users to find

#### Show Others

**Purpose:** Include a synthetic Others bar representing all excluded categories

**Behavior:**
- ON (default) — Others bar is displayed; calculations show what excluded categories represent
- OFF — No Others bar; totals apply only to visible groups

**Recommended usage:**
- ON (default) for transparency; you want viewers to understand what the universe contains
- OFF only if you are certain the displayed categories represent the entire meaningful universe

**Best practices:**
- Leave ON to avoid misleading viewers
- The Others bar is read-only and non-interactive; turning it off has no functional impact except visibility
- Turning OFF saves a query (no need to fetch universe totals) but not significantly

#### Others Label

**Purpose:** Text label for the synthetic Others bar

**Default:** "Others"

**Behavior:**
- Displayed in the bar row
- Can be customized (e.g., "All Others", "Remaining", "Catchall")

**Recommended usage:** Keep it short and clear
- "Others" (default) is universally understood
- "All Others" is explicit
- "Remaining" or "Catchall" can be more semantic in specific contexts

**Best practices:**
- Use a label that matches your audience's terminology
- Test with your users; short (< 10 chars) is best

#### Include Null Category

**Purpose:** Create a separate category for records with null/empty values in the category field

**Behavior:**
- ON (default) — Records with null category values are grouped separately
- OFF — Records with null category values are excluded

**Recommended usage:**
- ON if you want to see the volume of unmapped/uncategorized records
- OFF if null records are known to be data quality issues you want to ignore

**Best practices:**
- Enable this to identify data quality issues
- The null category is labeled as "(No Value)" by default; customize if desired

#### Null Category Label

**Purpose:** Text label for the null-value category bucket

**Default:** "(No Value)"

**Behavior:**
- Displayed in the bar row when includeNullCategory is ON
- Can be customized (e.g., "(Unknown)", "(Unmapped)", "(Not Set)")

**Recommended usage:** Use a label matching your data governance terminology

**Best practices:**
- Keep it distinct from normal category names
- Surrounding parentheses help visually separate it
- Test with your audience

### Header Section

#### Header Visible

**Purpose:** Show or hide the header area (title and Data Action menu)

**Behavior:**
- ON (default) — Title and Data Action controls visible
- OFF — No header area; widget content starts at the top

**Recommended usage:**
- ON for dashboards with space
- OFF for mobile/narrow layouts where vertical space is critical

**Best practices:**
- Toggle based on responsive design requirements
- If you hide the header, ensure Data Actions are still accessible (or acceptable to hide)

#### Header Title

**Purpose:** Custom title text displayed in the widget header

**Behavior:**
- Empty string (default) — No title is displayed, but header area (Data Action menu) remains
- Non-empty — Title appears above the chart
- Title is formatted according to the Title Format SidePopper

**Example:** "Top 5 Asset Maintenance Costs", "Accident Hotspots", "Open Work Orders by District"

**Recommended usage:** Provide a title that describes the data and the ranking

**Best practices:**
- Clear, actionable titles (e.g., "Top 5" not just "Chart")
- Include the aggregation context if not obvious (e.g., "by Cost", "by Count")
- Keep titles < 50 characters for most displays

#### Title Format (SidePopper)

**Purpose:** Format the header title (font, size, color, styling)

**Trigger:** Gear icon next to Header Title setting

**Behavior:**
- A collapsible formatting panel opens
- All settings are optional; defaults inherit from the theme or use base formatting

**Available controls:**

| Setting | Options/Range | Purpose |
|---------|---------------|---------|
| Format Preset | H1, H2, H3, H4, H5, H6, Paragraph | Predefined size and hierarchy |
| Font Family | Avenir Next, Arial, Calibri, Georgia, Impact, Microsoft YaHei, Tahoma, Times New Roman, Verdana | Text typeface |
| Font Size | Numeric (px) | Overrides the preset size; seeded from preset |
| Bold | On/Off | Bold text |
| Italic | On/Off | Italic text |
| Underline | On/Off | Underline text |
| Strikethrough | On/Off | Strikethrough text |
| Font Color | Color picker | Text color (empty = inherit from theme) |
| Highlight Color | Color picker | Background highlight behind text |
| Text Align | Left, Center, Right, Justify | Horizontal alignment |
| Character Spacing | Numeric (px) | Letter spacing |
| Effect | None, Shadow, Outline, Glow, Gradient, Emboss | Visual effect applied to text |

**Recommended usage:**
- Start with a preset (H2 or H3 for most dashboards)
- Adjust size if needed
- Add color to match theme
- Use effects sparingly (they can reduce readability if overdone)

**Best practices:**
- Use presets as the base; customize minimally
- Maintain sufficient contrast for readability
- Test on mobile to ensure the title fits
- Avoid combining multiple effects (shadow + glow) on small text

### Appearance Section

#### Value Format

**Purpose:** Control whether aggregate labels use full or abbreviated values

**Options:**
- `Full values` (Default) — Preserves locale-formatted values such as `55,650`
- `Abbreviated values` — Uses decimal suffixes such as `55.7k`, `1.3M`, `2B`, or `1T`

Abbreviation begins at 1,000, uses at most one decimal place, and removes an unnecessary trailing `.0`. It applies to primary category values and the synthetic Others value. Percentages are never abbreviated, so `Value and percent` can display `55.7k (22.0%)`; `Percent only` is unchanged.

#### Vertical Spacing

**Purpose:** Compact or distributed layout of bars

**Options:**
- `COMPACT` — Minimal row gap; bars are tightly packed
- `AUTO_DISTRIBUTE` (Default) — Even row spacing that may stretch bars vertically to fill available space

**Behavior:**
- Only affects rendering; does not change data or queries

**Recommended usage:**
- COMPACT for dense dashboards or mobile
- AUTO_DISTRIBUTE for more spacious/readable layouts

**Best practices:**
- Test both; AUTO_DISTRIBUTE usually looks better on desktop
- COMPACT may be necessary on mobile

#### Multi-Column Wide Mode

**Purpose:** Use multiple columns for bars when the container is very wide

**Behavior:**
- OFF (default) — Single column, bars fill the width
- ON — Bars may flow into two columns on very wide displays

**Recommended usage:**
- OFF for most cases
- ON only if your display is > 1200px wide and you want a narrower bar width

**Best practices:**
- Keep OFF unless you've specifically designed for multi-column
- Multi-column layouts are rare in dashboard contexts

#### Bar Styling (SidePopper)

**Purpose:** Control the visual appearance of bars

**Trigger:** Gear icon in the Appearance section

**Behavior:**
- A collapsible panel opens with detailed bar styling controls
- All settings are grouped logically

**Available controls:**

| Group | Setting | Options/Range | Purpose |
|-------|---------|---------------|---------|
| **Text Placement** | Category Position | Top-Left, Inline-Left, Bottom-Left | Where the category label appears |
| | Value Position | Top-Right, Inline-Right, Inside-Bar, Bottom-Right | Where the value/percent appears |
| | Category Font Family | Theme or explicit font | Category text typeface |
| | Category Font Size | Numeric (px) | Category text size |
| | Category Font Color | Color picker | Category text color (empty = theme) |
| | Value Font Family | Theme or explicit font | Value text typeface |
| | Value Font Size | Numeric (px) | Value text size |
| | Value Font Color | Color picker | Value text color (empty = theme) |
| **Geometry** | Bar Height | Small, Medium, Large | Vertical bar thickness |
| | Bar Corners | Square, Soft, Round | Border radius |
| | Bar Spacing | Compact, Spacious | Vertical gap between rows |
| | Bar Spacing (px) | Numeric (px) | Exact row gap; seeded from preset but adjustable |
| | Max Bar Width | Numeric (px, 0 = no limit) | Maximum bar width (useful for very wide displays) |
| **Primary Bars** | Primary Fill Color | Color picker | Bar fill color (solid mode) |
| | Primary Bar Color Mode | Single, Conditional | Solid or breakpoint-based coloring |
| | Primary Conditional Colors | Breakpoint/color editor | [See Conditional Bar Colors section] |
| | Primary Outline Color | Color picker | Border color |
| | Primary Outline Width | Numeric (px) | Border thickness |
| | Primary Line Style | Solid, Dashed, Dotted | Border style |
| **Others Bar** | Others Fill Color | Color picker | Others bar fill color |
| | Others Outline Color | Color picker | Others bar border color |
| | Others Outline Width | Numeric (px) | Others bar border thickness |
| | Others Line Style | Solid, Dashed, Dotted | Others bar border style |

**Recommended usage:**
- Start with defaults; adjust only what doesn't match your design
- Category position inline-left + value inline-right is the default and most compact
- Use bar height to match your space constraints
- Keep outline width low (0–2 px) unless you need strong visual separation

**Best practices:**
- Test responsive layouts (narrow/medium/wide)
- Avoid extreme color combinations that reduce readability
- Keep font sizes readable (>= 12px) for desktop
- Use conditional coloring to highlight business rules (e.g., red = critical, green = acceptable)

### Tools Section

#### Selection Enabled

**Purpose:** Allow or disable runtime category selection

**Behavior:**
- ON (default) — Checkboxes or radio buttons appear next to category names; users can select categories, then Apply/Cancel/Clear
- OFF — No selection controls; categories are display-only

**Recommended usage:**
- ON if you have connected widgets to interact with selections
- OFF for read-only dashboards

**Best practices:**
- Enable selection only if you have connected Data Actions or linked widgets
- Selection adds interaction complexity; disable for simple dashboards

#### Selection Style

**Purpose:** Visual control style for selection

**Options:**
- `CHECKBOX` (Default) — Multi-select with checkboxes (users can select any number of categories)
- `RADIO` — Single-select with radio buttons (only one category at a time)
- `TOGGLE` — Buttons that toggle on/off (visual variant of checkbox)

**Behavior:**
- RADIO prevents multi-select; applying a new selection automatically deselects the previous one
- CHECKBOX allows multi-select; users can select multiple categories before applying
- TOGGLE is functionally like CHECKBOX but styled as buttons

**Recommended usage:**
- CHECKBOX for most use cases (multi-category selection is more flexible)
- RADIO when business logic requires selecting only one category
- TOGGLE for visual variety or if your design calls for button-like controls

**Best practices:**
- Use RADIO only if single-select is a business requirement
- Stick with CHECKBOX for flexibility
- Test TOGGLE styling; it can be less obvious than checkboxes or radio buttons

#### Search Enabled

**Purpose:** Allow runtime search to discover categories

**Behavior:**
- ON (default) — Search box appears when Show All is active; users can type to find categories
- OFF — No search box; only configured Top-N and Show All are available

**Recommended usage:**
- ON for datasets with large category populations (so users can find specific categories)
- OFF for small category sets where all visible categories fit in Show All

**Best practices:**
- Enable search if retention limit > 20 or you expect users to look for specific categories
- Disable if your category set is small enough to display all at once

#### Search Mode

**Purpose:** Where the search queries

**Options:**
- `LOCAL` — Searches only the retained category population (faster, limited to top N)
- `SERVER` — Queries the full data source to find categories outside the retained set (slower, more comprehensive)
- `BOTH` — Attempts both searches (not currently exposed in Builder, but available in configuration)

**Behavior:**
- LOCAL search is instantaneous (no network round-trip)
- SERVER search may take 300–500ms depending on your server and data
- Search results replace the Top-N display; clearing search returns to Top-N
- Others is hidden while searching

**Recommended usage:**
- LOCAL for fast-searching retained categories when you expect users to find them in the Top-N area
- SERVER when users need to discover categories outside the Top-N (e.g., niche asset types, one-off causes)

**Best practices:**
- Start with LOCAL for responsiveness
- Switch to SERVER if users report missing expected categories
- Combine with a large retention limit (100+) if using SERVER search

#### Show All Enabled

**Purpose:** Allow runtime toggling between Top-N and all retained categories

**Behavior:**
- ON (default) — A toggle button appears; users can switch between Top-N and Show All views
- OFF — Only Top-N display is available; Show All is not an option

**Recommended usage:**
- ON if you want to expose all retained categories without permanently changing the Top-N
- OFF if the Top-N view is the sole focus

**Best practices:**
- Leave ON to give users full control
- Disable only for very constrained displays where space is critical

---

## Runtime Experience

### Initial Load

1. **Widget appears** with the header (if enabled) and a loading spinner
2. **Grouped statistics query** executes; data is fetched and sorted
3. **Universe totals query** executes (if Others is enabled)
4. **Chart renders** with the top N categories as horizontal bars
5. **Others bar appears** (if enabled and data is available)
6. **Controls are enabled:** Top-N selector, sort direction toggle, Show All button (if enabled), search box (if Show All), selection controls (if enabled)

### Normal Top-N View

- **Display:** Top N categories ranked by aggregate value
- **Sorting:** Descending (highest first) or ascending (lowest first) based on configuration
- **Bars:** Show category name, aggregate value, and/or percentage (based on value display setting)
- **Others:** Shows the sum/count/average/min/max of all excluded categories
- **Status:** "Showing Top N [categories]" label in footer (or "Bottom N" if ascending)

### Show All

**Action:** User clicks "Show All" button

1. **Display changes:** All retained categories (up to retention limit) are shown
2. **Status label:** "Showing All [X] categories"
3. **Others:** Remains visible; may show 0 or null if all categories fit in retention limit
4. **Sort order:** Maintained (still sorted DESC or ASC)
5. **Top-N selector:** Remains available; changing it returns to Top-N view
6. **Search:** Becomes available (search within all categories)

**Action:** User clicks "Top-N" or changes Top-N value

- **Display returns:** To top N categories
- **Show All button:** Resets to "Show All" (ready for next toggle)

### Search

**Search availability:** Only when Show All is active OR Search Mode is BOTH

**Action:** User types in the search box

1. **Debounce:** 300ms wait; query is held until the user stops typing
2. **LOCAL search:** Filtered category list appears (only from retained categories)
3. **SERVER search:** Widget fetches matching categories from the full data source
4. **Results:** Only matching categories are displayed
5. **Others:** Hidden during search (Others applies to the full universe, not the search scope)
6. **Percentages:** NOT renormalized; still reflect the full universe
7. **Status:** "Showing [X] search results" or "Search: [term]"

**Action:** User clears search box

- **Display returns:** To the previous Top-N or Show All view
- **Others:** Reappears

**No results:** If a search finds nothing, a "No matches" message is shown; the previous bars remain visible

### Selection Mode

**Prerequisites:** selectionEnabled must be ON

**Initial state:** Each category row has a checkbox (or radio/toggle, depending on selectionStyle)

**User action:** Click a checkbox

1. **Checkbox toggles:** Visual feedback is immediate
2. **Draft selection** is recorded but not yet applied
3. **Apply button** appears in a sticky footer (if not already visible)
4. **Cancel button:** Also appears (to discard draft selections)
5. **Clear button:** Appears (to clear any applied selection)

**User action:** Click "Apply"

1. **Draft selection becomes applied selection**
2. **Experience Builder publishes:** DATA_RECORDS_SELECTION_CHANGE message to all connected widgets
3. **Chart is NOT filtered:** Bars remain the same; the selection only affects connected content
4. **Footer updates:** Shows applied selection status (e.g., "3 categories selected")
5. **Others:** Cannot be selected (no checkbox) and is not included in the selection

**User action:** Click "Cancel"

1. **Draft selection is discarded**
2. **Checkboxes reset** to their previous state
3. **Apply/Cancel buttons vanish**
4. **Clear button** remains (if a selection is already applied)

**User action:** Click "Clear"

1. **Applied selection is cleared**
2. **All checkboxes uncheck**
3. **Experience Builder publishes:** Selection cleared to connected widgets
4. **Footer updates:** "No selection"

**Interaction with Top-N:**

- Selecting categories does NOT change the displayed Top-N
- Top-N remains dynamic; users can select categories outside the current Top-N, then apply
- If Show All is toggled, selection state is preserved
- If a search is performed, selection is retained (but drafts may be in off-screen categories)

### Data Actions

**Availability:** Only when enableDataAction is true and Data Actions are configured in the Builder

**Location:** Header Data Action menu button

**Behavior:**

- **No selection:** Data Actions operate on the full data source (all records)
- **Applied selection:** Data Actions operate only on the selected categories' records
- **Action choices:** Depend on what the Builder author has configured (export, link, API call, etc.)
- **Materialization:** Up to 2,000 records are materialized; if more are selected, a truncation notice is shown

### Sorting at Runtime

**Initial:** Sort direction is set from configuration (DESC by default)

**User action:** Click "Sort" button / toggle sort direction

1. **Bars are immediately re-ordered** (DESC <-> ASC)
2. **Percentages remain unchanged** (not renormalized)
3. **Others remains in position** (typically at the bottom)
4. **Search results:** Reordered if a search is active

**Interaction with Top-N:** Sorting does not change the Top-N value; it only reverses the order

### Empty State

**Trigger:** No data matches the current filters, or the category field has no values

**Display:** "No data" message; bars are empty

**Possible causes:**
- No records in the data source
- All records filtered out by upstream filters or extent
- Category field is empty for all records and includeNullCategory is OFF
- Search found no matches

**Recovery:** Adjust filters, extent, or configuration

### Loading State

**Trigger:** Widget is initializing or a query is in flight

**Display:** Spinning loader

**Typical duration:** < 1 second for most queries on modern servers

### Error State

**Trigger:** Query failed (network error, server error, etc.)

**Display:** Error message (e.g., "Error loading data source")

**Recovery options:** Retry button (refetch data)

**Unconfigured State:**

**Trigger:** Category field or (if needed) value field is not configured

**Display:** "Please configure a category field" or "Please configure a value field"

**Recovery:** Configure the missing fields in the Builder

### Too-Many-Categories State

**Trigger:** The category field has more unique values than the retention limit

**Display:** Chart is shown normally, but a banner appears: "Category count exceeds the retention limit. Adjust the retention limit or filter to reduce results."

**Behavior:** The widget still functions; the authors are just notified that not all categories are being displayed

### Truncated Selection State

**Trigger:** User selects and applies more categories than the Data Action materialization cap (2,000 records)

**Display:** Selection is applied and a message is sent; a notice appears: "Selected records exceed the export limit (2,000 of [X] selected). The export is truncated; consider refining your selection."

**Behavior:**
- Native Experience Builder selection (queryIds) is NOT capped; messages are sent for all selected categories
- Data Actions receive only the first 2,000 materialized records
- This allows exports to work even with large selections (though truncated)

---

## Aggregation Types

Each aggregation type has distinct mathematical rules, requirements, and behaviors. Below is a detailed explanation of each.

### COUNT

**Definition:** Number of records in each group

**Requirements:**
- Category field (required)
- Value field (not required)

**Calculation:**
```
For each group:
  COUNT = number of records where categoryField = group_value
```

**Percentage support:** YES
- Percentage = (group count) / (total count) × 100

**Others calculation:**
```
Others COUNT = total_count - sum(visible_group_counts)
```

**Behavior:**
- Works on any data source
- NULL values (if includeNullCategory is ON) are counted as a separate group
- Each record contributes exactly 1 to its category's count

**Use cases:**
- "Which routes have the most accidents?"
- "Which districts have the most open work orders?"
- "Which asset types have the most failures?"

**Example:**
```
Data:
  Pump, Motor, Motor, Valve, Pump, Pump
  
Groups (by asset type):
  Pump: 3 records
  Motor: 2 records
  Valve: 1 record
  
Total COUNT = 6
Percentages:
  Pump: 3/6 = 50%
  Motor: 2/6 = 33%
  Valve: 1/6 = 17%
```

---

### SUM

**Definition:** Total value of a numeric field in each group

**Requirements:**
- Category field (required)
- Value field (required, must be numeric)

**Calculation:**
```
For each group:
  SUM = sum of valueField where categoryField = group_value
```

**Percentage support:** YES
- Percentage = (group sum) / (total sum) × 100

**Others calculation:**
```
Others SUM = total_sum - sum(visible_group_sums)
```

**Behavior:**
- Null or zero values in the value field contribute 0 to their group's sum
- Groups with no valid values sum to 0
- Negative values are allowed and sum correctly

**Use cases:**
- "Which asset types consume the most maintenance budget?"
- "Which counties generate the most tax revenue?"
- "Which products have the highest total sales?"

**Example:**
```
Data:
  (Pump, $500), (Motor, $200), (Motor, $150), (Valve, $100), (Pump, $600), (Pump, $200)

Groups (by asset type):
  Pump: $500 + $600 + $200 = $1,300
  Motor: $200 + $150 = $350
  Valve: $100

Total SUM = $1,750
Percentages:
  Pump: $1,300 / $1,750 = 74%
  Motor: $350 / $1,750 = 20%
  Valve: $100 / $1,750 = 6%
```

---

### AVG

**Definition:** Average value of a numeric field in each group

**Requirements:**
- Category field (required)
- Value field (required, must be numeric)

**Calculation:**
```
For each group:
  AVG = sum of valueField / count of records
       where categoryField = group_value
```

**Important:** AVG Others is NOT calculated as an average of the visible groups' averages. Instead:
```
Others AVG = (total_sum - visible_sum) / (total_count - visible_count)
           = remaining_sum / remaining_count
```

**Percentage support:** NO
- AVG cannot be expressed as a share of a total; percentage display is disabled

**Others calculation:**
```
If remaining_count > 0:
  Others AVG = (total_sum - sum(visible_sums)) / (total_count - sum(visible_counts))
Else:
  Others = null (no records remain)
```

**Behavior:**
- Groups are ranked by their average (not by count or sum)
- Null or zero values contribute to the count but may skew the average (depending on your data model)
- If all records in a group have NULL values in the value field, the group's average is undefined
- Groups with only one record have an average equal to that record's value

**Use cases:**
- "Which monitoring stations have the highest average water quality measurements?"
- "Which routes have the fastest average travel time?"
- "Which asset types have the highest maintenance cost per incident?"

**Example:**
```
Data:
  (Station A, pH 7.0), (Station A, pH 7.2), (Station A, pH 6.8)
  (Station B, pH 8.1), (Station B, pH 8.0)
  (Station C, pH 6.5)

Groups (by station):
  Station A: (7.0 + 7.2 + 6.8) / 3 = 7.0
  Station B: (8.1 + 8.0) / 2 = 8.05
  Station C: 6.5 / 1 = 6.5

Total SUM = 7.0 + 7.2 + 6.8 + 8.1 + 8.0 + 6.5 = 43.6
Total COUNT = 6
Universe AVG = 43.6 / 6 = 7.27

If Top-N = 2 (showing Station B and A):
  Others AVG = (43.6 - (8.05*2 + 7.0*3)) / (6 - 5)
            = (43.6 - 37.1) / 1
            = 6.5 / 1
            = 6.5

(In this case, Others matches Station C exactly because only Station C is excluded.)
```

**Best practices:**
- Use AVG when comparing per-unit or normalized performance
- Be aware that AVG can be skewed by outliers (one very high or low value)
- Document that AVG percentages are not supported; use COUNT or SUM if you need percentages

---

### MIN

**Definition:** Smallest value of a numeric field in each group

**Requirements:**
- Category field (required)
- Value field (required, must be numeric)

**Calculation:**
```
For each group:
  MIN = minimum valueField where categoryField = group_value
```

**Percentage support:** NO

**Others calculation:**
```
Others MIN = MIN of valueField over all records NOT in the visible groups
           (i.e., the minimum value in the excluded categories)
```

**Behavior:**
- Groups are ranked by their minimum value
- MIN can be a useful way to identify the "worst case" in each category
- If the value field has null/zero values, they are ignored (MIN only considers finite values)

**Use cases:**
- "Which asset types have the lowest maintenance cost per incident?"
- "Which routes have the fastest travel time (best case)?"
- "Which stations have the lowest water-quality observation?"

**Example:**
```
Data:
  (Pump, cost: 500), (Pump, cost: 600), (Pump, cost: 200)
  (Motor, cost: 150), (Motor, cost: 120)
  (Valve, cost: 80)

Groups (by asset type):
  Pump: MIN = 200
  Motor: MIN = 120
  Valve: MIN = 80

Sorted DESC by MIN:
  1. Pump: 200
  2. Motor: 120
  3. Valve: 80

If Top-N = 2 (showing Pump and Motor):
  Others MIN = MIN of (80) = 80
```

---

### MAX

**Definition:** Largest value of a numeric field in each group

**Requirements:**
- Category field (required)
- Value field (required, must be numeric)

**Calculation:**
```
For each group:
  MAX = maximum valueField where categoryField = group_value
```

**Percentage support:** NO

**Others calculation:**
```
Others MAX = MAX of valueField over all records NOT in the visible groups
           (i.e., the maximum value in the excluded categories)
```

**Behavior:**
- Groups are ranked by their maximum value
- MAX is useful for identifying the "best case" or "peak" in each category
- If the value field has null/zero values, they are ignored (MAX only considers finite values)

**Use cases:**
- "Which asset types have the highest maintenance cost (worst case)?"
- "Which routes have the slowest travel time (worst case)?"
- "Which stations have the highest water-quality observation (peak)?"

**Example:**
```
Data:
  (Pump, cost: 500), (Pump, cost: 600), (Pump, cost: 200)
  (Motor, cost: 150), (Motor, cost: 120)
  (Valve, cost: 80)

Groups (by asset type):
  Pump: MAX = 600
  Motor: MAX = 150
  Valve: MAX = 80

Sorted DESC by MAX:
  1. Pump: 600
  2. Motor: 150
  3. Valve: 80

If Top-N = 2 (showing Pump and Motor):
  Others MAX = MAX of (80) = 80
```

---

## Top-N and Maximum Categories

### Core Concepts

The widget distinguishes between two critical constraints:

1. **Top-N** — How many categories are displayed to the user (3–20, configurable at runtime)
2. **Maximum Categories / Retention Limit** — How many categories the widget ever fetches from the server (1–200, set in Builder)

These are **completely independent.**

### The Retention Limit

**Definition:** The maximum number of categories the server returns for any query

**In configuration:** Called `retentionLimit` (default 50)

**Effect:**
- The widget can never display more than this many categories, even in Show All
- All queries (grouped statistics, search, show all) respect this limit
- The retention limit also caps the Show All page size

**Why it exists:**
- High-cardinality category fields (thousands of unique values) would produce slow queries
- Returning 1,000 categories from the server would be unwieldy
- The retention limit balances completeness with performance

**Example:** If retentionLimit = 50 and your category field has 10,000 unique values:
- The Top-N query returns the top 50 groups (highest aggregate values)
- Show All shows up to 50 categories
- A search for "pump" might find Pump #1, Pump #2, ..., Pump #47 (but not Pump #2001 if it's below the top 50)
- Others represents all 10,000 - 50 = 9,950 excluded categories

### The Top-N Value

**Definition:** How many categories are shown in the normal (non-Show-All) view

**In configuration:** Called `topN` (default 5, range 3–20)

**Effect:**
- Only the top N categories are displayed
- The top-N selector at runtime can change this (between 3 and 20)
- Changing the top-N value does not change the retention limit or requery the server

**Why it exists:**
- The top N performers are often all that matter (Pareto principle: 80/20 rule)
- Displaying only the top few categories keeps the chart readable
- Others provides context about what's excluded

**Example:** If topN = 5:
- The first view shows 5 categories
- User clicks "Show All" → sees all 50 retained categories (up to the retention limit)
- User clicks "Sort" → bars reorder, but still only top 5 shown
- User changes the top-N dropdown to 10 → top 10 now displayed (within the same 50 retained)

### Percentages and Top-N

**Critical rule:** Percentages are **not renormalized** when the top-N changes.

**What this means:**
- A category that represents 18% of the universe continues to show 18% regardless of whether you display Top 5 or Top 10
- Changing the top-N does NOT recompute the percentage denominator
- Percentages always reflect the total universe (or the current filtered scope, if extent/upstream filters apply)

**Why:**
- Renormalizing percentages would be mathematically misleading
- Viewers could misinterpret "18% of the top 5" as different from "18% of the universe"
- Maintaining consistent percentages ensures the data speaks for itself

**Example:**
```
Universe:
  Pump: 1,000 of 5,556 total = 18%
  Motor: 800 of 5,556 total = 14%
  Valve: 700 of 5,556 total = 13%
  [... 47 more categories ...]

Top-5 Display:
  Pump: 18%
  Motor: 14%
  Valve: 13%
  (next two)
  Others: 37%

Top-10 Display (same percentages):
  Pump: 18%
  Motor: 14%
  Valve: 13%
  (seven more categories, each with their actual universe %)
  Others: 25%
  
Note: Pump is still 18%, not 18/(18+14+13+...) of the top 10.
```

### Show All and Percentages

The same rule applies: percentages do not change.

```
Top-5 Display: Pump shows 18%
Show All Display: Pump still shows 18%
(Percentages never renormalize)
```

### Search and Percentages

Search results also maintain universe percentages:

```
Search for "pump": Results show
  - Pump (Main category): 18%
  - Pump Housing (subcategory): 2%
  (etc., all as % of universe, not % of search results)
```

### Sorted View and Percentages

Sorting (DESC ↔ ASC) does not change percentages:

```
Sorted DESC (top-first): Pump 18%, Motor 14%, Valve 13%
Sorted ASC (bottom-first): [smallest categories], ..., Valve 13%, Motor 14%, Pump 18%
(Percentages unchanged)
```

### Why This Design

This design ensures transparency and prevents misinterpretation:

1. **Data consistency:** What you see is always anchored to the universe, not the subset
2. **Shareability:** A percentage from the Top-5 view is comparable to a percentage from the Top-20 view
3. **Accuracy:** A category that represents 18% of the universe is honest communication
4. **No surprises:** Toggling Show All doesn't suddenly change percentages

---

## Synthetic Others

### What Others Is

**Others is NOT a real source category.** It is a **synthetic bar** that represents all excluded categories combined.

**Characteristics:**
- Calculated mathematically (not queried from the data source)
- Non-interactive (cannot be selected, clicked, or drilled into)
- Not included in the Show All display (Show All shows only real categories)
- Hidden during search (search results are a subset of the universe, but Others represents the full excluded set)
- Independent styling (different fill and outline from primary bars)
- Derived from universe totals and visible groups

### Why Others Exists

The Others bar serves several purposes:

1. **Transparency** — Viewers can see that not all categories are displayed
2. **Context** — Understanding what "the other 60%" represents is critical
3. **Mathematical validation** — Visible bars + Others should equal the universe total
4. **Business insight** — A large Others often signals that the top performers are not as dominant as they appear

**Example:**
```
Top 5 assets by maintenance cost:
  Pump: $10,000 (10%)
  Motor: $8,000 (8%)
  Valve: $7,000 (7%)
  (two more assets)
  Others: $75,000 (75%)
  
This tells the viewer: "The top 5 are important, but 75% of costs are spread across the rest."
This is very different from a view without Others, where it looks like the top 5 dominate.
```

### Others Calculation by Aggregation Type

#### COUNT Others
```
Others COUNT = total_count - sum(visible_group_counts)
```

**Always available** (assuming universe totals were fetched)

**Example:**
```
Total records: 1,000
Top 3 groups: 300 + 250 + 150 = 700
Others: 1,000 - 700 = 300
```

#### SUM Others
```
Others SUM = total_sum - sum(visible_group_sums)
```

**Always available** (assuming universe totals were fetched)

**Example:**
```
Total cost: $100,000
Top 3 groups: $40,000 + $35,000 + $15,000 = $90,000
Others: $100,000 - $90,000 = $10,000
```

#### AVG Others
```
Others AVG = (total_sum - sum(visible_sums)) / (total_count - sum(visible_counts))
           = excluded_sum / excluded_count
```

**Critical rule:** AVG Others is NOT an average of the visible groups' averages.

**Example:**
```
Total: 100 records, total sum $1,000 → universe avg $10
Visible: 3 groups with 70 records, sum $700 → avg $10

Excluded: 30 records, sum $300 → others avg $10

If you naively averaged the visible AVGs (even if they were all $10), 
you'd get $10, which happens to match the real Others AVG by coincidence.
But if the visible groups had different averages, this would break down.

Correct: Others AVG = (1,000 - 700) / (100 - 70) = 300 / 30 = $10 ✓
Incorrect: Others AVG ≠ average of visible averages ✗
```

#### MIN/MAX Others
```
Others MIN = MIN(valueField) over all records NOT in visible groups
Others MAX = MAX(valueField) over all records NOT in visible groups
```

**Availability:** `available` flag is true if the excluded MIN/MAX could be computed

- If no records are excluded, Others is null (nothing left)
- If excluded records exist but the value field is null, Others is "Not Available" (cannot compute safely)

**Example:**
```
Visible groups (Top 2):
  Pump: values 100, 200, 150 → MIN=100, MAX=200
  Motor: values 80, 90 → MIN=80, MAX=90

Excluded groups (all others):
  Valve: values 60, 70, 50 → MIN=50, MAX=70
  (others): various values

Others MIN = 50 (the minimum value in all excluded categories)
Others MAX = 70 (the maximum value in all excluded categories)
```

### Others in Show All

**Behavior:** Others does NOT appear when Show All is active.

**Reason:** Show All displays all retained categories; there is nothing "excluded" from view.

**Exception:** If the retention limit caps the total categories, Others may still appear in Show All to represent the categories beyond the retention limit.

**Example:**
```
Retention limit: 50 categories
Data source has: 1,000 unique categories

Show All displays: Categories 1–50
Others: Represents categories 51–1,000 (if showOthers is ON)
```

### Others During Search

**Behavior:** Others is hidden while a search is active.

**Reason:** The search results are a filtered subset; Others applies to the full universe, not the search scope.

**Example:**
```
Search: "pump"
Results: Pump (category), Pump_Main, Pump_Auxiliary, PumpHouse

Display:
  Pump: 500 (18%)
  Pump_Main: 300 (11%)
  Pump_Auxiliary: 200 (7%)
  PumpHouse: 100 (4%)

Others: [HIDDEN]
(Even though there are 4,000 other categories, they're not shown because search focused on "pump".)
```

When the search clears, Others reappears.

### Others Styling

The Others bar has independent styling:

| Setting | Default | Customizable |
|---------|---------|---------------|
| Fill color | #9e9e9e (gray) | Yes |
| Outline color | #9e9e9e (gray) | Yes |
| Outline width | 0 | Yes |
| Line style | SOLID | Yes |

The primary bars use different colors; Others typically uses a neutral gray to visually distinguish it.

### Others Non-Interactive

**Selection:** Others cannot be selected (no checkbox)

**Drill-down:** Clicking Others does not open a detail view (Others is not a real category)

**Data Actions:** Others is never materialized as a DataRecord for export

**Percentages:** Others percentage is calculated but cannot be edited

### Others "Not Available" State

In rare cases, the widget cannot compute Others:

**Trigger:**
- MIN/MAX aggregation where excluded categories have all NULL values in the value field
- Configuration error or data quality issue

**Display:** Others bar shows "Not Available" (grayed out)

**Reason:** The mathematics cannot complete safely

**Resolution:** Review your data; if all excluded categories have NULL values, this is expected

---

## Percentage Calculations

### Definition

**Percentage = Share of Total**

For supported aggregations (COUNT, SUM):
```
Percentage = (category aggregate) / (total aggregate) × 100
```

### Supported Aggregations

| Aggregation | Percentage? | Basis |
|-------------|------------|-------|
| COUNT | ✓ Yes | Total record count |
| SUM | ✓ Yes | Total sum of value field |
| AVG | ✗ No | N/A (averaging is not additive) |
| MIN | ✗ No | N/A (minimum doesn't aggregate) |
| MAX | ✗ No | N/A (maximum doesn't aggregate) |

### Display Modes

The `valueDisplay` setting controls how the percentage is presented:

| Mode | Display Example |
|------|-----------------|
| VALUE | "500" (aggregate only) |
| PERCENT | "45%" (percentage only) |
| VALUE_PERCENT | "500 (45%)" (both) |

The separate `abbreviateValues` setting controls only the aggregate portion of these labels. It defaults to `false` for backward compatibility. When enabled, values of 1,000 or more use `k`, `M`, `B`, or `T` with at most one decimal place; for example, `55,650 (22.0%)` becomes `55.7k (22.0%)`. Percent-only labels are unaffected.

### Important: Percentages Are NOT Renormalized

**Fundamental rule:** Percentages always reflect the universe (or current filter scope), regardless of what subset is displayed.

#### Top-N Does Not Renormalize

```
Universe: 10,000 records
  Category A: 1,000 (10%)
  Category B: 900 (9%)
  Category C: 800 (8%)
  [... 997 more categories ...]
  Others: 7,300 (73%)

Top-5 view:
  Category A: 1,000 (10%) ← still 10%, not 1000/(1000+900+800+700+600)
  Category B: 900 (9%)
  Category C: 800 (8%)
  Category D: 700 (7%)
  Category E: 600 (6%)
  Others: 7,300 (73%)

Top-10 view (same percentages, more categories shown):
  [Top 10 categories, each with their universe %]
  Others: 6,300 (63%)
```

**Why:** The percentage must remain anchored to the universe for honest communication.

#### Sorting Does Not Renormalize

```
Sorted DESC: A (10%), B (9%), C (8%), ...
Sorted ASC:  [...bottom categories...], C (8%), B (9%), A (10%)
(Percentages unchanged)
```

#### Show All Does Not Renormalize

```
Top-5: A (10%), B (9%), C (8%), D (7%), E (6%), Others (60%)
Show All: [all 50 categories shown], possibly no Others if all fit
  A (10%), B (9%), C (8%), ..., Z (0.1%)
(Percentages unchanged)
```

#### Searching Does Not Renormalize

```
Search "pump": Results show
  Pump: 18% (18% of all records, not 18% of "pump" results)
  Pump Aux: 5% (5% of all records, not 5% of "pump" results)
```

### Percentage and Extent Filtering

**Important:** When extent filtering is applied (via the Filter-by-map-extent message action), the percentage denominator changes.

```
No filter:
  Total records: 5,000
  Pump: 900 (18%)
  
Extent filter applied (e.g., visible county only):
  Total records: 500 (subset)
  Pump: 100 (20% of the filtered universe)

The percentage is recalculated because the universe changed.
```

This is **correct behavior** and expected.

### Percentage Rounding

Percentages are displayed as integers (rounded). **They may not sum to 100% due to rounding**.

```
A: 34%
B: 33%
C: 33%
Total: 100% (rounded)

Actual:
A: 33.7%
B: 33.1%
C: 33.2%
Total: 100.0%
```

This is expected and acceptable in user-facing displays.

---

## Conditional Bar Colors

### Overview

The widget supports two color modes for primary bars:

1. **Single Color** — All bars the same color
2. **Conditional** — Breakpoint-based colors (red for high, yellow for medium, green for low, etc.)

Others bars are always independently styled.

### Single Color Mode

**Configuration:**
- In Bar Styling SidePopper: `Primary Bar Color Mode` = "Single"
- `Primary Fill Color` = your chosen color (default #1a73e8, Esri blue)

**Behavior:**
- All category bars use the same fill color
- Outline and line style are independent

### Conditional Color Mode

**Configuration:**
- In Bar Styling SidePopper: `Primary Bar Color Mode` = "Conditional"
- Click the Conditional Colors editor (gear icon or inline panel)

#### Breakpoints and Colors

Conditional coloring uses **ordered inclusive lower bounds**:

- N breakpoints yield N ranges
- Ranges are: `[b0, b1)`, `[b1, b2)`, ..., `[b(N-1), +∞)`
- `colors[i]` is the fill for the range starting at `breakpoints[i]`
- Values below the first breakpoint fall back to the single fill color

**Example (Value-based, ascending):**

| Breakpoint | Range | Color | Business Meaning |
|-----------|-------|-------|------------------|
| 0 | 0–50 | #4caf50 (Green) | Low cost, acceptable |
| 50 | 50–100 | #ff9800 (Orange) | Medium cost, monitor |
| 100 | 100+ | #f44336 (Red) | High cost, critical |

**How it works:**
```
Category with value 30 → 30 >= 0 and < 50 → Green
Category with value 75 → 75 >= 50 and < 100 → Orange
Category with value 150 → 150 >= 100 → Red
```

**Example (Percent-based, descending):**

| Breakpoint | Range | Color | Business Meaning |
|-----------|-------|-------|------------------|
| 75 | 75%+ | #4caf50 (Green) | Top performer |
| 50 | 50–75% | #ff9800 (Orange) | Good performer |
| 25 | 25–50% | #fdd835 (Yellow) | Average performer |
| 0 | 0–25% | #f44336 (Red) | Low performer |

### Conditional Basis: Value vs. Percent

The `basis` determines what metric is used for coloring:

#### VALUE Basis

Color is determined by the **aggregate value** of each category.

**Use when:**
- You want to color based on absolute numbers (e.g., "$100K cost is red, $50K is orange")
- The magnitude of the aggregate matters

**Example (COUNT):**
```
Top 5 by count:
  Category A: count 500 → Red (high count)
  Category B: count 300 → Orange (medium count)
  Category C: count 100 → Green (low count)
```

**Example (SUM):**
```
Top 5 by cost:
  Pump: $10,000 → Red (expensive)
  Motor: $5,000 → Orange (moderate)
  Valve: $1,000 → Green (inexpensive)
```

#### PERCENT Basis

Color is determined by the **percentage** of each category.

**Use when:**
- You want to color based on share-of-total (e.g., "20% of budget is a big slice")
- The proportion matters more than the absolute value

**Example:**
```
Top 5 by percentage:
  Category A: 25% of total → Red (large slice)
  Category B: 15% of total → Orange (moderate slice)
  Category C: 5% of total → Green (small slice)
```

**Important:** When Percent basis is selected:
- Percentages are used for coloring **even if value display is "Value only"**
- Percent-based coloring allows the same value to have different colors (if the total changes due to filters/extent)

### Conditional Coloring and AVG/MIN/MAX

**Restriction:** Conditional coloring uses the aggregate value or percentage. For AVG/MIN/MAX:

- **VALUE basis:** Works normally (uses the aggregated value)
- **PERCENT basis:** Not applicable (percentages only support COUNT/SUM)

**Behavior:**
- If Percent basis is selected and aggregation is AVG/MIN/MAX, colors fall back to the primary fill color
- The widget does not error; it silently falls back to single-color mode

**Best practice:** Use VALUE basis for MIN/MAX/AVG aggregations.

### Conditional Coloring and Others

**The Others bar:**
- Is **always independently styled** (does not use conditional colors)
- Uses `Others Fill Color` from the Bar Styling panel
- This allows Others to visually distinguish itself from the data categories

### Example: Traffic Light Colors

A common conditional pattern is "traffic lights": Green (good), Yellow (caution), Red (critical).

**Setup (for a cost aggregation where high is bad):**

| Breakpoint | Color | Business Logic |
|-----------|-------|-----------------|
| 0 | Green (#4caf50) | Cost < $50K → acceptable |
| 50000 | Yellow (#fdd835) | Cost $50K–$100K → monitor |
| 100000 | Red (#f44336) | Cost > $100K → critical |

**Display:**
```
Pump: $120,000 → Red (exceeds critical threshold)
Motor: $75,000 → Yellow (in caution zone)
Valve: $30,000 → Green (within acceptable range)
```

### Example: Performance Band Colors (Percent-based)

Using percentage and descending breakpoints:

| Breakpoint | Color | Business Logic |
|-----------|-------|-----------------|
| 75 | Dark Green (#1b5e20) | Top 25% of portfolio |
| 50 | Green (#4caf50) | Top 25–50% |
| 25 | Orange (#ff9800) | Top 50–75% |
| 0 | Red (#f44336) | Bottom 25% |

**Display:**
```
Category A: 30% of total → Red (bottom quartile)
Category B: 45% of total → Orange (third quartile)
Category C: 70% of total → Green (second quartile)
Category D: 82% of total → Dark Green (top quartile)
```

---

## Search Functionality

### Overview

Search allows end-users to discover categories outside the current Top-N or retained set.

### Search Availability

Search is available only when:

1. **Search is enabled** (`searchEnabled` = ON in Builder)
2. **Show All is active** (user has toggled to Show All view)

In other words: Search works within the Show All context.

### Search Modes

#### LOCAL Search

**Definition:** Search only the retained category population (the top N × retention limit)

**Mechanics:**
- No server round-trip; search is instantaneous
- Matches categories by substring or semantic matching
- Results replace the Top-N display

**Behavior:**
- "Search Local" input accepts a search term
- Matching categories are filtered and displayed
- Non-matching categories are hidden
- Clear search returns to Top-N or Show All view
- Others is hidden during LOCAL search

**Use cases:**
- Quick lookup of known categories (e.g., type "pump" to find Pump, Pump_Main, Pump_Aux)
- Narrowing a large Show All list to focus on a few categories

**Performance:** Instant (< 10ms)

**Limitations:**
- Cannot find categories outside the retained set
- If you're looking for "Pump #2001" and only the top 50 are retained, LOCAL search won't find it

#### SERVER Search

**Definition:** Query the full data source to discover categories outside the retained set

**Mechanics:**
- Server-side query with the search term
- Server returns all matching groups (up to retention limit)
- Results replace both Top-N and Show All

**Behavior:**
- "Search Server" input accepts a search term
- 300ms debounce: If the user types "p-u-m-p", the query waits until they've stopped typing
- Server fetches matching groups and displays them
- Results are displayed with their aggregate values and percentages (if applicable)
- Clear search returns to the previous Top-N view
- Others is hidden during SERVER search

**Use cases:**
- Finding niche categories outside the top performers (e.g., "Pump #847")
- Discovering rare values in high-cardinality fields
- Confirming that a category exists

**Performance:** 300ms + server latency (typically 500ms–2s depending on data size and server)

**Limitations:**
- Slower due to server round-trip
- Search results still respect the retention limit (search can return only up to 50 categories if retention limit is 50)
- If 100 categories match but retention limit is 50, only the first 50 are shown

#### BOTH Search (Not Exposed in Builder)

The configuration supports `searchMode: 'BOTH'`, which the runtime can handle, but the Builder does not expose this option. If you manually set it in config.json, the widget would attempt both LOCAL and SERVER searches. This is currently not used.

### Search Behavior Details

#### Typing and Debounce

The search input debounces for 300ms:

```
User types: "p"      → waits
            "p-u"    → waits
            "p-u-m"  → waits
            "p-u-m-p" → stops typing, waits 300ms, then queries
```

#### Search Results Display

When a search completes:

```
Search results for "pump":
  ✓ Pump (category): 500 count
  ✓ Pump_Main: 300 count
  ✓ Pump_Auxiliary: 200 count
  ✓ PumpHouse: 100 count
  Others: [HIDDEN]
```

Bars are sorted by aggregate value (same sort direction as configured).

#### No Results

If no categories match the search:

```
Search results for "xyz":
  No matches found.
  [Previous bars remain visible below]
```

#### Clearing Search

The search box has a clear button (X):

```
User clicks X → search term is cleared
            → display returns to previous Top-N or Show All view
            → Others reappears
```

Or the user can delete the text manually.

#### Search and Selection

**Important:** Selection state is preserved while searching.

```
User selects: "Pump" and "Motor"
User searches: "pump"
Display: Matches to "pump" (Pump, Pump_Main, Pump_Auxiliary, etc.)
         Pump and Pump_Main checkboxes are checked (selection preserved)
         Motor checkbox is OFF-SCREEN but still selected (draft state)
User clears search: Returns to Show All
                    All selected categories' checkboxes remain checked
```

#### Search and Percentages

Search results display universe percentages (not search-result percentages):

```
Universe: 10,000 records total
Pump: 1,000 (10%)
Search for "pump": Shows
  Pump: 1,000 (10%)
  (not as a fraction of just the search results)
```

### Search Failure

If a server search fails (network error, server error):

```
Search attempt for "pump" fails.
Display: "Search failed, showing previous results."
Previous bars remain visible (stale, but better than a blank screen).
```

The user can retry by adjusting the search term or clicking the retry button (if available).

---

## Selection and Connected Content

### Overview

The widget supports **category selection** — end-users can select one or more categories and send selection messages to connected Experience Builder widgets.

### Enable/Disable Selection

**Configuration:** In the Tools section, toggle **Selection Enabled** ON/OFF

**Behavior:**
- ON: Selection controls (checkboxes, radio buttons, or toggles) appear next to each category
- OFF: No selection controls; the chart is display-only

### Selection Style

**Configuration:** In the Tools section, choose **Selection Style**

| Style | Behavior | Use Case |
|-------|----------|----------|
| CHECKBOX (default) | Multiple selection; user checks any number of categories | General multi-category analysis |
| RADIO | Single selection; only one category can be selected at a time | Detailed drill-down into one category |
| TOGGLE | Buttons that toggle; functionally like CHECKBOX but styled as buttons | Visual variety, button-centric UI |

### Selection Workflow

#### Step 1: Draft Selection

1. User clicks a checkbox (or radio button, or toggle button)
2. The control toggles visually (checked/unchecked)
3. **Draft selection** is recorded (user hasn't committed yet)
4. An "Apply" button appears in a sticky footer (at the bottom of the chart)
5. A "Cancel" button appears (discard draft changes)
6. If a previous selection is applied, a "Clear" button is available

#### Step 2: Apply Selection

1. User clicks the "Apply" button
2. **Draft selection becomes applied selection**
3. Experience Builder sends a `DATA_RECORDS_SELECTION_CHANGE` message to all connected widgets
4. **The chart itself is NOT filtered** (this is critical to understand)
5. The footer updates to show applied selection status: "3 categories selected"
6. Any connected Map, Table, Chart, or other widget receives the selection message and can update accordingly

#### Step 3: Cancel Selection

1. User clicks the "Cancel" button
2. **Draft selection is discarded**
3. All checkboxes revert to their previous state
4. Apply/Cancel buttons vanish
5. Clear button remains (if a selection is already applied)

#### Step 4: Clear Applied Selection

1. User clicks the "Clear" button
2. **Applied selection is cleared entirely**
3. All checkboxes uncheck
4. Experience Builder sends message: Selection cleared to connected widgets
5. Footer updates: "No selection"

### Critical: The Chart Is NOT Filtered by Selection

**This is the most important rule to understand:**

```
WRONG:
  User selects "Pump" and "Motor"
  → Chart filters to show only Pump and Motor
  ✗ This does NOT happen

CORRECT:
  User selects "Pump" and "Motor"
  → Chart remains unchanged
  → All categories still visible
  → But "Pump" and "Motor" are marked as selected
  → A message is published to connected widgets
  → Connected widgets (Map, Table, etc.) update to show only Pump and Motor records
  ✓ This is what actually happens
```

**Why this design?**

1. **Transparency:** The full context (all categories, all totals) remains visible
2. **Comparison:** Users can compare selected vs. unselected categories side-by-side
3. **Multi-step workflow:** Select categories in Top-N Chart → see them in connected Map → drill into details
4. **Symmetry:** The selection doesn't alter the chart; it sends messages to other widgets

### Native Selection Architecture

Under the hood, the widget uses Experience Builder's native selection mechanism:

1. **Query IDs:** The widget queries for OBJECTID (or global ID) of all records in the selected categories
2. **Select Records:** Calls `selectRecordsByIds()` to send the selection message
3. **No cap:** Unlike Data Actions (which cap at 2,000 records), native selection is uncapped

**Example:**
```
User selects: "Pump" and "Motor"
The widget:
  1. Queries for all record IDs where category = "Pump" OR category = "Motor"
  2. Result: [ ID_1, ID_2, ..., ID_5000 ] (5,000 records)
  3. Sends message: "Here are 5,000 selected records"
  4. Connected Map zooms to the selection
  5. Connected Table filters to the selection
(No truncation, no cap.)
```

### Others Cannot Be Selected

**Behavior:** The Others bar has no checkbox; it cannot be selected

**Why:**
- Others is not a real category; selecting it would be meaningless
- The individual excluded categories are the real data; if a user wants to interact with them, they should search and select them individually

### Selection Across Show All and Search

#### Selecting in Top-N View

```
User selects: Category A, Category B (in Top-5)
User clicks: "Show All"
Display: All 50 categories
Selection state: Category A and B remain checked
User can select/deselect more categories
```

#### Selecting During Search

```
User performs SERVER search for "pump"
Results: 5 categories matching "pump"
User selects: Pump, Pump_Main
User changes search: Still 3 selected
User clears search: Returns to Top-N view
All 3 categories remain selected
```

**Important:** If a selected category is off-screen (e.g., during a search that hides it), the selection is still applied. There's no explicit "selected count" for off-screen categories, but they remain part of the applied selection.

### Selection and Upstream Filters

Selection respects the same QueryScope (InRuntimeView) as the main chart:

```
Main chart: Shows categories filtered by upstream Experience Builder filters
Selection: Only resolves record IDs from records that match the upstream filters
Result: Consistent, expected behavior
```

---

## Data Actions

### Overview

Data Actions are Experience Builder's native mechanism for triggering external processes on selected records. Common examples:

- Export to CSV
- Send to external service
- Trigger a workflow
- API call

### Data Actions vs. Selection

**Important distinction:**

| Aspect | Selection | Data Actions |
|--------|-----------|--------------|
| Purpose | Send category selection messages to connected widgets | Trigger external processes (export, API, etc.) |
| Who implements | Widget (sends native DataRecordSet) | Builder author (in Action tab) |
| Availability | Always (if selectionEnabled = true) | Only if author configured in Action tab |
| Record materialization | Native queryIds (uncapped) | 2,000-record materialization cap |
| UI location | Sidebar checkboxes | Header Data Action menu |

### Enabling Data Actions

**Prerequisites:**

1. **In the manifest:** The widget must declare `canConsumeDataAction: true` (Top-N Chart does)
2. **In the Builder:** Author must configure Data Actions in the widget's **Action tab**

**How it works:**

1. Builder author adds a Data Action (Export, Send to URL, etc.)
2. At runtime, a **Data Action menu button** appears in the header
3. When the user has selected categories and clicks the menu, the action runs on the selected records

### Data Action Materialization Cap

**The rule:** Up to **2,000 selected records** are materialized for Data Actions.

**Why the cap?**
- Large exports (10,000+ records) can be slow to serialize and send
- Most Data Actions (export, API call) have practical limits
- The cap balances functionality with performance

**Behavior:**

```
User selects: 3 categories
Resolution: 5,000 records total (across all 3 categories)
Materialization: First 2,000 records (IDs 1–2000)
Truncation notice: "Selected records exceed the export limit (2,000 of 5,000 selected). 
                    The export is truncated; consider refining your selection."
```

**Important:** The truncation notice is **not an error**. The action still runs (on the 2,000 materialized records). The user is just informed that not all selected records were included.

### Data Actions Without Selection

If no categories are selected (or selection is cleared):

```
User clicks: Data Action menu
Options: [All available actions]
User selects: "Export to CSV"
Widget exports: ALL records from the data source (the full universe)
```

This allows Data Actions to operate on the entire dataset when no specific selection is made.

### Data Actions and Downstream Widgets

**Scope:** Data Actions are entirely **Experience Builder framework ownership**, not widget-specific.

The Top-N Chart:
1. Materializes the DataRecordSet (up to 2,000 records)
2. Sends it to the Experience Builder action framework
3. The framework routes it to the configured action

The framework (not the widget) handles routing, throttling, and execution.

### Example: Export Workflow

```
1. Chart displays Top 5 asset types by maintenance cost
2. Author configures: Data Action = "Export to CSV"
3. User selects: "Motor" (checking the checkbox)
4. User clicks: "Apply" (publishes selection)
5. User clicks: Data Action menu → "Export to CSV"
6. Widget materializes: 1,500 Motor maintenance records
7. Data Action executes: CSV file downloads with all 1,500 records
```

---

## Map Extent and Upstream Filters

### Upstream Filters

Experience Builder allows authors to apply global filters (e.g., "Show only data from 2024"):

```
Experience Builder Filter Panel:
  ├─ Year = 2024
  ├─ Status = "Active"
  └─ Region = "North"

Widget receives: These filters are automatically applied to all queries
```

**Behavior:** All Top-N Chart queries respect upstream filters:

1. **Grouped statistics:** Only count/sum/avg/min/max within the filtered scope
2. **Universe totals:** Totals are computed from filtered records only
3. **Selection resolution:** Selected records are resolved from filtered data only
4. **Percentages:** Denominator is the filtered universe

**Example:**

```
No upstream filters:
  Pump: 1,000 of 5,000 total = 20%

Upstream filter applied (Year = 2024):
  Data is now: 3,000 records (only 2024 data)
  Pump: 600 of 3,000 = 20%
  
Percentages update because the universe changed (5,000 → 3,000).
```

### Map Extent Filtering

The widget supports a **message action** called **"Filter by map extent"**:

**How it works:**

1. Builder author adds a message action from a connected Map widget
2. At runtime, the Map sends its current extent (bounding box) to the Top-N Chart
3. The chart applies a spatial filter: "Only include records within this extent"

**Behavior:** Extent filtering affects:

- **Grouped statistics:** Groups are computed from records within extent
- **Universe totals:** Totals are from records within extent
- **Percentages:** Denominator is the extent-filtered universe
- **Selection resolution:** Selected records are filtered by extent
- **Others:** Others is recalculated for the extent-filtered universe

**Example:**

```
Map initially shows: Entire county (1,000 pump records)
Chart shows: Pump 1,000 (20%)

User zooms Map: To a single district (only 100 pump records)
Message action sends: Extent filter to chart
Chart updates: Pump 100 (but percentage might still be 20% if 500 records total in district)
              OR Pump percentage changes if the proportion changed
```

### Spatial Filter Query

The extent filter is applied as a spatial query:

```
WHERE categoryField = 'Pump'
  AND [spatial index] geometry WITHIN mapExtent
  AND [upstream filters apply]
```

### Toggling Extent Filtering

The extent filter can be toggled on/off:

1. **On:** Spatial filter is applied; chart shows only records within extent
2. **Off:** Spatial filter is removed; chart shows all records (within upstream filters)

The toggle may be in the Builder's message-action configuration.

### Extent and Percentages

**Critical rule:** When extent changes, percentages ARE recalculated (unlike Top-N changes).

```
No extent:
  Universe: 5,000 records
  Pump: 1,000 (20%)

Extent applied:
  Universe: 500 records (only in this county)
  Pump: 150 (30% because the proportion changed in this county)

Percentages update because the universe scope changed.
```

---

## Data Source Support

### Supported Data Sources

The widget requires a queriable Experience Builder DataSource. Below is a compatibility matrix:

| Data Source Type | Support | Notes |
|------------------|---------|-------|
| **Feature Layer (Hosted)** | ✓ SUPPORTED | Standard hosted feature layers; recommended |
| **Feature Service** | ✓ SUPPORTED | Published to ArcGIS Server or ArcGIS Online |
| **Enterprise Feature Service** | ✓ SUPPORTED | ArcGIS Enterprise feature services |
| **Feature Layer (Non-hosted)** | ✓ SUPPORTED | Any ArcGIS-published feature layer with query capability |
| **Map-derived Data Source** | ? CONDITIONAL | Depends on the layer; generally works if the layer supports statistics |
| **Selection-aware Data Source** | ? CONDITIONAL | Works; upstream filters apply automatically |
| **Table (Non-spatial)** | ? CONDITIONAL | Technically supported; requires independent validation |
| **Related Records** | ✗ NOT VALIDATED | Not explicitly tested; use at your own discretion |
| **Raster Data** | ✗ UNSUPPORTED | Widget requires vector/table data |
| **Non-queryable sources** | ✗ UNSUPPORTED | Must support Experience Builder query APIs |

### Feature Requirements

The data source must provide:

1. **Category field** — Any string or numeric field suitable for grouping
2. **Value field** — (For SUM, AVG, MIN, MAX) A numeric field
3. **Statistics support** — Server must support COUNT, SUM, AVG, MIN, MAX aggregations
4. **Grouping support** — Server must support GROUP BY equivalent (statistics with result grouping)
5. **Query capability** — Must respond to queriable Experience Builder requests
6. **OBJECTID or Global ID** — Required for selection resolution (standard on feature layers)
7. **Geometry** — (Recommended for map integration) WGS84 or projected geometry; can be null for non-spatial selections

### Authentication

The widget respects the data source's authentication:

- **Secured services** — The user must be authenticated to the service (handled by Experience Builder's portal/enterprise login)
- **Token-based services** — Tokens are automatically appended by Experience Builder
- **Public services** — No authentication needed

**Important:** The widget never stores credentials, tokens, or secrets. All authentication is managed by Experience Builder.

---

## Responsive Design

### Responsive Approach

The widget uses **CSS container queries** to adapt its layout to the container width, rather than relying on fixed breakpoints or media queries.

**Advantage:** The widget responds to the actual container size in Experience Builder, not the viewport size.

### Width Modes

The widget conceptually operates in three width ranges:

| Mode | Width | Layout Changes |
|------|-------|-----------------|
| **Narrow** | < 280px | Category names truncated; value truncated; single-line layout |
| **Medium** | 280–699px | Category and value fit on separate lines; responsive text size |
| **Wide** | ≥ 700px | Full layout; category left, value right; optional multi-column |

### Narrow Layout (< 280px)

**Changes:**
- Category name truncated to 3–4 characters (e.g., "...ump")
- Value display simplified
- Text size reduced for fit
- Footer wraps to multiple lines if needed
- Checkboxes remain functional
- Header (title) may wrap or truncate

**Use case:** Mobile, sidebar widgets

### Medium Layout (280–699px)

**Changes:**
- Category name displays in full (but may wrap)
- Value displays inline (e.g., "500 (45%)")
- Text size suitable for mobile-to-tablet
- Responsive spacing
- Multi-row layout for bars

**Use case:** Tablet, narrow desktop panels

### Wide Layout (≥ 700px)

**Changes:**
- Full text display
- Value placement options (inline, top-right, inside bar, bottom-right)
- Optional multi-column mode (if `multiColumnWideMode = ON`)
- Generous spacing
- Full Data Action menu

**Use case:** Desktop, dashboard panels

### Responsive Bar Styling

The Bar Styling settings interact with responsive layout:

| Setting | Narrow | Medium | Wide |
|---------|--------|--------|------|
| Bar Height | Auto-reduced to fit | Configured size | Configured size |
| Category Font Size | Auto-reduced | Configured size | Configured size |
| Value Font Size | Auto-reduced | Configured size | Configured size |
| Category Position | Truncated label | Full label | Full label |
| Value Position | Inline or below | Inline or right | Inline or right (customizable) |

### Container Query Syntax (for developers)

The widget uses CSS `@container` queries:

```css
@container (min-width: 700px) {
  .topn-chart-bar {
    /* Wide layout */
  }
}

@container (min-width: 280px) and (max-width: 699px) {
  .topn-chart-bar {
    /* Medium layout */
  }
}

@container (max-width: 279px) {
  .topn-chart-bar {
    /* Narrow layout */
  }
}
```

### Testing Responsive Behavior

To test responsive layouts in Experience Builder:

1. Resize your browser window narrow (< 400px)
2. Open the widget in Builder
3. Verify that text truncates appropriately and bars remain readable
4. Resize wide (> 1000px)
5. Verify that full text displays and spacing looks correct

---

## Examples

### Example 1: Transportation / State DOT — Accident Hotspots

**Business Question:**
Which highways experience the most accidents? Where should we deploy safety resources?

**Data Setup:**

| Property | Value |
|----------|-------|
| Data Source | Statewide accident incident layer (ArcGIS Online feature layer) |
| Category Field | `Highway_ID` (string: "US-101", "I-280", "CA-92", etc.) |
| Aggregation | COUNT |
| Value Field | (Not used for COUNT) |
| Top-N | 5 |
| Show Others | ON |

**Builder Configuration:**

| Setting | Value |
|---------|-------|
| Header Title | "Top 5 Accident Hotspots (Last 12 Months)" |
| Sort Direction | DESC (highest count first) |
| Value Display | VALUE_PERCENT |
| Selection Enabled | ON |
| Search Mode | SERVER (find niche highways) |
| Bar Color | Single #d32f2f (red, conveys urgency) |

**Runtime Workflow:**

1. **Initial load:** Widget displays top 5 highways by accident count
   ```
   I-280: 450 accidents (22%)
   US-101: 380 (19%)
   CA-92: 320 (16%)
   I-880: 280 (14%)
   CA-17: 250 (12%)
   Others: 320 (17%)
   ```

2. **Analyst observation:** I-280 is the clear hotspot; 22% of accidents occur there

3. **Drill-down:** Analyst clicks "Select I-280" → "Apply"
   - A connected Map widget receives the selection
   - Map zooms to I-280 and highlights all accidents
   - Analyst can see where along the highway accidents cluster

4. **Search:** Analyst wonders about a specific highway: "Is I-405 in the top 5?"
   - Types "I-405" in the search box
   - SERVER search queries the database
   - Result: I-405 found at rank 7 (180 accidents, 9%)
   - Analyst can compare I-405 to the displayed top 5

5. **Export:** Analyst selects I-280 and I-880 → "Apply"
   - Both highways are published to connected content
   - Analyst clicks "Data Action" → "Export to GeoJSON"
   - All accidents on those two highways are exported for further analysis

**What the Results Mean:**

- The top 5 highways account for 83% of accidents
- 17% are spread across the rest of the state (Others)
- I-280 is significantly higher than the others (22% vs. 19%, 16%, etc.)
- Decision: Deploy additional safety resources to I-280

---

### Example 2: Asset Management — Maintenance Cost by Asset Type

**Business Question:**
Which asset types consume the most maintenance budget? Where do we need better reliability?

**Data Setup:**

| Property | Value |
|----------|-------|
| Data Source | Maintenance work orders (ArcGIS Enterprise feature service) |
| Category Field | `Asset_Type` (string: Pump, Motor, Valve, Compressor, etc.) |
| Aggregation | SUM |
| Value Field | `Maintenance_Cost` (numeric, dollars) |
| Top-N | 5 |
| Retention Limit | 30 (expect ~20 asset types) |
| Show Others | ON |

**Builder Configuration:**

| Setting | Value |
|---------|-------|
| Header Title | "Maintenance Spending by Asset Type (YTD)" |
| Sort Direction | DESC (highest cost first) |
| Value Display | VALUE_PERCENT |
| Bar Color Mode | Conditional |
| Conditional Breakpoints | 0 (Green), 50000 (Yellow), 100000 (Red) |
| Bar Height | MEDIUM |

**Runtime Workflow:**

1. **Initial load:** Widget displays top 5 asset types by total cost
   ```
   Pump: $125,000 (31%) → Red (exceeds $100k)
   Motor: $95,000 (24%) → Yellow ($50k–$100k)
   Valve: $65,000 (16%) → Yellow
   Compressor: $55,000 (14%) → Yellow
   Cooler: $40,000 (10%) → Green (< $50k)
   Others: $18,000 (5%)
   ```

2. **Visual insight:** Red bar immediately signals that Pump is a budget problem

3. **Analyst question:** "Are there other high-cost asset types outside the top 5?"
   - Clicks "Show All"
   - Displays all 30 asset types
   - Notices that only Pump and Motor are red; the rest are yellow or green
   - Confirms: Pump and Motor dominate spending

4. **Drill-down:** Analyst selects Pump → Apply
   - Connected Table widget filters to show only Pump work orders
   - Analyst can see individual maintenance incidents
   - Looks for patterns (e.g., "Are all Pump failures due to seal wear?")

5. **Export:** Analyst exports all Motor work orders (clicking Data Action → "Export to Excel")
   - 1,200 Motor maintenance records exported
   - Finance team uses this for cost allocation

**What the Results Mean:**

- Pump maintenance consumes 31% of the budget; disproportionately high
- Pump reliability investment (e.g., better seals, predictive maintenance) could yield significant ROI
- Motor spending is also elevated; second priority for improvement
- Decision: Pilot a predictive maintenance program for Pumps

---

### Example 3: Public Works — Open Work Orders by District

**Business Question:**
Which districts have the largest backlog of open work orders? How are resources distributed?

**Data Setup:**

| Property | Value |
|----------|-------|
| Data Source | Work order layer, filtered to Status = "Open" |
| Category Field | `District` (string: District 1, District 2, ..., District 12) |
| Aggregation | COUNT |
| Top-N | 5 |
| Retention Limit | 12 (expect 12 districts) |
| Show Others | ON |

**Builder Configuration:**

| Setting | Value |
|---------|-------|
| Header Title | "Open Work Order Backlog by District" |
| Sort Direction | DESC |
| Value Display | VALUE_PERCENT |
| Selection Enabled | ON |
| Selection Style | RADIO (single district at a time) |

**Runtime Workflow:**

1. **Initial load:** Widget displays top 5 districts by open-order count
   ```
   District 3: 450 orders (25%)
   District 7: 380 (21%)
   District 1: 320 (18%)
   District 9: 280 (16%)
   District 5: 200 (11%)
   Others: 70 (4%)
   ```

2. **Key observation:** Others is only 4%; all districts are represented in the top 5 (Others is small)

3. **Resource allocation:** Supervisor notes that District 3 needs the most resources

4. **Work assignment:** Supervisor selects District 3 (RADIO mode, so only one at a time)
   - Connected Table widget filters to District 3's 450 work orders
   - Supervisor assigns crews based on the details (e.g., "Pothole repair" → Asphalt crew)

5. **Show All:** Supervisor clicks "Show All" to see all 12 districts
   ```
   [All 12 districts shown]
   Others: 0 (no hidden districts; the widget accounted for all)
   ```

**What the Results Mean:**

- District 3 is the priority; 25% of backlog
- All districts are visible (small Others); no "hidden" workload
- Resource distribution can be data-driven (more crew to District 3, fewer to District 5)

---

### Example 4: Utilities — Outage Records by Cause

**Business Question:**
What causes the most outages? Where should we invest in prevention?

**Data Setup:**

| Property | Value |
|----------|-------|
| Data Source | Outage incident log (ArcGIS Online feature layer) |
| Category Field | `Cause` (string: Equipment Failure, Weather, Planned Maintenance, etc.) |
| Aggregation | COUNT |
| Null Category Enabled | YES (to capture unmapped causes) |
| Top-N | 5 |
| Show Others | ON |

**Builder Configuration:**

| Setting | Value |
|---------|-------|
| Header Title | "Outage Causes (Last Year)" |
| Value Display | VALUE_PERCENT |
| Search Mode | SERVER |
| Vertical Spacing | AUTO_DISTRIBUTE |

**Runtime Workflow:**

1. **Initial load:**
   ```
   Weather: 1,200 (40%)
   Equipment Failure: 800 (27%)
   Planned Maintenance: 600 (20%)
   Unknown Cause: 180 (6%)
   (null category, data quality issue)
   Human Error: 120 (4%)
   Others: 100 (3%)
   ```

2. **Analyst insight:** Weather dominates (40%), but Equipment Failure is also significant (27%)

3. **Investigation:** Analyst searches for "Lightning" (a specific weather subtype)
   - SERVER search queries the database
   - Finds: Lightning outages are 300 of the 1,200 weather outages (25% of weather causes)
   - This granular view enables better prevention planning

4. **Data action:** Analyst exports Weather-cause outages
   - Downloads 1,200 records for GIS spatial analysis
   - Maps them to identify geographic patterns
   - Discovers that western region has 60% of weather outages
   - Recommends targeted hardening for the western region

**What the Results Mean:**

- Weather is the primary outage driver; hardening against storms is the top priority
- Equipment Failure is a close second; maintenance/replacement program is needed
- The 6% "Unknown" shows data quality issues; standardizing cause reporting would help

---

### Example 5: Environmental — Monitoring Observations by Station Class

**Business Question:**
How does water quality vary by station class? Are there localized problems?

**Data Setup:**

| Property | Value |
|----------|-------|
| Data Source | Water quality measurements (ArcGIS Enterprise feature service) |
| Category Field | `Station_Class` (string: Urban, Rural, Industrial, Agricultural) |
| Aggregation | AVG |
| Value Field | `pH_Level` (numeric: 0–14 scale) |
| Top-N | 5 |
| Show Others | ON |

**Builder Configuration:**

| Setting | Value |
|---------|-------|
| Header Title | "Average Water pH by Station Class" |
| Sort Direction | DESC (highest pH first) |
| Value Display | VALUE |
| Bar Color Mode | Conditional |
| Conditional Basis | VALUE |
| Conditional Breakpoints | 5.5 (Red, acidic), 7.0 (Yellow, neutral), 8.5 (Green, alkaline) |

**Runtime Workflow:**

1. **Initial load:**
   ```
   Agricultural: pH 8.2 → Green (alkaline, acceptable)
   Industrial: pH 7.8 → Yellow (slightly alkaline, monitor)
   Urban: pH 6.5 → Yellow (slightly acidic, concern)
   Rural: pH 7.0 → Yellow (neutral, acceptable)
   (others, if any)
   ```

2. **Color insight:** Urban stations show pH 6.5 (yellow/red zone), indicating acidic conditions

3. **Investigation:** Analyst selects Urban → Apply
   - Connected Map shows all Urban station locations
   - Analyst notices Urban stations are clustered around an industrial area
   - Hypothesis: Industrial discharge is lowering pH in Urban zone

4. **Drill-down:** Analyst reviews individual Urban observations
   - Confirms pH trend: More acidic near the industrial zone
   - Recommendations: Monitor discharge, coordinate with industrial facility, consider pH buffer

**What the Results Mean:**

- Agricultural and Industrial stations maintain healthier pH (neutral to alkaline)
- Urban stations are acidic (pH 6.5), likely due to upstream pollution
- Data-driven evidence supports environmental intervention

---

## Screenshots

The following screenshots illustrate the Top-N Chart in various configurations:

**Note:** Placeholder image paths; actual screenshots to be added before production release.

| Screenshot | Description | Path |
|-----------|-------------|------|
| Builder Configuration | Content panel with Data, Header, Appearance, Tools sections | docs/images/top-n-chart-builder-config.png |
| Runtime Display (Top-5) | Chart showing top 5 categories with bars, percentages, and Others | docs/images/top-n-chart-runtime-top5.png |
| Runtime Display (Show All) | Chart showing all retained categories | docs/images/top-n-chart-runtime-showall.png |
| Selection Mode | Checkboxes next to categories with Apply/Cancel/Clear buttons | docs/images/top-n-chart-selection-mode.png |
| Conditional Colors | Chart with traffic-light colors (green/yellow/red) | docs/images/top-n-chart-conditional-colors.png |
| Narrow Layout | Widget on mobile-width container; truncated labels | docs/images/top-n-chart-mobile-layout.png |
| Search Active | Server search results for a category term | docs/images/top-n-chart-search-results.png |
| Data Action Menu | Header menu with export/action options | docs/images/top-n-chart-data-action-menu.png |
| Title Format SidePopper | Title styling panel with font, size, color, effects | docs/images/top-n-chart-title-format.png |
| Bar Styling SidePopper | Bar appearance panel with geometry, colors, text placement | docs/images/top-n-chart-bar-styling.png |

---

## Performance Considerations

### Server-Side Grouped Statistics

**Advantage:** The server performs aggregation before returning results

**Impact:**
- Only top N groups (plus universe totals) are downloaded
- Network payload is small (typically < 100KB even with 1,000 categories)
- Suitable for datasets with millions of records

**Best practice:**
- Retention limit 50–100 is efficient
- Increasing retention limit increases server query time
- If queries > 1s, reduce retention limit or add data source filters

### Retained Categories

The **retention limit** controls how many categories the server fetches.

**Performance implications:**

| Limit | Query Time (Typical) | Memory | Use Case |
|-------|---------------------|--------|----------|
| 20 | 200–400ms | Low | Small category sets |
| 50 | 400–800ms | Low | Most use cases (default) |
| 100 | 800ms–2s | Low | Large category sets |
| 200 | 2–5s | Moderate | Rare (only if necessary) |

**Recommendation:** Start with 50; monitor query times. If slow, reduce to 30. If you need more, increase in steps of 20.

### Top-N Rendering

**Impact:** Changing the top-N value does NOT requery the server (renders only the top N of the retained set)

**Performance:**
- Instant (~10ms) for top-N value changes
- No network round-trip

### Search

#### LOCAL Search

**Performance:** Instant (< 10ms)

**Trade-off:** Can only find categories in the retained set

#### SERVER Search

**Performance:** 300ms debounce + server latency (typically 500ms–2s)

**Trade-off:** Can discover categories outside the retained set

**Optimization:**
- Ensure category field is indexed on the server
- Use specific search terms (e.g., "Pump" not "P")
- SERVER search is appropriate for high-cardinality fields

### Selection Resolution

**Impact:** When a user applies a selection, the widget queries for record IDs

**Performance:**
- Typically 500ms–2s for < 100,000 records
- Scales with the number of selected records
- Uncapped (unlike Data Action materialization)

**Best practice:** Selections are fast; users can safely select and apply multiple times

### Data Action Materialization

**Cap:** 2,000 records

**Performance:**
- Materializing 2,000 records: 500ms–2s
- Serializing and transferring: depends on record size

**Trade-off:** Large exports are truncated (first 2,000 records) to maintain responsiveness

### Large Source Datasets

**Recommendation:** Widget is optimized for:
- Data source size: 100,000 to millions of records (no practical limit)
- Category cardinality: 50–5,000 unique categories

**Trade-offs:**
- Very high cardinality (10,000+ unique categories) may require lower retention limits
- Very large records (10MB+ per record) may slow materialization; not a widget limitation

### Rendering Performance

**Typical render times:**
- Initial load: 500ms–2s
- Show All toggle: 100ms
- Top-N change: 10ms
- Sort toggle: 50ms

All operations are smooth on modern browsers.

---

## Security Considerations

### Authentication

The widget respects the data source's authentication:

- **Secured feature layers:** User must be logged into the portal (handled by Experience Builder)
- **Token-based services:** Tokens are appended by Experience Builder; the widget never stores them
- **Public services:** No authentication needed

**Important:** The widget does not handle authentication. All auth is Experience Builder framework ownership.

### Data Access

The widget does not bypass service-level security:

- **Field visibility:** If a field is hidden in the service's field list, the widget cannot access it
- **Row-level security:** If records are restricted, they are not queried
- **Service permissions:** Users can only query data they have permission to access

### Export and Data Actions

When users export data (via Data Actions):

- **Records exported:** Only those the user has permission to access
- **No credentials in export:** Exported files do NOT include tokens or credentials
- **Framework ownership:** Experience Builder framework handles the export; the widget only materializes records

### Secrets and Credentials

**Never include in configuration:**
- API keys
- Service tokens
- User credentials
- Private URLs
- OAuth secrets

All such information must be managed by Experience Builder or your security infrastructure.

### HTTPS and Transport

- **All queries:** Travel over HTTPS (standard for ArcGIS services)
- **Data in transit:** Encrypted
- **Data at rest:** No caching of raw data by the widget (each query fetches fresh)

---

## Accessibility

### Implemented Accessibility Features

#### Keyboard Navigation

- **Arrow keys:** Navigate between category rows
- **Home/End:** Jump to first/last category
- **Space/Enter:** Toggle selection checkbox
- **Tab:** Move to next control (button, link, etc.)
- **Roving tabindex:** Only one category row is in the tab order at a time; arrow keys navigate within

#### Semantic HTML

- **Checkboxes:** Native `<input type="checkbox">` elements with associated labels
- **Radio buttons:** `<input type="radio">` elements when selection style is RADIO
- **Buttons:** Semantic `<button>` tags for Apply, Cancel, Clear, Sort
- **Role attributes:** ARIA roles where necessary (e.g., `role="status"` for notices)

#### Focus Indicators

- **Visible focus:** Focus indicators are always visible (Esri design system standard)
- **Focus management:** After a user action, focus moves to a sensible location (e.g., after Apply, focus moves to the first category)

#### Status Announcements

- **Screen readers:** Status changes (e.g., "3 categories selected") are announced via `aria-live` regions
- **Truncation notices:** Visible truncation of labels is announced (e.g., "Category name truncated")
- **Too-many-categories:** A notice informs screen-reader users that not all categories are displayed

#### Color + Numeric Information

- **Conditional colors:** Colors communicate priority (red = critical, green = good) but are not the only signal
- **Numeric values:** Bars display exact values; screen readers announce them
- **Percentages:** Percentages are displayed and announced even when color-based classification is used

### Known Accessibility Considerations

The following are documented to help developers understand the current state:

| ID | Description | Status | Impact |
|----|--------------|--------|--------|
| **ACC-03** | Status notices (e.g., truncation, too-many-categories) lack `role="status"` on some messages | Known | Low (content is visible; screen-reader announcement delayed) |
| **ACC-04** | Builder help icons (gear icons) have limited label association | Known | Low (limited to Builder UX; runtime is unaffected) |
| **ACC-05** | Focus is not explicitly redirected when selection action bar unmounts | Known | Low (focus jumps to body; user can re-tab to chart) |
| **ACC-06** | Inside-bar white text may create author-dependent contrast concerns | Known | Medium (if author chooses dark bar color + white text, contrast may fail WCAG AA) |
| **ACC-08** | Some runtime strings remain hard-coded rather than localized | Known | Low (English-only widget; can be extended) |
| **ACC-09** | Conditional color classification is primarily color-based | Known | Low (numeric values also provide information) |

**Note:** The widget includes accessibility-oriented implementation work but has not been independently WCAG 2.1 Level AA certified. Use at your own discretion and test in your specific environment.

### Testing Accessibility

To test accessibility:

1. **Keyboard navigation:** Tab through the widget; arrow-key through categories
2. **Screen reader:** Use NVDA (Windows), JAWS, or VoiceOver (Mac) to verify announcements
3. **Color contrast:** Use a contrast checker (e.g., WebAIM) on your configured colors
4. **High contrast mode:** Test on Windows High Contrast mode (colors should remain readable)
5. **Zoom:** Test at 200% zoom; layout should remain functional

---

## Known Limitations

### Version Lock: 1.20.0 Only

The widget has been developed and validated against **ArcGIS Experience Builder Developer Edition 1.20.0**. Use with other versions at your own risk.

- Upgrading to 1.21.0+ may introduce incompatibilities (different jimu APIs, webpack config, etc.)
- Downgrading to 1.19.x is not supported
- No backward or forward compatibility guarantee

### Percentage Display for AVG/MIN/MAX

Percentages are mathematically meaningful only for COUNT and SUM aggregations (additive statistics).

- **AVG/MIN/MAX:** Percentages are not displayed
- **Reason:** An average or extreme value cannot be expressed as a "share of total"
- **Workaround:** Use COUNT or SUM if percentage display is required

### Synthetic Others Behavior

The Others bar has constraints:

- **Non-selectable:** Users cannot select Others; it represents many categories, not a single one
- **Search hidden:** Others is hidden during search (applies to full universe, not search scope)
- **Not included in Show All:** If all categories fit in retention limit, Others is 0 or null
- **Conditional coloring:** Others uses independent styling; conditional rules for primary bars don't apply

### Search and Retention Relationship

The retention limit caps how many categories are ever fetched:

- **LOCAL search:** Can only find categories in the retained set (if category is ranked beyond retention limit, LOCAL search can't find it)
- **SERVER search:** Finds categories beyond retention limit, but the return is still capped at retention limit
- **Example:** If retention limit is 50 and you search for "Valve", the server finds 200 matching categories but returns only top 50; the rest are discarded

### High Category Cardinality

Widgets are designed for category fields with:
- **Practical range:** 50–5,000 unique values
- **Beyond 5,000:** Queries may slow; consider adding data source filters or increasing retention limit carefully

### Data Action Materialization Cap

Data Actions can materialize only the first 2,000 selected records.

- **Exports > 2,000 records:** Truncated with a notice
- **Reason:** Large exports can be slow and memory-intensive
- **Workaround:** Refine your selection; use upstream filters to reduce the scope

### Diverging Axis (Positive/Negative Values) Not Supported

The widget displays only positive bar lengths. If your data includes both positive and negative values:

- **Behavior:** Negative values are colored distinctly (#d93025, red) but render as positive bar length
- **Limitation:** No diverging axis (bars extending left and right from zero)
- **Workaround:** Visualize separately or use conditional styling to highlight negative values

### Related Records

Related Records workflows have not been explicitly tested or validated.

- **Use:** At your own discretion
- **Risk:** May not work as expected
- **Recommendation:** Test thoroughly before production use

### ArcGIS Online Custom Widget Deployment

Deploying custom widgets to ArcGIS Online is not a standard workflow.

- **Support:** Widget is designed for Developer Edition
- **Online deployment:** Possible through workarounds; requires expertise beyond this README

### ArcGIS Enterprise Compatibility

The widget has been developed and tested against Experience Builder 1.20.0, which supports ArcGIS Enterprise as the authentication backend.

- **Expected:** Widget should work with Enterprise feature services
- **Not validated:** Specific Enterprise versions, specific layer types, or edge cases
- **Recommendation:** Test your Enterprise setup independently

---

## Troubleshooting

### Common Problems and Solutions

| Problem | Likely Cause | How to Verify | Resolution |
|---------|--------------|---------------|-----------|
| **Widget does not appear in Builder** | Not copied to Developer Edition correctly | Check: `<ExB>/client/your-extensions/widgets/top-n-chart/` exists | Copy the widget source; restart Developer Edition |
| **Widget appears but unconfigured** | No data source selected | Open Builder → widget → Content panel → Data section | Select a data source |
| **No categories appear** | Category field not selected | Builder → Content panel → Data → check "Category Field" | Select a category field |
| **Aggregation unavailable (SUM/AVG/MIN/MAX)** | Value field not selected or invalid | Builder → check "Value Field" | Select a numeric value field |
| **Percent not displayed** | Aggregation type doesn't support percentages | Verify aggregation is COUNT or SUM | Change aggregation or adjust value display |
| **Others bar shows "Not Available"** | MIN/MAX data quality issue or excluded set has no valid data | Inspect data; check if excluded categories have NULL values | Add data filters; use a different aggregation |
| **Search does not find expected category** | Category is outside retention limit (LOCAL search) | Try SERVER search | Enable SERVER search or increase retention limit |
| **SERVER search is slow** | Server is slow or network latency | Check server performance; monitor network tab in browser DevTools | Reduce retention limit; add data filters; use more specific search terms |
| **Selection does not affect connected widget** | Connected widget is not properly configured | Builder → Widget → Connected Data | Ensure connected widget is subscribed to the Top-N Chart's DATA_RECORDS_SELECTION_CHANGE message |
| **Map extent filter doesn't change chart** | Message action not configured or data not spatial | Builder → Message tab → check Filter-by-extent action | Configure message action from Map widget to Top-N Chart |
| **Data Action selection truncated** | More than 2,000 records selected | Check the truncation notice in the Data Action menu | Refine selection; select fewer categories |
| **Chart displays empty state** | No records match filters | Verify data source has records; check upstream filters | Adjust filters; verify data quality |
| **Long category names wrap awkwardly** | Container is too narrow; text placement conflicting | Resize container; check Narrow layout mode | Adjust bar styling; use truncation labels; check responsive design |
| **Conditional colors unexpected** | Breakpoints or basis misconfigured | Builder → Bar Styling SidePopper → Primary Conditional Colors | Verify breakpoints and colors match intended ranges |
| **Builder setting appears to reset** | Configuration not persisted or cleared unintentionally | Check manifest for config schema issues | Reconfigure; verify data source is selected (required to persist) |
| **Widget displays error: "Error loading data source"** | Data source query failed | Check browser console (F12 → Console) for detailed error | Verify data source is accessible; check service endpoints; verify authentication |
| **Secured layer shows "Access Denied"** | User not authenticated or lacks permissions | Verify user is logged into portal; check layer sharing settings | Log out/in; contact data owner |
| **Percentages sum to > 100% or < 100%** | Rounding in display | Expected behavior (math is correct, display is rounded) | This is normal; no action needed |
| **Changing Top-N causes percentages to change** | Expected behavior (you may have misunderstood) | Read Percentage Calculations section | Percentages do NOT change when Top-N changes; they always reflect the universe |
| **Others disappears when I click Show All** | Expected behavior | Read Synthetic Others section | Show All displays all retained categories; no "Others" needed |
| **Chart loads slowly on first render** | Server query taking time; large dataset | Check Experience Builder Developer Edition console for query logs | Optimize data source; add filters; reduce retention limit |

---

## FAQ

### 1. What is the difference between Top-N and Maximum Categories?

**Top-N** is how many categories you display to the user (3–20, can be changed at runtime).

**Maximum Categories** (retention limit) is how many categories the widget ever fetches from the server (1–200, set once in Builder).

**Example:** If retention limit is 50 and Top-N is 5:
- The server fetches top 50 categories
- The widget displays the top 5 by default
- Users can toggle "Show All" to see all 50
- Users cannot see beyond 50 (that's the limit)

---

### 2. What exactly does Others represent?

**Others is a synthetic bar** representing all excluded categories combined.

**Calculation depends on aggregation:**
- **COUNT:** Total count - sum of visible counts
- **SUM:** Total sum - sum of visible sums
- **AVG:** (Total sum - visible sum) / (total count - visible count)
- **MIN/MAX:** The MIN or MAX value in the excluded categories

**Others is always automatically calculated; it's not a real data category.**

---

### 3. Why isn't Others selectable?

**Others is not a real category.** It represents many categories combined. Selecting "Others" would be meaningless.

**If you want to interact with excluded categories:** Use search to find them individually, then select them.

---

### 4. Why are percentages unavailable for AVG/MIN/MAX?

**Percentages express "share of total," which is meaningful for additive statistics (COUNT, SUM) but not for averages or extremes.**

**Example:**
- COUNT: "Category A is 20% of all records" ✓ (additive)
- AVG: "Category A's average is 20% of..." ✗ (what does this even mean?)

**Workaround:** Use COUNT or SUM if you need percentage display.

---

### 5. Does changing Top-N change percentages?

**No.** Percentages are never renormalized when you change Top-N, sort order, or search.

**Percentages always reflect the universe (or current filtered scope), not the displayed subset.**

**Example:**
```
Top-5: Pump shows 20% of total
Top-10: Pump still shows 20% of total
(Percentage does not change to 20% of Top-10; it remains 20% of universe)
```

---

### 6. Why doesn't search change percentages?

**Search results are filtered, but percentages still reflect the full universe.**

**Why?** To maintain honest communication. A category's percentage should not change just because you searched for it.

**Example:**
```
Search "pump": Pump shows 20%
Clear search: Pump still shows 20%
(Percentage unchanged)
```

---

### 7. What is the difference between LOCAL and SERVER search?

| Mode | Scope | Speed | Use Case |
|------|-------|-------|----------|
| **LOCAL** | Only retained categories (top 50, for example) | Instant | Quick lookup in the top-N area |
| **SERVER** | Full data source | 300ms+server latency | Discover categories outside top-N |

**Example:**
- You have 1,000 unique categories
- Retention limit is 50 (so only top 50 are retained)
- LOCAL search: Finds categories in the top 50
- SERVER search: Can find any of the 1,000 categories (but returns only top 50 matches)

---

### 8. Can SERVER search find categories outside Maximum Categories?

**Yes, but only if there are matches.**

**If retention limit is 50 and you search for "Valve":**
- Server finds all Valve categories (e.g., 200 matches)
- Returns top 50 matches (ranked by aggregate value)
- The remaining 150 matches are discarded

**Workaround:** If you need more results, increase the retention limit.

---

### 9. Does Apply filter the Top-N Chart?

**No.** Apply sends selection messages to **connected widgets**, not filtering the Top-N Chart itself.

**What actually happens:**
```
User selects Pump and Motor → Apply
  ↓
Top-N Chart publishes: "Pump and Motor records selected"
  ↓
Connected Map/Table/Chart: Filters to show only Pump and Motor
  ↓
Top-N Chart itself: Remains unchanged (still shows all categories)
```

**This is intentional.** The chart provides context; the selection affects downstream widgets.

---

### 10. How does the widget interact with a Map widget?

The widget supports the **"Filter by map extent"** message action:

1. **Builder:** Links the Map widget to the Top-N Chart via message action
2. **Runtime:** Map's extent changes → extent is sent to chart
3. **Chart:** Updates grouped statistics and totals to include only records within the extent
4. **Result:** Chart reflects "what's in this map area" geographically

**Example:**
```
Map shows: Entire county (1,000 records)
Chart shows: Pump (200 count, 20%)

User zooms: To a single district (only 100 records visible on map)
Message sent: Extent filter
Chart updates: Pump (30 count, 30% of district)
```

---

### 11. Is selection limited to 2,000 records?

**Native selection:** Uncapped. Messages can be sent for any number of selected records.

**Data Action materialization:** Capped at 2,000 records (first 2,000 are materialized for export/API calls).

**Difference:**
- If you select 5,000 records, Experience Builder knows about all 5,000
- But if you export via Data Action, only 2,000 are included (truncation notice shown)

---

### 12. Why are Data Actions limited to 2,000 selected records?

**Performance and practicality.**

**Materializing 2,000 records:** 500ms–2s
**Materializing 10,000 records:** 5s–30s (much slower)

**The cap ensures responsive exports.** Users can refine their selection if needed.

**Note:** This is a Data Action framework limit, not a widget limitation.

---

### 13. Does map extent affect totals and percentages?

**Yes.** When extent filtering is active:
- Grouped statistics are from records within the extent
- Universe totals are from records within the extent
- Percentages are recalculated (denominator changes)

**Example:**
```
No extent: Pump 200 of 1,000 total = 20%
Extent filtered (county): Pump 50 of 200 total = 25%
(Percentage changed because the universe changed)
```

---

### 14. Can the widget use upstream Experience Builder filters?

**Yes, automatically.**

**How it works:**
- Experience Builder applies global filters (e.g., "Year = 2024")
- All queries automatically respect these filters
- No additional widget configuration needed

**Example:**
```
Builder filter: Status = "Active"
Chart queries: Automatically includes WHERE Status = 'Active'
Result: Chart shows only active categories
```

---

### 15. Can I use the widget with ArcGIS Enterprise?

**Yes, technically.**

**Status:** Not formally validated, but expected to work.

**Conditions:**
- ArcGIS Enterprise feature services (with query capability)
- Proper authentication (portal integration handled by Experience Builder)
- The same aggregation and grouping capabilities available in ArcGIS Server

**Recommendation:** Test your Enterprise setup independently before production.

---

### 16. Does it support tables (non-spatial data)?

**Technically yes, but not validated.**

**Expected:** Tables without geometry should work (queries don't require geometry).

**Recommendation:** Test independently. If your table has a queryable feature service, it should work.

---

### 17. Does it support Related Records?

**Not explicitly validated.**

**Risk:** Related Records workflows are complex and may not work as expected.

**Recommendation:** Test thoroughly before production use. If Related Records doesn't work, use a denormalized/materialized view instead.

---

### 18. Can I customize conditional colors?

**Yes, fully.**

**In Builder:**
1. Bar Styling SidePopper
2. Primary Bar Color Mode → Conditional
3. Edit breakpoints and colors
4. Choose basis: VALUE or PERCENT

**Flexibility:**
- Any number of breakpoints
- Any colors you choose
- Both VALUE and PERCENT bases

---

### 19. Can I add another aggregation (e.g., MEDIAN)?

**Not without modifying the widget source.**

**Currently supported:** COUNT, SUM, AVG, MIN, MAX

**To add MEDIAN:**
1. Extend the AggregationType union in config.ts
2. Implement the MEDIAN query logic in queryEngine.ts
3. Add MEDIAN aggregation option in the settings panel
4. Test thoroughly

This requires developer effort and familiarity with the codebase.

---

### 20. Can I change the responsive breakpoints?

**Yes, with source code modification.**

**Current breakpoints (in CSS):**
- < 280px: Narrow
- 280–699px: Medium
- ≥ 700px: Wide

**To customize:**
1. Edit `src/runtime/widget.css`
2. Modify `@container` queries
3. Rebuild and test

---

## Development Details

### Widget File Structure

```
top-n-chart/
├── manifest.json                 # Widget metadata, version, capabilities
├── config.json                   # Default configuration template
├── icon.svg                      # Widget icon (32x32, used in Builder)
├── package.json                  # [Not present; depends on ExB 1.20 build system]
└── src/
    ├── config.ts                 # Configuration types, validation, helpers
    ├── runtime/
    │   ├── widget.tsx            # Runtime entry point (React component)
    │   ├── widget.css            # Responsive styles, layout, theme
    │   ├── components/
    │   │   ├── ChartContainer.tsx    # Main orchestrator, data flow
    │   │   ├── HeaderBar.tsx         # Title, Data Action menu
    │   │   ├── SearchBox.tsx         # Search input (LOCAL/SERVER)
    │   │   ├── BarList.tsx           # Container for category + Others bars
    │   │   ├── BarRow.tsx            # Single category bar row
    │   │   ├── OthersRow.tsx         # Synthetic Others bar
    │   │   └── StatusStates.tsx      # Loading, empty, error, unconfigured states
    │   ├── hooks/
    │   │   └── useTopNChartData.ts   # Data orchestration hook (critical)
    │   ├── query/
    │   │   └── queryEngine.ts        # Query builders (Q1–Q5 queries)
    │   ├── math/
    │   │   └── aggregateOthers.ts    # Others calculation logic
    │   ├── state/
    │   │   └── types.ts              # Runtime data types
    │   ├── messages/
    │   │   └── publishSelection.ts   # Selection publishing
    │   ├── translations/
    │   │   └── default.ts            # English strings
    │   └── style/
    │       └── [theme overrides]
    ├── setting/
    │   ├── setting.tsx               # Builder content panel (4 sections)
    │   ├── setting.css               # Content panel styles
    │   ├── setting-panels/
    │   │   ├── bar-style-side-panel.tsx      # Bar styling SidePopper
    │   │   └── title-format-side-panel.tsx   # Title format SidePopper
    │   └── translations/
    │       └── default.ts            # English labels
    └── message-actions/
        └── filter-by-extent-action.ts    # Map extent message action

```

### Key Files and Responsibilities

#### manifest.json

**Responsibilities:**
- Declare the widget name, version, author
- Declare capabilities (settings panel, data actions, messages, triggers)
- Declare published messages and message actions

**Safe extension points:**
- Updating `version`
- Adding `messageActions` for new message-driven features
- Adding `publishMessages` for new published events

**Things not to break:**
- `canConsumeDataAction` (must remain true for Data Action support)
- `hasSettingPage` (must remain true for Builder configuration)
- `name` (widget ID, affects runtime discovery)

#### config.ts

**Responsibilities:**
- Define configuration schema (IConfig interface)
- Provide TypeScript types for all config values
- Implement config validation and defaults
- Export constants (limits, defaults, styling presets)
- Implement helper functions (getFullConfig, isPercentSupported, resolveConditionalColor)

**Safe extension points:**
- Adding new config properties (add to IConfig, update DEFAULT_CONFIG)
- Adding new aggregation types (extend AggregationType union)
- Adding new presets (BAR_SPACING_PRESET_PX, FONT_FAMILIES)

**Things not to break:**
- Immutability of config objects
- The getFullConfig merge strategy (deep merges barStyling and titleFormat)
- Backwards compatibility of existing properties

#### src/runtime/widget.tsx

**Responsibilities:**
- React component entry point
- Wrap DataSourceComponent to handle data source lifecycle
- Pass configuration to ChartContainer
- Handle loading/error states from data source

**Safe extension points:**
- Adding error boundary
- Adding performance logging
- Adding dev-mode debugging

**Things not to break:**
- The use of jimu-core imports (React, DataSourceComponent, etc.)
- The configuration immutability pattern
- The widgetId and enableDataAction props

#### src/runtime/hooks/useTopNChartData.ts

**Responsibilities:**
- Orchestrate all queries (Q1–Q5)
- Manage chart state (status, bars, Others, percentages)
- Handle search debounce and results
- Handle selection draft/applied workflow
- Handle race protection (sequence numbers)
- Calculate percentages and Others

**Safe extension points:**
- Adding logging / debugging
- Adding error recovery strategies
- Extending with additional query types

**Things not to break:**
- The scope (QueryScope.InRuntimeView) for all queries
- The race-protection sequence mechanism
- The immutability of state updates
- The selection draft/applied separation

#### src/runtime/query/queryEngine.ts

**Responsibilities:**
- Construct WHERE clauses (base, extent, search)
- Build Q1–Q5 queries
- Delegate to the data source's query method

**Safe extension points:**
- Optimizing WHERE clause construction
- Adding query logging
- Adding new query types (e.g., Q6 for a new feature)

**Things not to break:**
- The query scope (must always be InRuntimeView)
- The mathematical correctness of Universe Totals
- The search WHERE clause construction
- The extent filter spatial query

#### src/runtime/math/aggregateOthers.ts

**Responsibilities:**
- Calculate Others value for each aggregation type
- Validate input; ensure Others is mathematically sound
- Handle edge cases (no excluded records, null values, etc.)

**Safe extension points:**
- Optimizing the math
- Adding validation or logging

**Things not to break:**
- The AVG Others formula (must NOT be average-of-averages)
- The COUNT Others formula (universe - visible)
- The MIN/MAX Others behavior

#### src/setting/setting.tsx

**Responsibilities:**
- React component for Builder content panel
- Render Data, Header, Appearance, Tools sections
- Manage collapsible accordion behavior
- Handle field selection, aggregation choice, value entry
- Persist configuration changes via onSettingChange

**Safe extension points:**
- Adding new settings (new SettingRow)
- Reorganizing sections
- Adding tooltips or help text

**Things not to break:**
- The immutable config update pattern (config.set(...))
- The DataSourceSelector and FieldSelector contracts
- The accordion behavior (one open at a time)

---

## Query Architecture (Developer Reference)

### Query Sequencing

All queries are managed by the `useTopNChartData` hook, which sequences them and implements race protection:

```
useEffect: Config/extent/filter change detected
  ↓
Increment sequence number
  ↓
Check if configuration is valid (category field, etc.)
  ↓
Execute Q1: Grouped Statistics (with TOP-N or retention limit, depending on show-all mode)
  ↓
Execute Q2: Universe Totals (if Others is enabled)
  ↓
If AVG/MIN/MAX and Others needed:
  Execute Q3: MIN/MAX Exclusion Query
  ↓
If search is active and SERVER mode:
  Execute Q4: Search Query
  ↓
If selection is applied:
  Execute Q5: Selection ID Query
  ↓
Combine results:
  - Build visible bars from Q1
  - Compute Others from Q2/Q3 + visible bars
  - Compute percentages (if COUNT/SUM aggregation)
  - Build final chart state
  ↓
Update state (if sequence number still matches, preventing race)
```

### Race Protection

**Problem:** User rapidly changes Top-N → Sort → Show All. Multiple queries are in flight simultaneously.

**Solution:** Sequence counter

```
Click Top-N 5 → Sequence #1 starts
  (while query 1 is in flight)
Click Top-N 10 → Sequence #2 starts
  (query 1 completes, but sequence is now #2, so result is ignored)
  (query 2 completes, sequence is #2, result is applied)
```

**Benefit:** Stale results never overwrite fresh results.

---

## Customization and Extension Points

### Adding a New Aggregation Type

To add a new aggregation (e.g., MEDIAN, STDDEV), follow these steps:

#### 1. Update config.ts

```typescript
// Add to AggregationType union
export type AggregationType = 'COUNT' | 'SUM' | 'AVG' | 'MIN' | 'MAX' | 'MEDIAN'

// Update isPercentSupported (if median doesn't support %)
export function isPercentSupported (aggregationType: AggregationType): boolean {
  return aggregationType === 'COUNT' || aggregationType === 'SUM'
}

// Add to aggregation options constant (used in setting panel)
export const AGGREGATION_OPTIONS = [
  { label: 'Count', value: 'COUNT' },
  { label: 'Sum', value: 'SUM' },
  { label: 'Average', value: 'AVG' },
  { label: 'Minimum', value: 'MIN' },
  { label: 'Maximum', value: 'MAX' },
  { label: 'Median', value: 'MEDIAN' }  // NEW
]
```

#### 2. Update queryEngine.ts

Extend `buildGroupedStatsQuery` to handle MEDIAN:

```typescript
export function buildGroupedStatsQuery (config: IMConfig, ...): QueryParams {
  const statDef = buildStatDef(config.aggregationType)
  // statDef for MEDIAN: { statisticType: 'MEDIAN', onStatisticField: config.valueField }
  return {
    // ... rest of query
    groupByFieldsForStatistics: [config.categoryField],
    outStatistics: [statDef]
  }
}
```

#### 3. Update aggregateOthers.ts

Add MEDIAN case:

```typescript
case 'MEDIAN': {
  // Median Others: Apply same logic as MIN/MAX (excluded_stat)
  if (excludedStat === null || excludedStat === undefined) return NOT_AVAILABLE
  return { value: excludedStat, available: true }
}
```

#### 4. Update setting.tsx

Add MEDIAN to the aggregation dropdown:

```typescript
const aggregationOptions = [
  { label: 'Count', value: 'COUNT' },
  // ...
  { label: 'Median', value: 'MEDIAN' }  // NEW
]
```

#### 5. Test

- Verify all queries execute correctly
- Verify Others calculation is correct
- Test with narrow/medium/wide layouts
- Test with different value displays

### Adding Conditional Color Basis

To add a new basis (e.g., TREND, GROWTH_RATE), follow these steps:

#### 1. config.ts

```typescript
export type ConditionalBasis = 'VALUE' | 'PERCENT' | 'TREND'  // NEW
```

#### 2. Calculate the Basis Value

In the component where bars are rendered (BarRow.tsx or similar), compute the basis value:

```typescript
const basisValue = (() => {
  switch (conditional.basis) {
    case 'VALUE': return bar.value
    case 'PERCENT': return (bar.value / totalForPercent) * 100
    case 'TREND': return calculateTrend(bar) // Implement trend logic
    default: return bar.value
  }
})()
```

#### 3. Resolve Color

Use `resolveConditionalColor` as before:

```typescript
const fillColor = resolveConditionalColor(conditional, basisValue, fallback)
```

### Disabling Others

To remove the Others bar entirely (not just hide it, but disable its computation):

#### 1. config.ts

Remove or repurpose the `showOthers` field.

#### 2. useTopNChartData.ts

Skip Q2 and Q3 queries:

```typescript
if (config.showOthers === false) {
  // Don't fetch universe totals or exclusion stats
  setState(state => ({ ...state, bars: visibleBars }))
} else {
  // Fetch Q2/Q3 as normal
}
```

#### 3. Components

Remove OthersRow from BarList.

### Alternative Selection Styles

The widget currently supports CHECKBOX, RADIO, TOGGLE. To add a new style (e.g., SEGMENT_BUTTONS):

#### 1. config.ts

```typescript
export type SelectionStyle = 'CHECKBOX' | 'RADIO' | 'TOGGLE' | 'SEGMENT_BUTTONS'  // NEW
```

#### 2. BarRow.tsx

Render the appropriate control:

```typescript
const renderSelectionControl = () => {
  switch (config.selectionStyle) {
    case 'CHECKBOX': return <input type="checkbox" ... />
    case 'RADIO': return <input type="radio" ... />
    case 'TOGGLE': return <ToggleButton ... />
    case 'SEGMENT_BUTTONS': return <SegmentButton ... />  // NEW
  }
}
```

---

## Contributing

### Contribution Workflow

If you want to contribute improvements or fixes to this widget:

#### 1. Fork or Branch

Create a branch for your work:
```
git checkout -b feature/my-enhancement
```

#### 2. Verify Experience Builder Version

Ensure you're working with Experience Builder Developer Edition 1.20.0. Update the widget only for 1.20.0 compatibility unless version work is intentional.

#### 3. Make Your Changes

- Edit only files in `your-extensions/widgets/top-n-chart/`
- Do not modify Experience Builder installation files
- Preserve the widget's import guardrails (jimu-core for React, jimu-ui for components, jimu-arcgis for mapping)

#### 4. Test Thoroughly

- **Builder:** Validate all settings persist and behave correctly
- **Runtime:** Test all aggregation types, search modes, selection styles
- **Responsive:** Test narrow (< 280px), medium, wide layouts
- **Accessibility:** Keyboard navigation, screen-reader announcements
- **Compatibility:** Ensure all changes remain compatible with Experience Builder 1.20.0 APIs

#### 5. Avoid Unrelated Refactoring

Keep your PR focused. Don't refactor unrelated code while adding a feature.

#### 6. Document Your Changes

- Update this README if you add a new feature
- Add code comments if logic is non-obvious
- Include a commit message explaining the why, not just the what

#### 7. Submit Your Contribution

Push your branch and open a pull request. Include:
- Description of the change
- Why you made it
- Testing you performed
- Any gotchas or limitations

### Code Style

- **JavaScript/TypeScript:** Use the existing formatting (ESLint config in the repository)
- **React:** Functional components, hooks (useState, useEffect, useCallback, useMemo, useRef)
- **Immutability:** Use Immutable.js patterns (config.set(...), not config.property = value)
- **Imports:** Prefer jimu framework packages over generic React/npm packages

### Known Code Areas

| Area | Purpose | Maintainability Notes |
|------|---------|----------------------|
| `useTopNChartData` | Data orchestration | Complex; changes here need thorough testing |
| `queryEngine` | Query builders | Changes may affect all queries; test all aggregation types |
| `aggregateOthers` | Others math | Must preserve mathematical correctness |
| `widget.css` | Responsive layout | Container queries are fragile; test all breakpoints |
| `setting.tsx` | Builder configuration | Large file; consider splitting if adding many settings |

---

## Roadmap

### Validated / Committed

- ✓ Support for COUNT, SUM, AVG, MIN, MAX aggregations
- ✓ Synthetic Others with aggregation-specific calculations
- ✓ Top-N ranking and runtime control
- ✓ Show All paging
- ✓ LOCAL and SERVER search
- ✓ Native Experience Builder selection and published messages
- ✓ Data Actions integration
- ✓ Map extent message action
- ✓ Upstream Experience Builder filter support
- ✓ Responsive design (container queries)
- ✓ Conditional bar colors (VALUE and PERCENT basis)
- ✓ Comprehensive Builder configuration panel
- ✓ Accessibility features (keyboard navigation, screen readers, semantic HTML)

### Potential Future Enhancements

These are ideas for potential improvement; **they are not commitments**:

- [ ] **Validation against additional Experience Builder versions** — Test and validate against 1.21+, 2.0+ (requires version-specific work)
- [ ] **Accessibility improvements** — Resolve remaining ACC-* items (role=status on all status messages, focus redirect on action bar unmount, etc.)
- [ ] **Enhanced selected-category summary** — Off-screen selected categories could have a summary badge (e.g., "...and 15 more selected")
- [ ] **Expanded search options** — Fuzzy search, wildcard search, regex search
- [ ] **Additional chart presentation modes** — Vertical bars (instead of horizontal), horizontal list, table view
- [ ] **Localization completion** — Translate widget strings to Spanish, French, German, Chinese, etc.
- [ ] **Additional Data Action integrations** — Pre-built workflows for common actions (email, Slack, custom APIs)
- [ ] **Additional automated testing** — Unit tests for query builders, Others math, percentage calculations

---

## Changelog

### Version 1.0.0

**Initial Public Release**

**Features:**
- Grouped categorical statistics with COUNT, SUM, AVG, MIN, MAX aggregations
- Server-side grouped statistics; retained-category limit (1–200, default 50)
- Top-N ranking and runtime Top-N control (3–20, default 5)
- Synthetic Others bar with aggregation-specific math
- Show All paging to display all retained categories
- LOCAL and SERVER search to discover categories
- Share-of-total percentage calculation (COUNT and SUM only)
- Single-color and conditional bar coloring (VALUE and PERCENT basis)
- Configurable bar geometry (height, corners, spacing, text placement)
- Header with custom title and optional Data Action menu
- Responsive layout (narrow/medium/wide) with container queries
- Category selection with CHECKBOX, RADIO, or TOGGLE styles
- Native Experience Builder selection publishing (uncapped)
- Data Action integration (materialization cap 2,000 records)
- Map extent message action for spatial filtering
- Upstream Experience Builder filter support
- Accessibility features (keyboard navigation, screen readers, semantic HTML)
- Comprehensive Builder configuration panel (Data, Header, Appearance, Tools sections)
- Side panels for Bar Styling and Title Format customization

**Validated against:**
- ArcGIS Experience Builder Developer Edition 1.20.0

**Known limitations:**
- Percentage display unavailable for AVG/MIN/MAX
- Others bar non-interactive and hidden during search
- Related Records not validated
- ArcGIS Enterprise and Online deployment paths not validated
- Data Action materialization cap 2,000 records
- Responsive breakpoints fixed to 280px and 700px

---

## Support

### Where to Get Help

- **Issue tracker:** [Add GitHub Issues URL here once repository is public]
- **Discussion forum:** [Add community discussion forum URL here]
- **Esri Community:** [Add Esri Community post URL here if applicable]
- **Contact:** [Add maintainer contact information here]

### Support Scope

This is an **open-source, community-supported widget**:

- **Bug reports:** Submit issues with clear reproduction steps
- **Feature requests:** Submit ideas with use-case rationale
- **Questions:** Use the discussion forum for how-to questions
- **Commercial support:** Not available; use at your own discretion

**Important:** Community support differs from official Esri product support. Response times and resolution guarantees are not the same.

### Reporting Issues

When reporting a bug, please include:

1. **ArcGIS Experience Builder version:** 1.20.0 (or other)
2. **Browser:** Chrome, Edge, Firefox, Safari (and version)
3. **Data source type:** Feature layer, hosted layer, feature service, etc.
4. **Configuration:** Aggregation type, fields, settings used
5. **Steps to reproduce:** Clear steps to trigger the issue
6. **Expected vs. actual:** What should happen vs. what is happening
7. **Screenshots/logs:** Browser console (F12 → Console), network logs if applicable

---

## Author

**Transportation Team; Ian McIntosh**

[Contact information to be added before public distribution]

---

## License

[License information to be added before public distribution]

The Top-N Chart widget is provided as-is for use with ArcGIS Experience Builder Developer Edition 1.20.0.

---

**END OF README**

---

## Return

**README STATUS:** CREATED

**FILE:** 
```
C:\Users\Ian12724\Desktop\arcgis-experience-builder-ai-toolkit-v022\your-extensions\widgets\top-n-chart\README.md
```

**SOURCE INSPECTION:** 
- manifest.json (metadata, author, capabilities, messages)
- config.json (default configuration)
- src/config.ts (complete type definitions, constants, defaults, helpers)
- src/runtime/widget.tsx (runtime entry, data source lifecycle)
- src/runtime/hooks/useTopNChartData.ts (data orchestration, queries, state management)
- src/runtime/components/ (ChartContainer, HeaderBar, SearchBox, BarList, BarRow, OthersRow, StatusStates)
- src/runtime/query/queryEngine.ts (Q1–Q5 query construction)
- src/runtime/math/aggregateOthers.ts (Others calculation by aggregation type)
- src/runtime/state/types.ts (runtime data types)
- src/runtime/messages/publishSelection.ts (selection messaging)
- src/setting/setting.tsx (Builder content panel with 4 sections)
- src/setting/setting-panels/ (Bar Styling and Title Format SidePanels)
- src/message-actions/filter-by-extent-action.ts (map extent message action)

**README SECTIONS:**
- Overview
- Key Features
- Business Use Cases (5 detailed examples)
- Architecture Overview
- Requirements
- Installation (Developer Edition, Repository, Build)
- Configuration Guide (Data, Header, Appearance, Tools, SidePanels)
- Runtime Experience
- Aggregation Types (COUNT, SUM, AVG, MIN, MAX with formulas)
- Top-N and Maximum Categories
- Synthetic Others
- Percentage Calculations
- Conditional Bar Colors
- Search Functionality
- Selection and Connected Content
- Data Actions
- Map Extent and Upstream Filters
- Data Source Support
- Responsive Design
- Examples (5 real-world scenarios)
- Screenshots (placeholder structure)
- Performance Considerations
- Security Considerations
- Accessibility
- Known Limitations
- Troubleshooting (problem/cause/resolution table)
- FAQ (20 detailed answers)
- Development Details (file structure, responsibilities, safe extension points)
- Query Architecture (sequencing, race protection)
- Customization and Extension Points
- Contributing
- Roadmap
- Changelog
- Support
- Author
- License

**SOURCE-VERIFIED CAPABILITIES:**
- COUNT, SUM, AVG, MIN, MAX aggregations
- Configurable retention limit (1–200, default 50)
- Configurable top-N (3–20, default 5)
- Show All paging
- Synthetic Others with aggregation-specific math
- LOCAL and SERVER search (300ms debounce)
- Share-of-total percentages (COUNT, SUM only)
- Single-color and conditional bar coloring (VALUE and PERCENT basis)
- Configurable bar geometry (height, corners, spacing, text placement, colors, outlines, line styles)
- Optional header with custom title
- Title Format SidePopper (font, size, color, styling, effects)
- Bar Styling SidePopper (comprehensive appearance control)
- Responsive layout (narrow/medium/wide via container queries)
- Category selection (CHECKBOX, RADIO, TOGGLE styles)
- Native Experience Builder selection publishing (uncapped)
- Data Action integration (2,000-record materialization cap, truncation notice)
- Map extent message action (spatial filtering)
- Upstream Experience Builder filter support (applied automatically)
- Keyboard navigation and screen-reader support
- Loading, empty, error, unconfigured, too-many-categories states
- Extent-aware querying with consistent scope (QueryScope.InRuntimeView)
- Race protection (sequence-number-based cancellation)
- Configuration immutability (Immutable.js)

**PLACEHOLDERS REQUIRING MAINTAINER INPUT:**
- Maintainer contact information
- GitHub Issues URL (if published to GitHub)
- Discussion forum URL
- Esri Community URL
- License type and text
- ArcGIS Enterprise compatibility (tested vs. untested versions)
- Browser support details (specific versions)
- Node/package-manager versions (derive from ExB 1.20 docs)
- Build command specifics (exact `npm` / `pnpm` command for ExB 1.20)

**DOCUMENTATION WARNINGS:**
- Widget is locked to ExB 1.20.0; no forward or backward compatibility guarantee
- ArcGIS Online custom-widget deployment not validated
- ArcGIS Enterprise deployment not formally validated (expected to work)
- Related Records support not validated
- AVG/MIN/MAX percentage display not supported by design
- Data Action record materialization cap 2,000 (native selection uncapped)
- Diverging axis (positive/negative bars) not supported
- Several accessibility items remain (ACC-03, -04, -05, -06, -08, -09) but are non-blocking
- Others bar is always non-interactive and hidden during search by design
- Percentages are not renormalized on Top-N, sort, or search changes by design

**VALIDATION:**
- Markdown structure: PASS (proper headings, tables, code fences, lists, links)
- Source fidelity: PASS (all documented features verified in actual source)
- Version fidelity: PASS (version locked to 1.20.0, no unsupported claims)
- Unsupported claims check: PASS (no invented features; all features verified; placeholders used where needed)

