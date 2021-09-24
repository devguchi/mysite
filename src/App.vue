<template>
<div>
  <Home/>
</div>
</template>

<script>
import Home from '@/components/Home'
export default {
  name: 'App',
  components: {Home},
}
</script>

<style>
body {
  background: black;
  color: white;
  padding:0 10px;
}
a {
  color:#0f0;
}
a:visited {
  color: #0c0;
}
</style>
