---
outline: deep
---

# Add Tailwind CSS to Vitepress

If you want to you custom components in your Vitepress application, you will very shortly come to a point 
where you have to write a lot of custom styles. To take away a litte of the effort you have to put into your
beautiful new custom components, you can add Tailwind CSS which will bring a lot of handy shorthand classes
to your favor.

**Follow the steps below to add Tailwind to your Vitepress application**

::: tip
This will work on newly created Vitepress applications just as well as on already existing projects!
:::

::: info
You need to have the files for theme customization already setup in order to make this Tutorial work.
If you haven't set up the customization of your theme, please follow the steps mentioned on the
documentation on [How to Customize your Theme](/vitepress/custom-theme-and-components.html#customize-your-theme)
:::

## 1. Install Tailwind CSS

```console
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## 2. Add PostCSS Config

Now you have to add the lines below into the `postcss.config.js`. If this file wasn't created automatically,
you can just add it at the root of your Vitepress application.

```javascript
// postcss.config.js

module.exports = {
    plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
    }
}
```

## 3. Adjust Tailwind Config

Next we have to tell Tailwind, where we have our documentation file stored. If the root folder of your 
markdown files is called `docs`, you can copy the code below as is. 

::: warning 
If the root folder is not named `docs`, you have to make sure to also adjust the path given in `content` of 
your Tailwind config file.
:::

```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/**/*.{html,js,vue,md}"], // [!code warning]
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## 4. Add the Tailwind directives to your custom CSS file

Now you have to add the Tailwind directives to your custom css file.

```css
/* /.vitepress/theme/custom.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
...
your custom css can come after those lines
...
*/
```

## You're ready to use Tailwind CSS in your Vitepress Application

Now you can use all the Tailwind shorthand classes to customize your custom written Vue and HTML code.

::: tip
Here's also a very helpful [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) for you.
:::
___

Also see the [Official Guide](https://tailwindcss.com/docs/installation/using-postcss) from TailwindCSS.com