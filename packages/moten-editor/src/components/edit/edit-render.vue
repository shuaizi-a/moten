<template>
  <div class="edit-render">
    <edit-render-drag :list="list" :group="dragGroup" class="render"></edit-render-drag>
    <el-empty class="empty" v-if="!list?.length" description="请在左侧拖入组件到此处">
      <template #image>
        <v-icon icon="dragBlank" class="icon"></v-icon>
      </template>
    </el-empty>
  </div>
</template>

<script setup lang="ts">
import type { BaseBlock } from '@/types/edit'
import { ref } from 'vue'
import { dragGroup } from './nested'

const list = ref<BaseBlock[]>([])
</script>

<style lang="scss" scoped>
.edit-render {
  container-type: inline-size;
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--edit-header-height));
  margin-left: var(--edit-block-width);
  margin-top: var(--edit-header-height);
  background: white;
  &.is-mobile {
    width: 375px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(var(--edit-header-height) + 20px);
    margin-bottom: 20px;
    transform: translateX(10px);
  }
  .empty {
    position: absolute;
    z-index: 0;
    top: 0;
    top: 0;
    width: inherit;
  }
  .render {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
