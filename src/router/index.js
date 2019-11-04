import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/about',
      name:'About',
      component: About

    }
  ]
})
