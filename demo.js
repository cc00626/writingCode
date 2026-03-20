function debounce(fn, time, immediate) {
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
