/*
 * @Author: Fkst5in
 * @Date: 2021-07-31 15:51:42
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-31 21:11:28
 * @Description:
 * @FilePath: /be.taaga.me/src/store/example/getters.ts
 */

import { State } from '.'
import { State as RootState } from '..'
import { GetterTree } from 'vuex'

export type Getters = {
  getCount(state: State): number
}

export const getters: GetterTree<State, RootState> & Getters = {
  getCount(state) {
    return state.count
  },
}
