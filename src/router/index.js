import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Brand from '@/components/Brand'
import NewsList from '@/components/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/newsList/:code',
      name: 'NewsList',
      component: NewsList
    }
  ]
})
