import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Brand from '@/components/Brand'
import NewsList from '@/components/NewsList'
import News from '@/components/News'
import HelloWorld from '@/components/HelloWorld'

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
    },
    {
      path: '/news/:newsTypeCode/:id',
      name: 'News',
      component: News
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
