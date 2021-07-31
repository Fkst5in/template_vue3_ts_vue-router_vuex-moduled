/*
 * @Author: Fkst5in
 * @Date: 2021-07-31 00:32:32
 * @LastEditors: Fkst5in
 * @LastEditTime: 2021-07-31 00:42:23
 * @Description:
 * @FilePath: /be.taaga.me/src/shims-vuex.d.ts
 */

import { Store } from './store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
  }
}
