<template>
  <Menubar />
  <slot />
</template>

<script>
import Menubar from '@/components/Menubar'
export default {
  name: 'default',
  components: { Menubar },
}
</script>
