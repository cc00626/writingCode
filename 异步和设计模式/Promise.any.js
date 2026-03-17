Promise.any = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    const errors = []
    const len = promises.length

    if (len === 0) {
      return reject(new AggregateError([], 'All promises were rejected'))
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          // 只要有一个成功，直接 resolve
          resolve(value)
        })
        .catch((err) => {
          count++
          errors[index] = err

          // 如果全部失败
          if (count === len) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        })
    })
  })
}