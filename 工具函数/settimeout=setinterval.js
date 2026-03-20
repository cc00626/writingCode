const mySetInterval = (fn, time) => {
  let timer = null;
  const timeout = () => {
    timer = setTimeout(() => {
      fn();
      timeout();
    }, time);
  };
  interval();
  return () => clearTimeout(timer);
};

const mySetTimeout = (fn, time) => {
  let timer = null;
  timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, time);

  return () => clearInterval(timer);
};
