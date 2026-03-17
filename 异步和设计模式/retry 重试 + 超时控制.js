// 基础 retry
function retry(fn, times) {
  return fn().catch(err => {
    if (times <= 0) throw err
    return retry(fn, times - 1)
  })
}

// 带延迟的 retry
function retryWithBackoff(fn, maxTimes, baseDelay = 1000, attempt = 0) {
  return fn().catch(err => {
    if (attempt >= maxTimes) throw err
    const delay = baseDelay * (2 ** attempt)  // 1s, 2s, 4s, 8s...
    return new Promise(r => setTimeout(r, delay))
      .then(() => retryWithBackoff(fn, maxTimes, baseDelay, attempt + 1))
  })
}

// 超时控制
function withTimeout(fn, timeout) {
  return Promise.race([
    fn(),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
  ])
}

// 组合：retry + timeout
function retryWithTimeout(fn, times, timeout) {
  return retry(() => withTimeout(fn, timeout), times)
}

// 测试
let count = 0
const unstable = () => new Promise((res, rej) => ++count < 3 ? rej('fail') : res('ok'))
retry(unstable, 3).then(console.log) // 'ok'（第3次成功）