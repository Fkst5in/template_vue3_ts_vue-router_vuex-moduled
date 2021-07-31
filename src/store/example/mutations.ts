/*
 * @Author: Fkst5in
 * @Date: 2021-07-31 12:42:13
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-31 23:50:44
 * @Description:
 * @FilePath: /be.taaga.me/src/store/example/mutations.ts
 */

import { State } from '.'
import { MutationTree } from 'vuex'

// Mutations
// 名称定义
export enum MutationTypes {
  SET_COUNT = 'SET_COUNT',
}
// 类型声明
export type Mutations<S = State> = {
  [MutationTypes.SET_COUNT](state: S, count: number): void
}
// 函数定义
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNT](state: State, count: number) {
    state.count = count
  },
}
