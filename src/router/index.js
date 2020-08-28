import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent.vue'
import Home from '@/components/Home'
import Login from '@/pages/Login'
import Index from '@/components/Index'
import ChooseCourse from '@/pages/Student/ChooseCourse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        name: '登录'
      },
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/HomePage',
          /* meta的name主要用来做面包屑 */
          meta: {
            name: '主页'
          },
          component: MainContent,
          children: [
            {
              path: '',
              component: Home
            }
          ]
        },
        {
          path: '/ChooseCourse',
          meta: {
            name: '选择专业'
          },
          component: MainContent,
          children: [
            {
              path: '',
              component: ChooseCourse
            }
          ]
        }
      ]
    }
  ]
})
