import Vue from 'vue'
import Router from 'vue-router'
import D1 from '@/components/view/demo1/father'
import D2 from '@/components/view/demo2/father'
import D4 from '@/components/view/demo4/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/d1',
      name: 'D1',
      component: D1
    },
    {
      path: '/d2',
      name: 'D2',
      component: D2
    },
    {
      path: '/d4',
      name: 'D4',
      component: D4
    }
  ]
})
