import { defineStore } from 'pinia'
import type { BaseBlockNull, Viewport } from '@/types/edit'

export const useEditStore = defineStore('edit', {
  // 参数
  state: () => ({
    // 当前屏幕模式
    viewport: 'desktop' as Viewport,
    // 当前选中组件
    currentSelect: null as BaseBlockNull,
  }),
  // 计算属性
  getters: {},
  // 方法
  actions: {
    setCurrentSelect(value: BaseBlockNull) {
      this.currentSelect = value
    },
    // 设置屏幕模式
    setViewport(value: Viewport) {
      this.viewport = value
    },
  },
})
