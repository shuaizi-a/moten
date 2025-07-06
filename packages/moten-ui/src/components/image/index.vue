<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "mo-image",
  props: {
    src: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/1025679?s=460&v=4",
    },
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>

<template>
  <div>
    <img :src="src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
// @import "./index.scss";
</style>
