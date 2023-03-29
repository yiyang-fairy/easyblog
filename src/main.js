import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './index.css'
import './components/commen/iconfont.css'
import Create from './components/Create/Create.vue'

const app = createApp(App)

app.component('Create', Create)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
