---
outline: deep
---

# Setup new Vitepress Project

Just as Vue with Vite itself, Vitepress can be easily setup by using the setup wizard that is shipped with
the installation of the Vitepress npm package.


::: info
If you haven't installed Vitepress on your machine yet, run the following command.

```console
npm add -D vitepress
```
:::

::: tip Prerequisites
-  `Node.js` version 18 or higher.
- Text Editor with Markdown syntax support.
:::

## The Setup Wizard
The setup wizard works like any other project-setup wizard you already know. Just Follow the steps the wizard
guides you through, and start by running:

```console
npx vitepress init
```

You will be greeted with a few simple questions:

```console
T  Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs
|
o  Site title:
|  Spanisch lernen
|
o  Site description:
|  Spanish lernen
|
o  Theme:
|  Default Theme
|
o  Use TypeScript for config and theme files?
|  Yes
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run npm run docs:dev and start writing.
```

::: tip
Title and description can be changed at any time.
:::

___

For more information, see the [Official Documentation](https://vitepress.dev/guide/getting-started).