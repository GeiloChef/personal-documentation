---
outline: deep
---

# PrimeVue Button with FontAwesome Icons

::: info
 Before you start, make sure you have all necessary dependencies
 installed:
1. PrimeVue - [Installation guide for Vue 3](/vue-with-typescript/add-primevue)
2. Tailwind Css - [Installation guide for Vue 3](/vue-with-typescript/add-tailwind-css)
3. Fontawesome Icons - [Installation guide for Vue 3](/vue-with-typescript/add-fontawesome-icon-to-vue)
 
 :warning: Additionally, you need to add the icon `fa-spinner` into your Fontawesome Icon Library.
 
 ---
<div style="text-align: right; font-style: italic">
 This guide was made for  <Badge type="tip" text="PrimeVue v3.46.0" />
</div>
:::
## 1. Add a custom component

```vue
<template>
  <Button
    class="max-h-8"
    v-bind="$attrs"
    :loading="loading">
    <div
      v-if="iconPosition === ButtonIconPosition.Left && icon"
      :class="{
        'spinner': loading,
        'mr-2': !!label
      }">
      <FontAwesomeIcon :icon="iconToDisplay" />
    </div>
    <span v-if="label">
      {{ label }}
    </span>
    <div
      v-if="iconPosition === ButtonIconPosition.Right && icon"
      class="ml-2"
      :class="{
        'spinner': loading,
        'ml-2': !!label
      }">
      <FontAwesomeIcon :icon="iconToDisplay" />
    </div>
  </Button>
</template>


<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import Button from 'primevue/button';
  import { computed, type PropType, toRefs } from 'vue';

  export enum ButtonIconPosition {
    Left = 'left',
    Right = 'right'
  }

  const props = defineProps({
    icon: {
      type: String,
      default: ''
    },
    loadingIcon: {
      type: String,
      default: 'fa-spinner'
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String as PropType<ButtonIconPosition>,
      default: ButtonIconPosition.Left
    },
    label : {
      type: String,
      default: ''
    }
  });

  const { icon, loadingIcon, loading, iconPosition } = toRefs(props);

  const iconToDisplay = computed((): string => {
    if (loadingIcon.value && loading.value) {
      return loadingIcon.value;
    } else {
      return icon.value;
    }
  });
</script>

<style lang="scss">
/* Custom spinner animation for loading state */
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.spinner {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
</style>
```

## 2. Add component to `main.ts` for global access

```typescript
//main.ts

import App from './App.vue';

// import custom button component
import ButtonWithIcon from '@/components/elements/ButtonWithIcon.vue';
// eslint-disable-next-line vue/no-reserved-component-names,vue/multi-word-component-names
app.component('Button', ButtonWithIcon);
```

## 3. Use component in your Code!

```vue

<template>
  ...
  <Button
      label="Attachments"
      icon="fa-paperclip"
      size="small">
  </Button>
  ...
</template>

```
