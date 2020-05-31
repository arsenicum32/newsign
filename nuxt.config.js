const domain = 'https://newsign.me'
const auth = {
  strategies: {
    google: {
      client_id: "821504060071-l00v14au6mde24fc8gniss5rf2pgkhqj.apps.googleusercontent.com",
    }
  }
}
export default {
  auth,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  serverMiddleware: [
    { path: '/api/get/videos', handler: '~/api/get.js' },
    { path: '/api/put/video', handler: '~/api/put.js' }
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-xxxxxxx-1'
    }], '@nuxtjs/axios',
     '@nuxtjs/auth'
  ],

  axios: {
    baseURL : process.env.NODE_ENV === 'development' ? "http://localhost:3000" : domain
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
