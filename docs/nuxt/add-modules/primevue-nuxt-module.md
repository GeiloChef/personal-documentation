---
outline: deep
---

# Install PrimeVue with Nuxt

The PrimeVue module for Nuxt adds PrimeVue to your Nuxt application with a few steps.


## Installing the Module

Start adding the module by running the following command:

```console
npm install primevue @primevue/themes
npm install --save-dev @primevue/nuxt-module
```

## Adding the module to the Nuxt config

Next up you have to add the module to your `nuxt.config.ts` file:

```typescript
export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        /* Configuration */
    }
})
```

## Setup a theme for PrimeVue

You now need to add a theme for PrimeVue to work. You can select any Theme you want or even
create your own.

To add a default theme, change the following line in your `nuxt.config.ts` file:

```typescript
// nuxt.config.ts
import Aura from '@primevue/themes/aura'; // [!code ++]

export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: { // [!code ++]
            theme: { // [!code ++]
                preset: Aura // [!code ++]
            } // [!code ++]
        }
    }
})
```
___

Now you have successfully added PrimeVue to your Nuxt application! The PrimeVue module for Nuxt
automatically registers the PrimeVue components and directives for you. So you can 
test them with the following implementation in your `App.vue` file:

```vue
<Button label="Verify" />
```

::: info
To learn more about PrimeVue with Nuxt, check out the
official [PrimeVue Nuxt Module](https://primevue.org/nuxt/).
:::
