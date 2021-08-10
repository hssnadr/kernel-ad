import webpack from 'webpack'
import data from './static/projects.json'

const dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(data.map((el) => `projects/${el.id}`))
  })
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  target: 'static',
  head: {
    title: 'Adrien Husson', // process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        rel: 'stylesheet'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/v-scroll-lock' },
    { src: '~/plugins/v-tooltype' },
    // { src: '~/plugins/double-slider' },
    // { src: '~/plugins/vue-headroom' },
    { src: '~/plugins/global-components' },
    { src: '~/plugins/vue-parallax-js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage,
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          THREE: 'three'
        })
      )
    },
    transpile: ['three']
  },
  styleResources: {
    scss: [
      'assets/css/*.scss',
      'assets/css/libs/*.scss'
    ]
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  generate: {
    routes: dynamicRoutes
  }
}
