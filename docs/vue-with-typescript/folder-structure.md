---
outline: deep
---

# Best practice Folder Structure for your Vue 3 Typescript project


## Folder structure list
```
...
└───public
    |   favicon.ico
└───src
    └───assets
        | your-stylsheets.css
        | ...
    └───components
        └───elements
            | MyButtonComponent.vue
            | other very generic components
            | ...
        └───partials
            | HeaderBar.vue
            | other custom components
            | ...
    └───i18n
        | config.ts
        | en.json
        | other json translation files
        | ...
    └───icons
        | fontAwesomeIconConfig.ts
        | config for other icon libraries
        | ...
    └───mapper
        | mapper to map entities from one to another
        | ...
    └───models
        | core.ts
        | other files to store ts models and interfaces
        | ...
    └───router
        | index.ts
    └───services
        └───api
            | axios instance setup
            | other api layer files
            | ...
        | service files that will communicate with the api layer and mapper layer
        | ...
    └───stores
        | store files (f. e. Pinia)
    └───utils
        | coreUtils.ts
        | other global util files (f. e. dateUtils.ts)
    └───views
    |   app.js
    |   main.js
    |   shims-vue.d.ts
```

## Unit tests

Unit tests can either be stored into their own folder inside the `src`-folder, or they are stored in 
the same folder as the file they test. Both has its pros and cons. While storing it in a separate folder
keeps the inner folder structures cleaner, storing it with the file the test file tests, gives you a very 
clear overview of what files do already have test files and which don't. In the end it's your choice, and the
test-coverage created by the test suite also gives you information about where you are still missing tests.

### Inside a `test` folder

```
...
└───src
    | ...
    | ...
    └───test
        └───components
            | component test files
            | ...
        └───utils
            | util test files
            | ...
       └───...
            | util test files
            | ...
```

### With the file you're testing

```
...
└───src
    └───assets
    └───components
        | MyComponent.test.ts <-- this tests the component below
        | MyComponent.vue
        | ...
    └───...
    └───utils
        | coreUtils.test.ts <-- this tests the util files below
        | coreUtils.ts
        | ...

```

