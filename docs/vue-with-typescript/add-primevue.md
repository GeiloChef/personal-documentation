---
outline: deep
---

# Add PrimeVue with vite

## Install the npm package

```console
npm install primevue
```

## Add plugin to `main.ts`

```typescript
// main.ts

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
```

---

## Changes needed for styled mode

### Import theme
```typescript
// main.ts

import 'primevue/resources/themes/aura-light-green/theme.css'
```

**If you use tailwind css together with the styled version of PrimeVue, you need to make sure you're
using the correct order of layers in the `main.css`.**

```css
@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
    @tailwind base;
}

@layer tailwind-utilities {
    @tailwind components;
    @tailwind utilities;
}
```

### Change overall scale in PrimeVue

The scale of the PrimeVue components is determined by the font-size of the html tag:
```css
html {
    font-size: 14px;
}
```

---

The official documentation to set up tailwind with Vue 3 using Vite can be found here: 
[Official Documentation](https://primevue.org/vite/)