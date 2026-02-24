Promise.allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let finishedCount = 0;
    promises.map((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = {
            status: "fulfilled",
            value,
          };
        })
        .catch((reason) => {
          results[index] = {
            status: "rejected",
            reason,
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
