---
outline: deep
---

# i18n Nuxt Module

To use different languages in your Nuxt application, you can use the i18n Nuxt Module. It's a
straightforward way to add internationalization to your Nuxt application.


## Installing the Module  

Start adding the module by running the following command:

```console
npx nuxi@latest module add @nuxtjs/i18n@next
```

### Add the module to the config

Next up you have to add the module to your `nuxt.config.ts` file:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n']
})
```

### Configuration

You can set the module options by using the i18n property in nuxt.config root.

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    langDir: '',
    locale: 'en',
    locales: [
      { "code": "en", "language": 'en-US', "file": "en.json", "dir": "ltr" }
    ]
  }
})
```

::: warning
Make sure to add the translation files in the right directory, otherwise Nuxt will not be able
to compile your application correctly.

The translation json files should be in a directory called `i18n`. If you want to have
subdirectories, you can set the `langDir` option inside the Nuxt config.
:::