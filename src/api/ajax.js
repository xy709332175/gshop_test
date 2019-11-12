import axios from 'axios'
import qs from 'qs'
import router from '../router'
import {MessageBox} from 'mint-ui'


const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() === 'POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  
  let token = localStorage.getItem('token_key')
  if(config.headers.needToken){
    if(token) {
      config.headers.authorization = token
    } else {
      throw new Error ('无token,请先登录')
    }
  }


    return config
})

instance.interceptors.response.use(
  response => response.data,
  error => {

    if(!error.response) {
      alert(error.message)
      router.currentRouter.path !== '/login' && router.replace('/login')
    } else {
      if(error.response.status === 401) {
        MessageBox.alert('token过期,请重新登录')
        router.currentRouter.path !== '/login' && router.replace('/login')
      } else if (error.response.status === 404){
        MessageBox.alert('请求资源未找到')
      } else {
        MessageBox.alert('请求失败')
      }
    }


    MessageBox.alert('请求失败')
    return new Promise (() => {})
  }

)

export default instance