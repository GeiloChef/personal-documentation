---
outline: deep
---

# Fontawesome Icons Module for Nuxt

The Fontawesome Icons module for Nuxt adds Fontawesome Icons to your Nuxt application. 

::: warning
This module does not use vue-fontawesome under the hood as dependency, but contains some code from its sources to
implement its features with Nuxt Universal Render, also known as ssr: true in config.

The main difference from official component is creating real tags in
template instead of rendering nodes in browser. That is why it works on server.

:::


## Installing the Module

Start adding the module by running the following command:

```console
npx nuxi@latest module add @vesp/nuxt-fontawesome
```

Now add some icon packs:

```console
npm i -D @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

## Adding the module to the Nuxt config

Now you have to add the module to your Nuxt config:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@vesp/nuxt-fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['cog', 'trash' ], // <-- here go all the icons you want to add
    }
  }
})
```

## Adding the component to use the icon

Default, the component for icons is 'font-awesome' and it is available in global scope. You
can change it thought by adjusting the nuxt config like this: 

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@vesp/nuxt-fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['cog', 'trash' ],
    },
    component: 'your-component-name', // [!code ++]
  }
})
```

You can now use it like this: 

```vue
<your-component-name icon="trash" />
```

___
You have now successfully added Fontawesome Icons to your Nuxt application. To add new icons, 
just add them to the config as shown above. 

For more information, check the [official documentation](https://nuxt.com/modules/nuxt-fontawesome).
To find all icons that you can use, check out 
[the icon library](https://fontawesome.com/icons).

