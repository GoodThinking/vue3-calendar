import axios from 'axios'
import qs from 'qs'

import { JUHE_KEY } from '@/config/key'

const axiosPost = function(options) {
  axios({
    url: options.url,
    method: 'post',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify({
      ...options.data,
      key: JUHE_KEY
    })
  })
  .then(res=>{
      options.success(res.data)
  }).catch(err=>{
      options.error(err)
  })
}

const axiosGet = function(options) {
  axios(options.url + '&key='+ JUHE_KEY)
    .then(res=>{
      options.success(res.data)
    }).catch(err=>{
      options.error(err)
    })
}

export {
  axiosPost,
  axiosGet
}