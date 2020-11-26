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
