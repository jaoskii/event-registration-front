import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from './router'
import Notifications from '@kyvg/vue3-notification'

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

//const fState = useFrontendStore();

app.use(router)
app.use(pinia)
app.use(Notifications)

app.mount('#app')
