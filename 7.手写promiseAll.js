Promise.all = (promises) => {
    return new Promise((resolve,reject) => {
        const res = []
        let i = 0
        let length = promises.length
        if(length === 0) return resolve([])

        function fulfill(value,index){
            res[index] = value
            i++
            if(i === length) return resolve(res)
        }
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then((value) => {
                fulfill(value,index)
            }).catch((reason) => {
                reject(reason)
            })
        });
    })
}