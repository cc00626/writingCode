Promise.allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let finishedCount = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = {
            value: res,
            status: "fulfilled",
          };
        })
        .catch((reason) => {
          results[index] = {
            reason,
            status: "rejected",
          };
        })
        .finally(() => {
          finishedCount++;
          if (finishedCount === results) {
            resolve(results);
          }
        });
    });
  });
};
