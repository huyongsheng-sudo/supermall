import {request} from './request.js'

export function getMsg(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}