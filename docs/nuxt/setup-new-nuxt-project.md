---
outline: deep
---

# Setup new Nuxt project

Nuxt is a framework for Vue.js. It makes building single-page applications with Vue.js a breeze. It
includes everything you need to build full-stack web applications with Vue.js, including server-side
rendering and server-side data fetching.


## Setup Nuxt
To set up a new Nuxt project, you can use the following commands:

```console
npx nuxi init migrate-to-spain
cd migrate-to-spain
npm install
```


## Add Typescript Support
Nuxt supports Typescript out of the box. To add Typescript support, you can use the following commands:

```console
npm install -D typescript @types/node
npx tsc --init
```

Now ensure that the `tsconfig.json` file contains the following:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["**/*.ts", "**/*.d.ts", "**/*.tsx", "**/*.vue"]
}
```

---

Now you are already ready to start building your application. To add dependencies as modules,
please follow the [Modules](/nuxt/add-modules/index.html) guide.
