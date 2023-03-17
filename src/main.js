import { createApp } from 'vue'
import App from './App.vue'
import './App.css'
import store from './components/store'
import router from './router'
createApp(App)
.use(store)
.use(router)
.mount('#app')

