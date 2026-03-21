const throttle = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.call(this, ...args);
      timer = null;
    }, delay);
  };
};

//完整版节流
function throttle2(fn, option, delay) {
  const { immediate = true, tailing = true } = option;
  let lastTime = 0;
  let timerId = null;

  return function (...args) {
    const now = Date.now();
    if (!immediate && lastTime === 0) {
      lastTime = now;
    }

    const remaining = delay - (now - lastTime);

    if (remaining <= 0) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      fn.apply(this, args);
      lastTime = now;
    } else if (!timerId && tailing) {
      timerId = setTimeout(() => {
        fn.apply(this, args);
        lastTime = immediate ? Date.now() : 0;
        timerId = null;
      }, remaining);
    }
  };
}
