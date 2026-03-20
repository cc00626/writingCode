const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// 同步阻塞版（不推荐，会卡主线程）
function sleepSync(ms) {
  const start = Date.now()
  while (Date.now() - start < ms) {}
}

// 测试
async function test() {
  console.log('start')
  await sleep(1000)
  console.log('1s later')
}
test()