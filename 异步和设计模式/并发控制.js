class LimitQueue {
	constructor(limit){
		this.queue = []
		this.limit = limit
		this.running = 0
	}
	
	push(task){
		this.queue.push(task)
		this.run()
	}
	
	run(){
		if(this.running >= this.limit || !this.queue.length) return
		const task = this.queue.shift()
		this.running++
		task().then((res)=>{
			console.log(res)
		}).finally(()=>{
			this.running--
			this.run()
		})
	}
}


const queue = new LimitQueue(2);

// 模拟一个异步任务生成器
const createTask = (id, time) => {
    return () => new Promise((resolve) => {
        console.log(`任务 ${id} 开始执行...`);
        setTimeout(() => {
            resolve(`任务 ${id} 完成!`);
        }, time);
    });
};

// 推入 4 个任务
queue.push(createTask(1, 1000));
queue.push(createTask(2, 2000));
queue.push(createTask(3, 1000));
queue.push(createTask(4, 1000));