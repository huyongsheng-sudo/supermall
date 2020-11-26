import axios from 'axios'

// 最终方案
export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/w6',
      timeout: 5000
    })

    // 2.axios拦截器
    // 请求拦截
    instance.interceptors.request.use((config) => {
      // 这样就被拦截了,如果不处理,前面的请求就会error,所以,我们需要原封不动的return出去
      // 什么时候需要用到请求拦截呢？
      // 1）比如config种的一些信息不符合服务器要求
      // 2）比如我们每次在发送网络请求的时候，都希望在节目显示一个图标
      // 3）某些网络请求（比如登录请求必须要有token），必须携带一些特殊信息

      return config;
    }, (error) => {

    })
    // 响应拦截
    instance.interceptors.response.use((result) => {
      // console.log(result)
      return result;
    }, (error) => {
      // console.log(error)
    })

    // 3.发送真正的网络请求,axios内部其实就是Promise，以前在url下面写success，现在直接.then
    instance(config).then((data) => {
      resolve(data);
    }).catch((error) => {
      reject(error);
    })
  })
}


// 最终的简洁版
// export function request(config) {
//     // 1.创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:8000/api/w6',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//   return instance(config);
// }
