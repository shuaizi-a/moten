<template>
  <component
    v-bind="$attrs"
    :class="classes"
    :is="tag"
    :href="to"
    :to="to"
    :target="target"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue-demi";
import { createNameSpace } from "@/utils/components";
import { props } from "./props";

const { name, n } = createNameSpace("link");
export default defineComponent({
  name,
  props,
  setup(props) {
    const { to, target } = toRefs(props);

    const classes = computed(() => [n()]);
    const isExternalLink = computed(() => {
      return to.value.match(
        /^(http:\/\/|https:\/\/|javascript:.*|tel:*|mailto:.*)/
      );
    });
    const tag = computed(() => {
      if (to.value) return;
      return isExternalLink.value ? "a" : "router-link";
    });

    return {
      classes,
      tag,
      target,
      to,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
