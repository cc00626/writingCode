Function.myCall = function (thisArgs, ...args) {
  const fn = this;
  thisArgs =
    thisArgs == null || thisArgs == undefined ? window : Object(thisArgs);
  const key = Symbol("key");
  thisArgs[key] = fn;
  const res = thisArgs[key](...args);
  delete thisArgs[key];

  return res;
};

//手写apply
Function.prototype.myApply = function (thisArgs, argsArray) {
  const fn = this;
  thisArgs = thisArgs == null ? window : Object(thisArgs);
  const key = Symbol("key");
  thisArgs[key] = fn;
  let result;
  if (Array.isArray(argsArray)) {
    result = thisArgs[key](...argsArray);
  } else if (!argsArray) {
    result = thisArgs[key]();
  } else {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  delete thisArgs[key];

  // 7. 返回结果
  return result;
};

Function.prototype.myBind = function (thisArgs, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.bind - what is trying to be bound is not callable",
    );
  }

  const fn = this;

  return function BoundFn(...newArgs) {
    if (this instanceof BoundFn) {
      return new fn(...args, ...newArgs);
    }
    return fn.apply(thisArgs, [...args, ...newArgs]);
  };
};
