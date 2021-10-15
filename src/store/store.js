import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        nowPage:'',
        todayTopic:''
    },
    getters:{
        nowPage:state => {return state.nowPage;},
        todayTopic:state => {return state.todayTopic}
    },
    mutations: {
        setPage: (state , payload) => {state.nowPage = payload},
        todayTopic: (state , payload) => {state.todayTopic = payload},
    },
    actions:{
        setPage: ({commit} , nowPage) => { commit('setPage',nowPage)},
        todayTopic:({commit} , todayTopic) => { commit('todayTopic',todayTopic)},
    }
});

export default store;