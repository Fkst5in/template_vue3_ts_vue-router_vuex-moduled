/*
 * @Author: Fkst5in
 * @Date: 2021-07-30 02:52:37
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-31 00:35:53
 * @Description:
 * @FilePath: /be.taaga.me/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

const app = createApp(App)
app.use(router)
app.use(store, key)

app.mount('#app')
