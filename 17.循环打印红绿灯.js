const red = () => {
  console.log("red");
};

const green = () => {
  console.log("green");
};

const yellow = () => {
  console.log("yellow");
};

function func(fn,time){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      fn()
      resolve()
    }, time);
  })
}

while(true){
  await func(red,1000)
  await func(green,1000)
  await func(yellow,1000)
}