const mySetInterval = (fn, time) => {
  let timer = null;
  let interval = () => {
    timer = setTimeout(() => {
      fn();
      interval();
    }, time);
  };
  interval();

  return () => clearTimeout(timer);
};

mySetInterval(() => {
    console.log('123')
},1000)
