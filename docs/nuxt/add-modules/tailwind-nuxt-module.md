---
outline: deep
---

# Tailwind CSS for your Nuxt application

The Tailwind CSS module for Nuxt let`s you add Tailwind CSS to your Nuxt application within
seconds.


## Installing the Module

Start adding the module by running the following command:  

```console
npx nuxi module add tailwindcss
```

## Checking the config
Now you just have to make sure that the module is added to your `nuxt.config.ts` file.

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
})
```

---
That`s all you need to start with Tailwind CSS in your Nuxt application. If you want more
information about the module or how to create a custom tailwind config file, please
have a look at the [Tailwind CSS documentation](https://tailwindcss.nuxtjs.org/).