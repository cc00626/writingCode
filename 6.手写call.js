Function.myCall = function (thisArgs, ...args) {
  const fn = this;
  thisArgs =
    thisArgs === null || thisArgs === undefined ? window : Object(thisArgs);
  const key = Symbol("call");
  thisArgs[key] = fn;
  const res = thisArgs[key](...args);
  delete thisArgs[key];
  return res;
};
