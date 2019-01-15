<template>
  <div class="hello">
    <span v-if="loading"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></span>
      <article
      v-else
      class="post-detail"
      >
          <h1>{{ post.title }}</h1>
          <p>{{ post.description }}</p>
          <p>{{ post.body }}</p>
          <button @click="$router.go(-1)">Retour</button>
    </article>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    post () {
      return this.$store.state.posts
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('fetchSinglePost')
      .then(post => {
        this.loading = false
      })
  }
}
</script>

<style scoped>
* {
  text-rendering: optimizeLegibility;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #41B883;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #41B883 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.posts {
  list-style: none;
  text-align: center;
}

.post-item + .post-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>