function New(fn, ...args) {
  if (typeof fn !== "function") throw new Error("type Error");
  const obj = Object.create(fn.prototype);

  // 4. 执行构造函数，并将 this 绑定到刚才创建的对象上
  const res = fn.apply(obj, args);

  // 5. 关键细节：判断构造函数的返回值
  // 如果构造函数返回的是一个对象，则返回该对象；否则返回我们创建的 obj
  return (typeof res === "object" && res !== null) || typeof res === "function"
    ? res
    : obj;
}
