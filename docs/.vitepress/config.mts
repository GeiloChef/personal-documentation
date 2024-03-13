import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Personal Documentation",
  description: "The Documentation that helps me to get along with coding.",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'favicon.ico',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/vue-with-typescript/setting-up-new-vue-project' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GeiloChef/personal-documentation' }
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
          { text: 'Push local Repository to GitHub', link: '/github/push-existing-repository-to-github' },
        ]
      },
      {
        text: 'Github Pages',
        items: [
          { text: 'Deploy a static Webpage on GitHub Pages', link: '/github-pages/how-to-deploy-on-github-pages' },
          { text: 'Build a static Webpage with Github Actions', link: '/github-pages/build-static-pages-with-github-actions' },
        ]
      },
      {
        text: 'Custom Styles (CSS)',
        items: [
          { text: 'Custom Scrollbar', link: '/custom-styles/custom-scrollbar' },
          { text: 'Hide Scrollbar', link: '/custom-styles/hide-scrollbar' },
          { text: 'Target iOS only', link: '/custom-styles/target-only-ios-in-css' },
        ]
      },
      {
        text: 'VitePress',
        items: [
          { text: 'Add .gitignore for VitePress', link: '/vitepress/add-gitignore-file' },
        ]
      },
      {
        text: 'PrimeVue',
        items: [
          { text: 'Use FontAwesome Icon with PrimeVue buttons', link: '/primevue/button-with-fontawesome-icons' },
        ]
      },
    ],
    footer: {
      copyright: '© Felix Dziatkowski'
    }
  }
})
