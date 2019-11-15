import Vue from 'vue'
import {getShopDatas} from '../../api'
import {
  SAVE_SHOPDATAS,
  ADD_FOOD_COUNT,
  DEL_FOOD_COUNT,
  CLEAR_CARTSHOPS
} from '../mutations-type'


const state = {
  shopDatas: {},
  cartShops : []
}

const mutations = {
  [SAVE_SHOPDATAS](state, {shopDatas}){
    state.shopDatas = shopDatas
  },
  [ADD_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count ++
    } else {
      Vue.set(food, 'count', 1)
      state.cartShops.push(food)
    }
  },
  [DEL_FOOD_COUNT](state,{food}){
    if(food.count) {
      food.count -- 
      if(!!!food.count){
        state.cartShops.splice(state.cartShops.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CARTSHOPS](state){
    state.cartShops.forEach(food => food.count = 0)
    state.cartShops = []
  },
}

const actions = {
  async getShopDatasAction ({commit}) {
    let result = await getShopDatas()
    if(result.code === 0) {
      commit(SAVE_SHOPDATAS, {shopDatas : result.data})
    }
  }
}

const getters = {
  totalCount(state) {
    return state.cartShops.reduce((pre, food) => {
      return pre += food.count
    }, 0)
  },
  totalPrice(state) {
    return state.cartShops.reduce((pre, food) => {
      return pre += food.count * food.price
    }, 0)
  },

}



export default {
  state,
  getters,
  actions,
  mutations
}