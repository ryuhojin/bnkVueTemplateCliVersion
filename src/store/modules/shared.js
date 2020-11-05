import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default {
    state: {
        sharedData: null
    },
    mutations: {
        SET_SHARED_DATA: function (state, payload) {
           return state.sharedData = payload;
        }
    },
    actions: {
        SET_SHARED_DATA: function (context,payload) {
            return context.commit('SET_SHARED_DATA',payload);
        }
    },
    getters: {
        getSharedData: function(state) {
            return state.sharedData;
        }
    }
}
