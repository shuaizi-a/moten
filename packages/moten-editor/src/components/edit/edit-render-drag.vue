<template>
  <draggable
    animation="200"
    item-key="id"
    ghost-class="ghost-class"
    class="edit-render-drag"
    :list="list"
    :group="group"
    :sort="sort"
    :move="move"
  >
    <template #item="{ element }">
      <div class="element">
        <div
          class="block-render"
          :class="activeClass(element)"
          @click.stop="edit.setCurrentSelect(element)"
        >
          <component
            :is="renderComponentCode(element)"
            :data="element.formData"
            :children="element.children || []"
            :viewport="edit.viewport"
          ></component>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { move } from './nested'
import { useEditStore } from '@/stores/edit'

defineOptions({
  name: 'edit-render-drag',
})

defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  group: {
    type: [String, Object],
    default: 'group',
  },
  sort: {
    type: Boolean,
    default: true,
  },
  level: {
    type: Number,
    default: 1,
  },
})

const edit = useEditStore()

// 渲染组件的类名
const renderComponentCode = computed(() => {
  return (element: { code: string }) => {
    return element.code
  }
})

// 渲染选中组件的类名
const activeClass = computed(() => {
  return (element: { id: string }) => {
    const id = edit.currentSelect?.id || ''
    return { 'is-active': id === element.id }
  }
})
</script>

<style lang="scss" scoped>
.edit-render-drag {
  .element {
    position: relative;
  }
}
.nested-item {
  border: 1px solid var(--color-edit-render-block-border);
  background: var(--color-edit-render-block-bg);
  height: 100%;
  min-height: inherit;
  & + .nested-item {
    border-left: 0;
  }
}
.block-nested-render,
.block-render {
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}
.block-nested-render {
  &:hover,
  &.is-active {
    // 注意不能像block-render做成after，否则组件无法拖入嵌套容器里
    border: 1px dashed var(--color-edit-render-block-border-hover);
  }
}
.block-render {
  position: relative;
  &:hover,
  &.is-active {
    // 在表面蒙上一层，加上边框，防止组件可以交互
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px dashed var(--color-edit-render-block-border-hover);
    }
  }
}
</style>
