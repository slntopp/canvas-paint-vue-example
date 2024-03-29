export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lab-paint',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  pwa: {
    meta: {
      name: 'Paint by JokerShpoker',
      description: 'Paint от JokerShpoker',
      mobileApp: true,
      mobileAppIOS: true,
      nativeUI: true,
    },
    icon: {
      fileName: 'app-icon.png',
    },
    manifest: {
      name: 'Paint by JokerShpoker',
      lang: 'ru',
      useWebmanifestExtension: false,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  ssr: false,
}
