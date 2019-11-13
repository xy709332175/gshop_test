import {getShopDatas} from '../../api'
import {SAVE_SHOPDATAS} from '../mutations-type'


const state = {
  shopDatas: {}
}

const mutations = {
  [SAVE_SHOPDATAS](state, {shopDatas}){
    state.shopDatas = shopDatas
  }
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

}



export default {
  state,
  getters,
  actions,
  mutations
}