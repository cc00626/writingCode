function CodingMan(name){
	const queue = []
	
	const next = ()=>{
		const task = queue.shift()
		task && task()
	}
	
	const ctx = {
		eat(food){
			queue.push(()=>{
				console.log('food',food)
				next()
			})
			
			return this
		}
		
		sleep(sec){
			queue.push(()=>{
				console.log('sleep')
				setTimeout(() => { console.log('Wake up'); next() }, sec * 1000)
			})
			return this
		}
	}
	
	// 初始任务
	queue.push(() => { console.log(`Hi, I am ${name}`); next() })
	  
	// setTimeout 等链式调用完再启动
	setTimeout(() => next())
	  
	return ctx
}

CodingMan('Jack').eat('breakfast').sleep(2).eat('lunch')