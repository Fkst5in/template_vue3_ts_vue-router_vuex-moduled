/*
 * @Author: Fkst5in
 * @Date: 2021-07-31 15:25:03
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-08-01 00:02:49
 * @Description:
 * @FilePath: /be.taaga.me/src/store/example/actions.ts
 */

import { State } from '.'
import { State as RootState } from '..'
import { Mutations, MutationTypes } from './mutations'
import { Getters } from './getters'
import { ActionContext, ActionTree } from 'vuex'

// Actions
// 名称定义
export enum ActionTypes {
  GET_COUNT = 'GET_COUNT',
}

// 添加Action上下文
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
  getters<K extends keyof Getters>(key: K, payload: Parameters<Getters[K]>[1]): ReturnType<Getters[K]>
} & Omit<ActionContext<State, RootState>, 'commit' | 'getters'>

// 类型声明
export interface Actions {
  [ActionTypes.GET_COUNT]({ commit }: AugmentedActionContext): void
}

// 函数定义
export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.GET_COUNT]({ commit }) {
    setTimeout(() => {
      commit(MutationTypes.SET_COUNT, 10)
    }, 500)
  },
}
