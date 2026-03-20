Promise.all = function(promises){
	return new Promise((resolve,reject)=>{
		const res = []
		let i = 0
		const length = promises.length
		if(length === i) resolve(res)
		function fulfill(val,index){
			res[index] = val
			i++
			if(i === length) resolve(res)
		}
		promises.forEach((promise,index)=>{
			Promise.resolve(promise).then((res)=>{
				fulfill(res,index)
			}).catch((err)=>{
				reject(err)
			})
		})
	})
}
const p1 = new Promise(resolve => {
  setTimeout(() => resolve(1), 100)
})

const p2 = new Promise(resolve => {
  setTimeout(() => resolve(2), 10)
})

Promise.all([p1, p2]).then(res => {
  console.log(res)
})