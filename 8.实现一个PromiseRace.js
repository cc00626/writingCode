Promise.race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  });
};
