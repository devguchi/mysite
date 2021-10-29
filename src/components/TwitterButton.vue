<template>
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
  name: 'twitter-button',
  mounted() {
    let tweetScript = document.createElement('script')
    tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(tweetScript)
  },
}
</script>
