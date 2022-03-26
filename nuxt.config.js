export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jts-v2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'turbine,inventory,repair,service,GG4,FT4' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Michael Johnson' },
      { name: 'title', content: 'Johnson Turbine Support' },
      {
        hid: 'description',
        name: 'description',
        content:
          'We support the GG4 & FT4 market with an extensive inventory of parts, component repair services, engine and turbine overhaul, and field service support.',
      },
      { name: 'og:title', content: 'Johnson Turbine Support' },
      { name: 'og:url', content: 'https://www.johnsonturbine.com/' },
      {
        name: 'og:image',
        content: 'https://www.johnsonturbine.com/images/johnson-logo-min.png',
      },
      { name: 'og:type', content: 'website' },

      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'We support the GG4 & FT4 market with an extensive inventory of parts, component repair services, engine and turbine overhaul, and field service support.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&family=Montserrat:wght@700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
