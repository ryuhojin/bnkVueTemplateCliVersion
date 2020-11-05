import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default {
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA: function (state, payload) {
           return state.user = payload;
        }
    },
    actions: {
        SET_USER_DATA: function (context,payload) {
            return context.commit('SET_USER_DATA',payload);
        }
    },
    getters: {
        getUserData: function(state) {
            return state.user;
        }
    }
}
