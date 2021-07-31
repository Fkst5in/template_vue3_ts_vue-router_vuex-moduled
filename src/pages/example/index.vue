<!--
 * @Author: Fkst5in
 * @Date: 2021-07-30 14:03:21
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-08-01 00:11:26
 * @Description: 
 * @FilePath: /be.taaga.me/home/fkstein/workspace/nodejs/vue/template_vue3_ts_vue-router_vuex-moduled/src/pages/example/index.vue
-->

<template>
  <h2>Test Page</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente distinctio tenetur nisi quae ea veniam assumenda
    nihil placeat a quaerat. Deleniti sunt animi in laudantium sed quos modi nihil illum!
  </p>
  <p>state:loading = {{ loading }}</p>
  <p>getters:isLoading = {{ isLoading }}</p>
  <p>form options api/$store:count = {{ optionsLoading }}</p>
  <button @click="resetLoading">取消加载</button>
  <button @click="getLoading">开始加载</button>
  <br />
  <p>state:count = {{ count }}</p>
  <p>gettets:count = {{ getCount }}</p>
  <p>form options api/$store:count = {{ optionsCount }}</p>
  <button @click="addCount">+1</button>
  <button @click="optionsReset">同步记数</button>
  <button @click="clearCount">清除计数</button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore, MutationTypes as MainMutationTypes, ActionTypes as MainActionTypes } from '../../store'
export default defineComponent({
  name: 'examplePage',
  computed: {
    optionsLoading() {
      return this.$store.state.loading
    },
    optionsCount() {
      return this.$store.state.expamle.count
    },
  },
  methods: {
    async optionsReset() {
      this.$store.dispatch('example/GET_COUNT')
    },
  },
  setup() {
    const store = useStore()
    const loading = computed(() => store.state.loading)
    const isLoading = computed(() => store.getters.isLoading)

    const count = computed(() => store.state.expamle.count)
    const getCount = computed(() => store.getters['example/getCount'])

    const resetLoading = () => {
      store.commit(MainMutationTypes.SET_LOADING, false)
    }

    const getLoading = async () => {
      store.commit(MainMutationTypes.SET_LOADING, true)
      await store.dispatch(MainActionTypes.GET_LOADING, true)
    }
    const awaitCount = async () => {
      await store.dispatch('example/GET_COUNT')
    }
    const addCount = () => {
      store.commit('example/SET_COUNT', 1 + store.state.expamle.count)
    }
    const clearCount = () => {
      store.commit('example/SET_COUNT', 0)
    }

    return {
      loading,
      isLoading,
      resetLoading,
      getLoading,
      count,
      getCount,
      awaitCount,
      addCount,
      clearCount,
    }
  },
})
</script>
