//基础版本
function debounce(fn, time) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, time);
  };
}

//立即执行版本
function debounce2(fn, time, immediate) {
  let timer = null;
  return function (...args) {
    if (immediate && !timer) {
      fn.call(this, ...args);
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      if (!immediate) {
        fn.call(this, ...args);
      }
      timer = null;
    }, time);
  };
}
