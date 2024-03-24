---
outline: deep
---

# Add Fontawesome icons to vue

## Install the dependencies

### Install the base Font Awesome SVG Library

```console
npm i --save @fortawesome/fontawesome-svg-core
```

### Install the icon set you want to use in your application

As example, we will use the Fee Solid icon set, but there are more to choose from their website.

```console
npm i --save @fortawesome/free-solid-svg-icons
```

### Add the Font Awesome Vue component

This package lets you use the icons easily inside a component (see below).

```console
npm i --save @fortawesome/vue-fontawesome
```

---

## Import Icons

In order to keep the project clean, we create a new folder for the import of the icons we will later use
in the project. Only imported icons can be used in the Vue application.

```
// project structure
src
...
└───icons
|   |   fontAwesomeIconConfig.ts
...
```

```typescript
// fontAwesomeIconConfig.ts

// import library to later add the imported icons to use it
import { library } from '@fortawesome/fontawesome-svg-core';

// import the icons you want to use inside your project
import {
  //...
  faStar,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

// add imported icons to library to use it
library.add(
  //...
  faStar,
  faXmark
);
```

---

## Add changes to `main.ts`

```typescript
// main.ts

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* add all icon we need to the font-awesome library */
import '/src/icons/fontAwesomeIconsConfig';

// add font awesome icon component for global usage
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(i18n);
```

---

Also check the [Official Documentation](https://docs.fontawesome.com/web/use-with/vue)