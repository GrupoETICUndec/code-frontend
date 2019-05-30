import Vue from 'vue'
import Vuex from 'vuex'
// import {api} from './config.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    problems: []
  },
  mutations: {
    SET_PROBLEM_LIST(state, problems){
      state.problems = problems;
    }
  },
  actions: {
    getProblems({commit}){
      //fetch api with apollo
      const problems = [
        {
          id: "1",
          name: "Problem1"
        },
        {
          id: "2",
          name: "Problem2"
        },
        {
          id: "3",
          name: "Problem3"
        }
      ]
      commit('SET_PROBLEM_LIST', problems)
    }
  },
  getters: {
    problems: state =>{
      return state.problems
    }
  }
})
