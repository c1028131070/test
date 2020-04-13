import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextBox from '@/components/TextBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TextBox',
      name: 'TextBox',
      component: TextBox
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
})
