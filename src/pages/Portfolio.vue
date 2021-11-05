<template>
  <Default>
    <h2>Portfolio</h2>
    <ul>
      <li>
        <a href="https://github.com/devguchi/calc-app" target="_blank">
          calc-app
        </a>
      </li>
      <ul>
        <li>
          Vue2+Vuetify+TypeScript+firebase hostingで計算アプリを作成しました
        </li>
        <li>
          <a href="https://calc-777c0.web.app/" target="_blank">
            sample site
          </a>
        </li>
      </ul>
    </ul>
  </Default>
</template>

<script>
import Default from '@/layouts/Default'

export default {
  name: 'Portfolio',
  components: { Default },
}
</script>
