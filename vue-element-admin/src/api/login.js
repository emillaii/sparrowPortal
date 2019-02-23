import request from '@/utils/request'
import constants from '@/sparrow/constants'

export function loginByUsername(username, password) {
  const fmData = {
    email: username,
    password: password
  }
  const url = constants.backendUrl
  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'post',
      data: fmData
    }).then(resData => {
      resolve(resData)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

