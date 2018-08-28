/**
 * Created by Administrator on 2018/8/29 0029.
 */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
export default {
  [RECEIVE_SHOPS](state,{shop}){
      state.shop=shop
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys

  },
 [RECEIVE_ADDRESS]({address},state){
   state.address=address
  },

}
