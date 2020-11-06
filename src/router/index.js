import Vue from 'vue'
import Router from 'vue-router'
// import auth from '@/api/modules/auth'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'TestPage',
    component: () => import(/* webpackChunkName: "common" */ '@/views/TestPage')
  },
  {
    path: '/chart',
    name: 'ChartJSPage',
    component: () => import(/* webpackChunkName: "common" */ '@/views/chart/ChartJSPage')
  },
  {
    path: '/grid',
    name: 'ToastUiGridPage',
    component: () => import(/* webpackChunkName: "common" */ '@/views/grid/ToastUiGridPage')
  }
]

export default new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior
})

function scrollBehavior () {//to, from, savedPosition
  return { x: 0, y: 0 }
}

// function beforeEnter(to,from,next){
//   auth.getAuth().then(response => {

//   },error => {
    
//   })
// }

/**
 * TODO: 권한 및 통계처리를 위한 코드추가
 * 화면전환시 로딩화면 스택 처리 고려
 */
