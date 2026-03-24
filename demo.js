//节流
//不会立即执行
function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

//立即执行版本
function throttle2(fn, delay) {
  let start = 0;
  return function () {
    let now = Date.now(); // 获取当前时间戳
    if (now - start >= delay) {
      fn.apply(this, args); // 执行函数
      start = now;
    }
  };
}
