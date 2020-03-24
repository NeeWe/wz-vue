import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleId: ''
  },
  mutations: {
    updateState(state, articleId) {
      state.articleId = articleId;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    articleId: state => {
      return state.articleId;
    }
  }
})
