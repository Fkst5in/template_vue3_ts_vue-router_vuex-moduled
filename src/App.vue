<!--
 * @Author: Fkst5in
 * @Date: 2021-07-30 02:52:37
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-30 14:24:22
 * @Description: 
 * @FilePath: /be.taaga.me/src/App.vue
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <BasePage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasePage from './layouts/BasePage.vue'

export default defineComponent({
  name: 'App',
  components: {
    BasePage,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
