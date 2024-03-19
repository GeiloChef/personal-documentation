---
outline: deep
---

# Custom Theme and Components

Vitepress lets you configure and customize the theme that you use in your application. For richer 
or more styled documentation you can also include vue components into your application.

::: warning
Make sure to use the correct folder structure, otherwise your changes won't work!
:::

## Customize your Theme

You can easily customize the style of your application by overwriting the scss variables. If the files are 
not existing yet, Just create them in the **mentioned folder** *(.vitepress/theme/...)*.

::: code-group
```typescript [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

```css [.vitepress/theme/custom.css]
/* example */
:root {
    --vp-c-brand-1: #646cff;
    --vp-c-brand-2: #747bff;
}
```
:::

::: info
Here you can find a [list of variables](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css) that you can overwrite.
:::

___

## Custom Components

Custom Vue components can be integrated just as easy as custom styles. Just create your vue component,
import it and use it as you would do in your Vue application. You can either import it inside the 
component you want to use it, or you can globally inject it. You can decide depending on your usage which
approach suits your need the best.

### Local Import of Components

::: code-group
```markdown [Markdown File]
# Your Markdown File

Here you can add your **markdown content**. Together with your custom component.

<YourCustomComponent />

<script setup lang="ts">
import YourCustomComponent from './components/YourCustomComponent.vue'
</script>
```

```vue [Custom Vue Component]
// ./components/YourCustomComponent.vue

<template>
  ...
  your content
  ...
</template>

<script setup lang="ts">
  ...
  your custom logic
</script>
```
:::

### Global Registered Components

::: code-group
```typescript [Vitepress config]
// .vitepress/theme/index.ts

import {Theme} from "vitepress";
import DefaultTheme from 'vitepress/theme'

// @ts-ignore
import YourCustomComponent from '../../components/YourCustomComponent.vue';

export default {
  enhanceApp({ app, router, siteData }) {
    // register your custom global components
    app.component('YourCustomComponent', YourCustomComponent)
  }
} satisfies Theme
```

```markdown [Markdown File]
# Your Markdown File

Here you can add your **markdown content**. Together with your custom component.

<YourCustomComponent />
```

```vue [Custom Vue Component]
// ./components/YourCustomComponent.vue

<template>
  ...
  your content
  ...
</template>

<script setup lang="ts">
  ...
  your custom logic
</script>
```
:::

## Folder Structure
::: info
It is **very important** that you follow the correct folder structure in order to make the custom theme 
and the custom vue components work in your Vitepress application.
:::
```text
...
└───docs
    └───.vitepress
        └─── cache
        └─── dist
        └───.vitepress
            | custom.css
            | index.ts
        | config.mts
    └───...
    └───components
        | YourComponents.vue
        | ...
```