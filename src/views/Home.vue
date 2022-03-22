<template>
  <img
    src="https://avatars.githubusercontent.com/u/89882017?v=4"
    class="rounded-full"
    style="width: 150px"
  />
  <ul class="my-5 pl-5 list-disc">
    <MyLinkList />
  </ul>
  <img
    src="https://github-readme-stats.vercel.app/api?username=web3ten0&show_icons=true&theme=dark&icon_color=fff"
    style="margin-bottom: 15px; max-width: 100%"
  /><br />
  <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=web3ten0&layout=compact&theme=dark"
    style="max-width: 100%"
  /><br />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyLinkList from "@/components/MyLinkList.vue";

export default defineComponent({
  name: "Home",
  components: { MyLinkList },
});
</script>
