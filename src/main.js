import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import "@/assets/element.scss"
import "./assets/main.css"

import App from "./App.vue"
import router from "./router/index"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount("#app")
