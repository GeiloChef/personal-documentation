---
outline: deep
---

# Add tailwind css to existing vue project

Tailwind css provides various short-handed css classes to make styling during development easy and continuous.

### Add tailwind to your existing project

###### *Tailwind CSS requires Node.js 12.13.0 or higher.*

Install Tailwind and its peer dependencies to your project.

``` console
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Create the configuration files

``` console
npx tailwindcss init -p
```

### Include Tailwind into the stylesheets

*Some dependencies like ***primevue*** might need a different order of the following imports. Please check the respective
documentation if you come across issues.*

``` css
/* ./src/assets/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure that this ***index.css*** (or the respective file you added the above-mentioned lines) is afterward imported
to the ***main.ts*** of your project.

``` typescript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')
```

Last step is to adjust the Tailwind config. This is needed to tell tailwind, which files you
are using the shorthanded css classes in. 

Here you have an example config for `./tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Now you're able to use the tailwind classes in your project.

---

The official documentation to set up tailwind with Vue 3 using Vite can be found here: 
[Official Documentation](https://v2.tailwindcss.com/docs/guides/vue-3-vite)