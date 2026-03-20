function Mynew(fn, ...args) {
  // 1. 创建空对象，原型指向构造函数的 prototype
  const obj = Object.create(Constructor.prototype);
  // 2. 执行构造函数
  const result = Constructor.apply(obj, args);
  // 3. 返回对象
  return result instanceof Object ? result : obj;
}

function MyInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;

  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(left);
  }
}
