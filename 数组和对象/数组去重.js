 // 写法一：Set（最简洁）
function unique(arr) {
  return [...new Set(arr)]
}

// 写法二：filter + indexOf
function uniqueFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

// 写法三：reduce
function uniqueReduce(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item)
    return acc
  }, [])
}

// 写法四：对象数组按 key 去重
function uniqueByKey(arr, key) {
  const map = new Map()
  return arr.filter(item => {
    if (map.has(item[key])) return false
    map.set(item[key], true)
    return true
  })
}

// 写法五：对象数组按内容去重（JSON）
function uniqueByJSON(arr) {
  const set = new Set()
  return arr.filter(item => {
    const key = JSON.stringify(item)
    if (set.has(key)) return false
    set.add(key)
    return true
  })
}

// 测试
console.log(unique([1, 2, 2, 3, 3, 3])) // [1, 2, 3]

const users = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 1, name: 'c' }
]
console.log(uniqueByKey(users, 'id')) // [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]

const objs = [{ a: 1 }, { a: 1 }, { a: 2 }]
console.log(uniqueByJSON(objs)) // [{ a: 1 }, { a: 2 }]