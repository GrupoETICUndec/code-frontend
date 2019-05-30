import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import AuthPlugin from './plugins/auth'
import { createProvider } from './vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory';


Vue.use(AuthPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider({cache: new InMemoryCache()}),
  render: h => h(App)
}).$mount('#app')
