import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import IndexPage from '@/pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})

// let router = new Router({
//   mode:'history',
//   routes:[{
//     path:'./',
//     component:IndexPage
//   }]
// })
