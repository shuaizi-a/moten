import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import './assets/styles/main.scss'
import '@moten/ui/style'

import ElementPlus from 'element-plus'
import Draggable from 'vuedraggable'
import { Icon } from '@iconify/vue'
import moten from '@moten/ui'

const app = createApp(App)

// 饿了么组件库
app.use(ElementPlus)
// icon组件
app.component('Icon', Icon)
// 拖拽组件
app.component('draggable', Draggable)
// moten组件库
app.use<{ platform: 'editor' | 'user' }>(moten, { platform: 'editor' })

// pinia状态管理库
app.use(createPinia())
// 路由
app.use(router)

app.mount('#app')
