import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import auth from './auth/authService'
import Callback from './components/Callback.vue'
import Profile from './views/Profile.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {requiresAuth:true}
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
    return next();
  }

  // Specify the current path as the customState parameter, meaning it
  // will be returned to the application after auth
  if(confirm('Tienes que loguearte para ingresar a esta pagina'))
    auth.login({ target: to.path });
  else
    next(false)
});

export default router