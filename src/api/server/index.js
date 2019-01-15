import axios from 'axios'
import router from '@/router'
/* eslint-disable */

export default {
  fetchPosts () {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
  },
  fetchSinglePost () {
      return axios
        .get('https://jsonplaceholder.typicode.com/posts/'+router.currentRoute.params.id)
        .then(response => response.data)
  }
}