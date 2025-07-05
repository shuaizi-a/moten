import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'

import ElementPlus from 'element-plus'
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(ElementPlus)
app.component('Icon', Icon)

app.use(createPinia())
app.use(router)

app.mount('#app')
