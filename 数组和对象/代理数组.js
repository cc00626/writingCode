function reactiveArray(arr, onChange) {
  const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

  return new Proxy(arr, {
    get(target, key) {
      if (methods.includes(key)) {
        return (...args) => {
          const result = target[key](...args)
          onChange({ method: key, args })
          return result
        }
      }
      return target[key]
    },
    set(target, key, value) {
      const oldValue = target[key]
      target[key] = value
      if (key !== 'length') {
        onChange({ type: 'set', key, oldValue, newValue: value })
      }
      return true
    }
  })
}

// 使用
const arr = reactiveArray([1, 2, 3], (info) => {
  console.log('变更:', info)
})

arr.push(4)      // 变更: { method: 'push', args: [4] }
arr[0] = 10      // 变更: { type: 'set', key: '0', oldValue: 1, newValue: 10 }
arr.splice(1, 1) // 变更: { method: 'splice', args: [1, 1] }
