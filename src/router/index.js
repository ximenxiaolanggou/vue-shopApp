import Vue from 'vue'
import Router from 'vue-router'
import car from '@/components/shopcar/car'
import home from '@/components/home'
import newsList from '@/components/news/newsList'
import newsInfo from '@/components/news/newsInfo'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/shopcar',
      name: 'shopcar',
      component: car
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/news/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/news/newsInfo/:id',
      name: 'newsInfo',
      component: newsInfo
    }
  ]
})
