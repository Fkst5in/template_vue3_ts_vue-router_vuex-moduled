/*
 * @Author: Fkst5in
 * @Date: 2021-07-30 13:59:24
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-30 14:20:48
 * @Description:
 * @FilePath: /be.taaga.me/src/router.ts
 */

import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('./pages/home/index.vue')
const ExamplePage = () => import('./pages/example/index.vue')

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/example',
    component: ExamplePage,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
