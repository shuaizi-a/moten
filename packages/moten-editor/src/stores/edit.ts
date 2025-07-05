import { computed } from 'vue'
import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  // 参数
  state: () => ({
    count: 0,
  }),
  // 计算属性
  getters: {
    doubleCount: (state) => computed(() => state.count * 2),
  },
  // 方法
  actions: {
    increment() {
      this.count++
    },
  },
})
