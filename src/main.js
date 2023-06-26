import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

const app = createApp(App)


app.use(router)
app.use(pinia)

app.mount('#app')
