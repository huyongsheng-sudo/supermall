// 防抖函数，一个参数是函数，一个参数是时间
export function debounce(func, delay) {
  let timer = null;
  // ...就是可以传多个参数
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}

export function throttle(fn, delay) {
  let timer = null;
  let flag = true; //中间媒介
  return (...args) => {
    if (!flag) return;
    clearTimeout(timer);
    flag = false;
    timer = setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay)
  }
}


// 格式化时间函数
export function formatDate(date , fmt) {
  // 获取年份
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1 , (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // M+是正则表达式的一个规则，有的人传一个M够了，有的人传4个，M+就是一个或多个
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
