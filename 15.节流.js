const throttle = function (func, delay) {
  let startTime = Date.now()
  return function (...args){
    let lastTime = Date.now()
    if(lastTime - startTime > delay){
        func.apply(this,...args)
        startTime = Date.now()
    }
  }
}

