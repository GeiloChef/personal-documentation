import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Personal Documentation",
  description: "The Documentation that helps me to get along with coding.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/vue-with-typescript/setting-up-new-vue-project' },
    ],

    sidebar: [
      {
        text: 'Vue with Typescript',
        items: [
          { text: 'Setting up a new project', link: '/vue-with-typescript/setting-up-new-vue-project' },
          { text: 'Add Tailwind to Vue', link: '/vue-with-typescript/add-tailwind-css' },
          { text: 'Add Vue I18n', link: '/vue-with-typescript/add-vue-i18n' },
          { text: 'Add Fontawesome Icons', link: '/vue-with-typescript/add-fontawesome-icon-to-vue' },
          { text: 'Add PrimeVue', link: '/vue-with-typescript/add-primevue' },
        ]
      },
      {
        text: 'Deploy Vue 3 Frontend',
        items: [
          { text: 'Create Dockerfile', link: '/deploy-vue-on-server/dockerfile-for-vue-frontend' },
          { text: 'Github action to create Container', link: '/deploy-vue-on-server/github-action-to-build-containers' },
          { text: 'Docker Compose file for Portainer', link: '/deploy-vue-on-server/docker-compose' },
        ]
      },
      {
        text: 'Github',
        items: [
          { text: 'Create New Repository', link: '/github/create-new-empty-repository' },
        ]
      },
      {
        text: 'Custom Styles (CSS)',
        items: [
          { text: 'Custom Scrollbar', link: '/custom-styles/custom-scrollbar' },
          { text: 'Hide Scrollbar', link: '/custom-styles/hide-scrollbar' },
          { text: 'Target iOS only', link: '/custom-styles/target-only-ios-in-css' },]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
