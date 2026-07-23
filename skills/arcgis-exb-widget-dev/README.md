# arcgis-exb-widget-dev

Developer playbook for operating coding agents with the `arcgis-exb-widget-dev` skill.

## When To Use

Use this skill when you want an agent to implement widget-level work such as:

- Creating a new Experience Builder widget
- Modifying an existing widget

## Quick Start

### Install

To use this skill, copy the `arcgis-exb-widget-dev` skill folder, and paste it under the correct path for your IDE / CLI agent:
- VS Code: `${root}/.github/skills/`
- Codex: `${root}/.agents/skills/`
- Claude Code: `${root}/.claude/skills/`
- Cursor: `${root}/.cursor/skills/`

### Invoke Skill

For VS Code, Codex, Claude Code, or Cursor, you can invoke the skill with the following prompt:

```
/arcgis-exb-widget-dev { Requirement Payload }
```

The requirement payload instructs the agent to follow `arcgis-exb-widget-dev`. The simplest payload must include at least: task type, target, goal.

Such as creating a new widget:

```
Create a new widget named "star-rating". When a user clicks a star from 1 to 5, the widget shows the rating and saves it to the configured data table. Each user can rate only once, and they can update their rating.
```

Or modifying an existing widget:

```
Modify the existing widget "measurement". Migrate the @arcgis/core/widgets to @arcgis/map-components.
```

## Human-in-the-loop (HITL)

If the task needs more details to implement, the skill will instruct the agent to call up a HITL to clarify the missing information. For example:

```text
Human: /arcgis-exb-widget-dev Create a photo gallery widget.
Agent:
        What's the new widget's name: photo-gallery / image-gallery / media-gallery / _______
        What capabilities should be included: Click to preview / Grid view / Carousel view / Pagination / Lazy load / _______
        What data source type: Feature layer / CSV / JSON / ArcGIS Online item / _______
        Is map view integration required: Yes / No
        Does this widget communicate with other widgets: Yes / No
        ...
```

After the human provides enough details, the agent will continue to implement the widget.

## Requirement Payload Template

Alternatively, you can use the following structured payload to ensure enough details are included:

```text
Task type: New widget | Modify existing widget
Target: <widget name or path>
Goal: <runtime behavior>
Setting panel: <yes/no + behavior>
Data integration: <none | data source | map view | both>
Communication: <none | message action | data action | output data | shared state>
Compatibility: <whether existing saved config must be preserved>
...
```

For detailed information about the requirement payload, please refer to the [arcgis-exb-widget-dev](./SKILL.md).

## Implementation

The agent will implement the widget based on the requirement payload. The agent will also provide a summary of the implementation, including the following information:

- Widget name
- Widget type
- Widget capabilities
- Widget data integration
- Widget communication
- Widget compatibility
- ...

## After Implementation

### Refine / Improve Widget

After the agent implements the widget following the skill's instructions, you can either run the `/arcgis-exb-widget-dev` skill again to refine the widget, or just continue talking to the agent to improve the widget. The agent will keep track of the widget's implementation and make further changes based on your feedback.

### Icon

Usually, the agent will generate an `icon.svg` for the widget. You can modify the `icon.svg` or pick a new one from your design assets to make it more suitable for your widget.

### Testing

The agent will generate unit tests for the widget. You can run the tests to ensure the widget works as expected.

You can also set up the development environment and test the widget's settings and runtime behavior in Experience Builder. If it's a newly created widget, or the manifest is changed, you need to restart webpack in client folder to pick up the change.