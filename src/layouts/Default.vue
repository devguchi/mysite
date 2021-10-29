<template>
  <Header />
  <slot />
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'default',
  components: { Header },
}
</script>
