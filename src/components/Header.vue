<template>
  <router-link to="/">
    <h1>開発グチ太郎</h1>
  </router-link>
  <a
    href="https://twitter.com/devguchi?ref_src=twsrc%5Etfw"
    class="twitter-follow-button"
    data-show-count="false"
  >
    Follow @devguchi
  </a>
</template>

<script>
export default {
  name: 'header',
  mounted() {
    let tweetScript = document.createElement('script')
    tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(tweetScript)
  },
}
</script>

<style scoped>
h1 {
  color: white;
}
a {
  text-decoration: none;
}
</style>
