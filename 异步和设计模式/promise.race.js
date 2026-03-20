Promise.race = function(promises){
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject)
        })
    })
}

Promise.race([1, Promise.resolve(2)])
    .then(res => console.log(res))