<template>
  <Header />
  <slot />
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'default',
  components: { Header },
  mounted() {
    let tweetScript = document.createElement('script')
    tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(tweetScript)
  },
}
</script>
