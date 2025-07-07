<template>
  <div :class="classes" :style="styles">
    <div
      class="item"
      v-for="(item, index) in clos"
      :key="index"
      :style="itemStyle(item)"
    >
      <slot :item="itemComputed(index)" :index="index"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { createNameSpace } from "@/utils/components";
import { computed, defineComponent, toRefs } from "vue-demi";
import { props } from "./props";

const { name, n } = createNameSpace("image");

export default defineComponent({
  name,
  props,
  setup(props) {
    const { data, viewport, children } = toRefs(props);

    const classes = computed(() => [n()]);
    const itemComputed = computed(() => {
      return (index: number) => {
        return children.value?.[viewport.value]?.[index] || [];
      };
    });
    const clos = computed(() => data.value?.clos?.[viewport.value] || "");
    const background = computed(
      () => data.value?.background?.[viewport.value] || ""
    );
    const styles = computed(() => ({ background: background.value }));
    const itemStyle = computed(() => {
      return (item: number | string) => {
        return {
          width: Number(item) * 100 + "%",
        };
      };
    });

    return {
      classes,
      clos,
      styles,
      itemStyle,
      itemComputed,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
