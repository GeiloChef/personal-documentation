---
outline: deep
---

# Add Vue I18n to Vue

With Vue I18n you can easily add internationalisation to your vue application. 

### Add vue-i18n package

```console
npm install vue-i18n@8
```

### Create Folder for translations

For a cleaner project and a cleaner `main.ts`, it's recommended to add a folder all the translation related
files. In a later step we will import the information from the `config.ts` to the `main.ts` in order to use
`vue-i18n`.

```
src
...
└───i18n
|   |   config.ts
│   │   de.json
│   │   en.json
│   │   ...
...
```

###### Explanation of the folder structure

- `config.ts` - holds all information about the instance of vue-i18n
- `[language-code].json` - file to store the translation for each language

### Add the config

The `config.ts` is where we get all translations, and initiate the vue-i18n instance. In order to use it in
the `main.ts` later on, we need to `export` it.

::: code-group
```typescript  [i18n/config.ts]
import { createI18n } from 'vue-i18n';

// import the json files that store the translations in order to use them in your vue project
import deutsch from './de.json';
import english from './en.json';
import spanish from './es.json';

// import constant with preset information - see core.ts
import { Languages } from '@/models/core';

// create object that stores the translated messages
const messages = {
  en: english,
  de: deutsch,
  es: spanish
};

// initiate vue-i18n instance and export it
export const i18n = createI18n({
  legacy: false,
  locale: Languages.german.key,
  fallbackLocale: Languages.english.key,
  silentTranslationWarn: true,
  globalInjection: true, // with this we can use $t('translation-key') inside the templates
  messages
});
```

```typescript [core.ts (for constant)]
// @/models/core.ts
export const Languages: LanguagesObject = {
  german: {
    key: 'de', // general key that is used in the code
    name: 'Deutsch', // translated value that is shown to the user
    momentLocale: 'de', // local that is used by moment.js 
    i18nLocale: 'de', // local that is used by i18n
    flagCode: 'de' // flag code
  },
  english: {
    key: 'gb',
    name: 'English',
    momentLocale: 'en-gb',
    i18nLocale: 'en',
    flagCode: 'gb'
  },
  spanish: {
    key: 'es',
    name: 'Spanish',
    momentLocale: 'es',
    i18nLocale: 'es',
    flagCode: 'es'
  }
};
```
:::

### Add the instance to the `main.ts`

Now we can add the exported `vue-i18n` instance to the `main.ts` so we can use it globally. 

```typescript
import App from './App.vue';

// import the vue-i18n instance that we just exported
import { i18n } from '@/i18n/config';

const app = createApp(App);

app.use(i18n);
```

---
Also check the [Official Documentation](https://kazupon.github.io/vue-i18n/installation.html#compatibility-note)