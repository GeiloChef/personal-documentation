---
outline: deep
---

# Setting up Vue 3 with Typescript

### Create a new project from the command line
To create a new scaffolded Vue.js project, run the following command.

```console
npm create vue@latest
```

This will guide you through the creation wizard for your Vue project. Possibly you're asked to install the
missing node module for ***create-vue***.

### Creation Wizard
Follow the steps of the wizard to finalize the project creation like following.
```console
√ Project name: ... my-project
√ Add TypeScript? ... No / > Yes <
√ Add JSX Support? ... > No < /  Yes
√ Add Vue Router for Single Page Application development? ... No / > Yes < [decide if needed]
√ Add Pinia for state management? ... No / > Yes < [decide if needed]
√ Add Vitest for Unit Testing? ... No / > Yes < [decide if needed]
√ Add an End-to-End Testing Solution? » > Cypress < [decide yourself which is the best]
√ Add ESLint for code quality? ... No / > Yes <
√ Add Prettier for code formatting? ... No / > Yes <
√ Add Vue DevTools extension for debugging? (experimental) ... > No < / Yes
```

---

### After-setup commands
To finalize the creation, run the following commands after the project was successfully initialized by the
creation wizard.
```console
cd my-project
npm install
```

**Now the project is set up fully and you're ready to start developing!**
