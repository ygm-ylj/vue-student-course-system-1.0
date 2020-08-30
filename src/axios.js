import axios from 'axios'
import ElementUI from 'element-ui'
import {setCookie, getCookie, delCookie} from '@/cookie'

axios.defaults.baseURL = 'http://localhost:8088/StudentCourse/'

axios.interceptors.request.use(config => {
  if (getCookie('Authorization') != null){
    config.headers.common.authorization = getCookie('Authorization')
  }
  console.log('每次发送请求的token' + config.headers.common.authorization)
  return config
})

axios.interceptors.response.use(response => {
  console.log(response)
  let res = response.data
  if (res.code === 200) {
    return Promise.resolve(response)
  } else {
    ElementUI.Message.error(res.msg)
    return Promise.reject(response)
  }
})