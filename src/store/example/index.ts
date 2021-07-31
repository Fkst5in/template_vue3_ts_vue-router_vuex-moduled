/*
 * @Author: Fkst5in
 * @Date: 2021-07-31 17:33:38
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-08-01 00:00:18
 * @Description:
 * @FilePath: /be.taaga.me/src/store/example/index.ts
 */

// import { State } from './types'
import { State as RootState } from '..'
import { Module, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { Mutations, mutations } from './mutations'
import { Getters, getters } from './getters'
import { Actions, actions } from './actions'

export const state = {
  count: 0,
}

export type State = typeof state

type Namespaced<T, N extends string> = {
  [P in keyof T & string as `${N}/${P}`]: T[P]
}

type NamespacedMutations = Namespaced<Mutations, 'example'>
type NamespacedActions = Namespaced<Actions, 'example'>
type NamespacedGetters = Namespaced<Getters, 'example'>

export type Store<S = State> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch' | 'state'> & {
  commit<K extends keyof NamespacedMutations, P extends Parameters<NamespacedMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<NamespacedMutations[K]>
} & {
  getters: {
    [K in keyof NamespacedGetters]: ReturnType<NamespacedGetters[K]>
  }
} & {
  dispatch<K extends keyof NamespacedActions>(
    key: K,
    payload?: Parameters<NamespacedActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<NamespacedActions[K]>
}

export const ExampleMoudle: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
