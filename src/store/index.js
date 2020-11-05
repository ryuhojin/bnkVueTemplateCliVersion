import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shared from './modules/shared'

/**
 * @modules {
 *            shared : 모바일 웹 공유데이터,
 *            
*           }
 */

export default new Vuex.Store({
    strict:true,
    modules:{ 
        shared
    }
});