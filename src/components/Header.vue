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
  <br /><br />
</template>

<script>
export default {
  name: 'header',
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
