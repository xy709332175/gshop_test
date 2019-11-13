import Mock from 'mockjs'
import datas from './data.json'

const baseUrl = '/api'

Mock.mock(`${baseUrl}/shopDatas`,{code: 0, data: datas})