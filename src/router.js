import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calculadora',
      name: 'Calculadora',
      component: () => import('./views/Calculadora.vue')
    },
    {
      path: '/suporte',
      name: 'Suporte',
      component: () => import('./views/Suporte.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('./views/Sobre.vue')
    }
  ]
})
