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
  <div>
    <h1 class="text-[#50d71e] text-[50px]">标题</h1>
    <img :src="src" alt="" />
  </div>

</template>

<style lang="scss" scoped>
img {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
