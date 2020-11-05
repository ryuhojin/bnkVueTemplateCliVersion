import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/api/modules/auth'
Vue.use(Router)

const routes = [
  //{
  //   path: '/pms/Project',
  //   name: 'ProjectManagementView',
  //   component: () => import(/* webpackChunkName: "common" */ '@/views/ProjectManagementView')
  // },
  // {
  //   path: '/admin/User',
  //   name: 'UserManagementView',
  //   component: () => import(/* webpackChunkName: "common" */ '@/views/UserManagementView')
  // } 
]

export default new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior
})

function scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}

function beforeEnter(to,from,next){
  auth.getAuth().then(response => {
    
  },error => {
    
  })
}
