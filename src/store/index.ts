/*
 * @Author: Fkst5in
 * @Date: 2021-07-30 17:42:06
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-31 21:08:41
 * @Description:
 * @FilePath: /be.taaga.me/src/store/index.ts
 */
import {
  MutationTree,
  ActionTree,
  ActionContext,
  GetterTree,
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  // useStore as baseUseStore,
} from 'vuex'
import { InjectionKey } from 'vue'
import { state as exampleState, ExampleMoudle, Store as ExampleStore } from './example'
// import { State as ExampleState } from './example/types'

// state
export const state = {
  loading: false,
  expamle: exampleState,
}

export type State = typeof state

// Mutation
export enum MutationTypes {
  SET_LOADING = 'SET_LOADING',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOADING](state, payload: boolean) {
    state.loading = payload
  },
}

// Action
export enum ActionTypes {
  GET_LOADING = 'GET_LOADING',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_LOADING]({ commit }: AugmentedActionContext, payload: boolean): Promise<boolean>
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_LOADING]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = false
        commit(MutationTypes.SET_LOADING, data)
        resolve(data)
      }, 500)
    })
  },
}

// Getters
export type Getters = {
  isLoading(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
  isLoading: (state) => {
    return state.loading
  },
}

// Store
export const store = createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {
    example: ExampleMoudle,
  },
})

// 声明主store类型
type MainStore = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]>(
    key: K,
    payload: P,
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

// 合并其他 module 类型
export type Store = MainStore & ExampleStore
// 注入vue, 不使用浏览器调试插件以及this.$store的话，好像不需要
export const key: InjectionKey<VuexStore<State>> = Symbol()
// 获取 store 对象
export function useStore(): Store {
  return store as Store
}
