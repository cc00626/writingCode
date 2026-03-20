Promise.allSettled = function (promises) {
  return Promise.all(
    promises.map((p) => {
      return Promise.resolve(p)
        .then((value) => ({
          status: 'fulfilled',
          value
        }))
        .catch((reason) => ({
          status: 'rejected',
          reason
        }))
    })
  )
}

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve('A'), 1000)
})

const p2 = new Promise((_, reject) => {
  setTimeout(() => reject('B失败'), 500)
})

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve('C'), 1500)
})

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res)
})