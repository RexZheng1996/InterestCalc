import Vue from 'vue'
import Vuex from 'vuex'
import balance from './module/Balance.js'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    name:"邓杰"
  },
  mutations: {
 
  },
  actions: {
 
  },
  modules: {
    balance
  }
})