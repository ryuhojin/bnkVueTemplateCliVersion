import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'tui-grid/dist/tui-grid.css'; //TOAST UI GRID 관련 CSS
import '@/assets/css/tui-pagination.css' //TOAST UI PAGINATION 관련 CSS
import '@/utils/directive'; //커스텀 DIRECTIVE 

Vue.config.productionTip = false

import { ValidationProvider } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

/**
 * 개발 시 메뉴 접근할 수 있게 처리
 * 네이티브랑 연결시 비활성화 처리 되게해야됨
 */