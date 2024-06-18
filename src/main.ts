import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'reflect-metadata'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
