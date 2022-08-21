import { createApp } from 'vue'
import router from './routes/routes'
import './style.css'
import App from './App.vue'
import Header from "./components/Header.vue"

const app = createApp(App)

app.use(router)
app.mount('#app')
