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
function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false;

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        isInvoke = false;
      }, delay);
    }
  };
  return _debounce;
}
