import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProblemList from './views/ProblemList.vue'
import Problem from './views/Problem.vue'
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
      path: '/problems',
      name: 'problemList',
      component: ProblemList,
      meta: {requiresAuth:true},
    },
    {
      path: '/problems/:id',
      name: 'problem',
      component: Problem,
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
    auth.login({ target: to.path });
});

export default router