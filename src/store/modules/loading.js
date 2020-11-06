import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default {
    state: {
        stack: 0
    },
    mutations: {
        ADD_LOADING_STACK: function (state) {
            return state.stack++;
        },
        SUB_LOADING_STACK: function (state) {
            return  state.stack--;
        }
    },
    actions: {
        ADD_LOADING_STACK: function (context) {
            return context.commit('ADD_LOADING_STACK');
        },
        SUB_LOADING_STACK: function (context) {
            return context.commit('SUB_LOADING_STACK');
        }
    },
    getters: {
        getLoadingData: function(state) {
            return state.stack;
        }
    }
}
