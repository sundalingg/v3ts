import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app=createApp(App)
app.use(ElementPlus,{
    locale:zhCn//中文
})
import 'virtual:svg-icons-register'
app.mount('#app')
