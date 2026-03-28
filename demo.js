const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const promiseFetch = async (
  promiseFn,
  maxRetries,
  retry = 0,
  baseDelay = 500,
) => {
  try {
    return await promiseFn();
  } catch (err) {
    if (retry >= maxRetries) throw err;

    const jitter = Math.random() * 100;
    const waitTime = baseDelay * 2 ** retry + jitter;

    console.log(`重试 ${retry + 1}，等待 ${Math.round(waitTime)}ms`);

    await delay(waitTime);

    return promiseFetch(promiseFn, maxRetries, retry + 1, baseDelay);
  }
};
