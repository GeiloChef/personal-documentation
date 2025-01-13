import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Personal Documentation",
  description: "The Documentation that helps me to get along with coding.",
  ignoreDeadLinks: false ,
  markdown: {
    container: {
      tipLabel: ':bulb: Tip :bulb:',
      warningLabel: ':warning: Warning :warning:',
      dangerLabel: ':heavy_exclamation_mark: Danger :heavy_exclamation_mark:',
      infoLabel: ':mag_right: Info',
      detailsLabel: 'Details'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'favicon.ico',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Anti Corruption Layer', link: '/vue-with-typescript/anti-corruption-layer' },
      { text: 'Vue 3 Folder Structure', link: '/vue-with-typescript/folder-structure' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GeiloChef/personal-documentation' }
    ],
    sidebar: [
      {
        text: 'Axios',
        items: [
          { text: 'Setup Axios Instance to Vue 3', link: '/axios/create-axios-instance' },
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
        text: 'Deploy Vue 3 Frontend',
        items: [
          {
            text: 'Deploy with Docker',
            items: [
              { text: 'Create Dockerfile', link: '/deploy-vue-on-server/dockerfile-for-vue-frontend' },
              { text: 'Github action to create Container', link: '/deploy-vue-on-server/github-action-to-build-containers' },
              { text: 'Docker Compose file for Portainer', link: '/deploy-vue-on-server/docker-compose' },
            ]
          },
          { text: 'Deploy on Webspace', link: '/deploy-vue-on-server/deploy-on-webserver//' },
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
        text: 'Hosting',
        items: [
          { text: 'Protect directories with a .htpasswd', link: '/hosting/protect-a-folder-with-htpasswd' },
        ]
      },
      {
        text: 'PrimeVue',
        items: [
          { text: 'Use FontAwesome Icon with PrimeVue buttons', link: '/primevue/button-with-fontawesome-icons' },
        ]
      },
      {
        text: 'Nuxt',
        items: [
          { text: 'How to get started', link: '/nuxt/setup-new-nuxt-project' },
          {
            text: 'Add Modules to Nuxt',
            link: '/nuxt/modules/add-modules',
            items: [
              { text: 'i18n Module', link: '/nuxt/modules/i18n-nuxt-module' },
              { text: 'PrimeVue Module', link: '/nuxt/modules/primevue-nuxt-module' },
              { text: 'Tailwind CSS Module', link: '/nuxt/modules/tailwind-nuxt-module' },
              { text: 'Fontawesome Module', link: '/nuxt/modules/font-awesome-nuxt-module' },
              {
                text: 'EsLint Module',
                link: '/nuxt/modules/eslint-nuxt-module',
                items: [
                  {
                    text: 'EsLint Example Config',
                    link: '/nuxt/modules/eslint-example'
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        text: 'Vue with Typescript',
        items: [
          { text: 'Setting up a new project', link: '/vue-with-typescript/setting-up-new-vue-project' },
          { text: 'ES Lint Setup', link: '/vue-with-typescript/add-eslint-config' },
          { text: 'Vue 3 Folder Structure', link: '/vue-with-typescript/folder-structure' },
          { text: 'Vue Router Configuration', link: '/vue-with-typescript/vue-router-configuration' },
          { text: 'Redirect if unauthorized', link: '/vue-with-typescript/vue-router-redirect-if-unauthorized' },
          { text: 'Anti Corruption Layer for your API', link: '/vue-with-typescript/anti-corruption-layer' },
          { text: 'Add Tailwind to Vue', link: '/vue-with-typescript/add-tailwind-css' },
          { text: 'Add Vue I18n', link: '/vue-with-typescript/add-vue-i18n' },
          { text: 'Add Fontawesome Icons', link: '/vue-with-typescript/add-fontawesome-icon-to-vue' },
          { text: 'Add PrimeVue', link: '/vue-with-typescript/add-primevue' },
        ]
      },
      {
        text: 'VitePress',
        items: [
          { text: 'Setup new Vitepress Project', link: '/vitepress/setup-new-vitepress-project' },
          { text: 'Add .gitignore for VitePress', link: '/vitepress/add-gitignore-file' },
          { text: 'Custom Theme and Components', link: '/vitepress/custom-theme-and-components' },
          { text: 'Add Tailwind to Vitepress', link: '/vitepress/add-tailwind-css-to-vitepress' },
        ]
      },
    ],
    footer: {
      copyright: '© Felix Dziatkowski'
    }
  }
})
