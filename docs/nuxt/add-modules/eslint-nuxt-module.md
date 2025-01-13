---
outline: deep
---

# eslint Nuxt Module

To be able to use eslint easily in your Nuxt application, you can use the 
eslint Nuxt Module. It's a straightforward way to add linting to your Nuxt application.

## Installing the Module

Start adding the module by running the following command:

```console
npx nuxi module add eslint
```

If you are using Typescript, you also have to install typescript into the 
project (if not already done):

```console
npm install -D typescript
```

::: info
Once you start your Nuxt app, a `eslint.config.mjs` file will be generated under
your project root. You can customize it as needed.
:::

## Check the Nuxt config

Now you can check, if the module was added to your `nuxt.config.ts` file correctly. If so,
you should have something similar in your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  eslint: { // only if needed
    // options here
  }
})
```

___

Now you are ready to use your own rules in your `eslint.config.mjs` file. This will make your
code more consistent and easier to maintain.

To get more information about the module, check out
the [documentation](https://eslint.nuxt.com/packages/module).

To get an already preset configuration, you can check out
[this example](/docs/nuxt/eslint-example.md).

