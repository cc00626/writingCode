const retryFn = async (promiseFn, maxCount, retry, baseTime = 500) => {
  try {
    return await promiseFn();
  } catch {
    if (retry > maxCount) throw err;
    const waitTime = baseTime * 2 ** retry;
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, waitTime);
    });
    return retryFn(promiseFn, maxCount, retry + 1, baseTime);
  }
};
