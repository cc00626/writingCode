// 写法四：完整版（处理特殊类型）
function deepCloneFull(obj, cache = new WeakMap()) {
  // 基本类型直接返回
  if (obj === null || typeof obj !== 'object') return obj
  // 函数直接返回（一般不需要拷贝）
  if (typeof obj === 'function') return obj
  // 循环引用检查
  if (cache.has(obj)) return cache.get(obj)
  
  // 特殊类型处理
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  
  if (obj instanceof Map) {
    const result = new Map()
    cache.set(obj, result)
    obj.forEach((v, k) => result.set(deepCloneFull(k, cache), deepCloneFull(v, cache)))
    return result
  }
  
  if (obj instanceof Set) {
    const result = new Set()
    cache.set(obj, result)
    obj.forEach(v => result.add(deepCloneFull(v, cache)))
    return result
  }
  
  const result = Array.isArray(obj) ? [] : {}
  cache.set(obj, result)
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCloneFull(obj[key], cache)
    }
  }
  return result
}

// 测试
const obj = { a: 1, b: { c: 2 }, d: [1, 2, { e: 3 }], fn: () => 'hello' }
const cloned = deepCloneFull(obj)
cloned.b.c = 999
console.log(obj.b.c) // 2（原对象不受影响）
console.log(cloned.fn()) // 'hello'

// 测试循环引用
const circular = { a: 1 }
circular.self = circular
const clonedCircular = deepCloneWithCache(circular)
console.log(clonedCircular.self === clonedCircular) // true