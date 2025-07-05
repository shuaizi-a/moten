<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  props: {
    src: String,
  },
  data() {
    return {
      value: 111,
    };
  },
  mounted() {
    console.log(this.value);
  },
});
</script>

<template>
  <img :src="src" alt="" />
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
