<template>
  <Default>
    <ul>
      <li>
        <a href="https://github.com/devguchi" target="_blank"> Github </a>
      </li>
      <li>
        <a href="https://twitter.com/devguchi" target="_blank"> Twitter </a>
      </li>
      <li>
        <router-link to="portfolio"> Portfolio </router-link>
      </li>
      <li>
        <a href="https://atcoder.jp/users/devguchi" target="_blank">
          AtCoder
        </a>
        <ul>
          <li>
            <a
              href="https://kenkoooo.com/atcoder/#/user/devguchi?userPageTab=Achievement"
              target="_blank"
            >
              Problems
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://www.kaggle.com/devguchi" target="_blank"> Kaggle </a>
      </li>
    </ul>
    <Twitter />
  </Default>
</template>

<script>
import Default from '@/layouts/Default'
import Twitter from '@/components/Twitter'
export default {
  name: 'Home',
  components: { Default, Twitter },
}
</script>
