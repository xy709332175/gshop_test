
import {
  SAVE_ADDRESS
} from './mutations-type'


export default {
  [SAVE_ADDRESS](state,{address}) {
    state.address = address
  }
}