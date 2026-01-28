const create = (prop, props) => {
  if (![ 'object', 'function' ].includes(typeof prop)) {
    throw new TypeError(`Object prototype may only be an Object or null: ${prop}`)
  }
  // 创建构造函数
  const Ctor = function () {}
  // 赋值原型
  Ctor.prototype = prop
  // 创建实例
  const obj = new Ctor()
  // 支持第二个参数
  if (props) {
    Object.defineProperties(obj, props)
  }
  // 支持空原型
  if (prop === null) {
    obj.__proto__ = null
  }

  return obj
}