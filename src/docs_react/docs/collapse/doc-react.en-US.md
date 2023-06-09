# Collapse

### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

```tsx
import { Collapse } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Collapse title="title">
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than this.
</Collapse>
```

### Open state

Control the open state of the accordion by setting the `open=true` property.

```html
<Collapse title="title" open>
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than this.
</Collapse>
```

### No icon style

Set custom icons through `iconhide` property.

```html
<Collapse title="title" iconhide>
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than this.
</Collapse>
```

### Custom title

Set custom title through `slot="title"`.

```html
<Collapse title="title">
  <div slot="title">
    <span style="color: blueviolet">custom title</span>
  </div>
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than this.
</Collapse>
```

### Custom icon

Set custom icon through `slot="icon"`.

```html
<Collapse title="title">
  <span slot="icon">🎉🎉🎉</span>
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than this.
</Collapse>
```

## API

### Props

| Attribute | Description | Type      | Default |
| --------- | ----------- | --------- | ------- |
| title     | title       | `string`  |         |
| open      | open        | `Boolean` | `false` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                          | Description       | Default Value |
| ----------------------------- | ----------------- | ------------- |
| `--callapse-title-fontsize`   | Title font size   | `14px`        |
| `--callapse-title-color`      | Title color       | `#666`        |
| `--callapse-content-fontsize` | Content font size | `14px`        |
| `--callapse-content-color`    | Content color     | `#666`        |
