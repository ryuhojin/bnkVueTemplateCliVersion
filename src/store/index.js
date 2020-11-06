import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shared from './modules/shared'
import user from './modules/user'
import loading from './modules/loading'
/**
 * @modules {
 *            shared : 모바일 웹 공유데이터,
 *            auth : 사용자 정보 데이터,
 *            loading : 로딩 관련 데이터
*           }
 */

export default new Vuex.Store({
    strict:true,
    modules:{ 
        shared,
        user,
        loading
    }
});