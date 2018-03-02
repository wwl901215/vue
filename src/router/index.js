/**
 * https://www.cnblogs.com/SamWeb/p/6610733.html;
 */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstPage from '@/components/FirstPage'
import User from '@/components/User'
import Phone from '@/components/Phone'
import Tablet from '@/components/Tablet'
import Computer from '@/components/Computer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Hello'
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage,
      children: [
        {
          path: '/Holle/phone',
          component: Phone,
          name: 'phonename'
        },
        {
          path: '/Holle/tablet',
          component: Tablet
        },
        {
          path: '/Holle/computer',
          component: Computer
        },
        {
          path: '',
          component: Phone
        }
      ]
    },
    {
      path: '/User/:id/:item',
      component: User
    }
  ]
})
