import posts from './data/posts'
/* eslint-disable */

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchPosts () {
    return fetch(posts, 1000)
  }
}