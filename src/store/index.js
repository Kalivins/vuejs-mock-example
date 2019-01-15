import Vue from 'vue'
import Vuex from 'vuex'
import client from '../api/server/index'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    posts: []
  },

  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  },

  actions: {
    fetchPosts ({ commit }) {
      return client
        .fetchPosts()
        .then(posts => commit('setPosts', posts))
    },
    fetchSinglePost ({ commit }) {
        return client
         .fetchSinglePost()
         .then(post => commit('setPosts', post))
    }
  }
})