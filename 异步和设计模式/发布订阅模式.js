class EventEmitter{
	constructor(){
		this.events = {}
	}
	
	on(event,cb){
		if(!this.events[event]){
			this.events[event] = []
		}
		this.events[event].push(cb)
		return this
	}
	
	emit(event,...args){
		// 核心改进：使用 .slice() 创建一个“快照”
		// 这样在执行过程中，即使有回调被 off 掉，也不会影响本次遍历
		const handlers = (this.events[event] || []).slice();
		
		handlers.forEach(cb => {
		  try {
			cb(...args);
		  } catch (e) {
			console.error(`事件 [${event}] 执行出错:`, e);
		  }
		});
		
		return this;
	}
	
	off(event,cb){
    // 如果不传 cb，直接注销该事件下的所有回调
    if (!cb) {
      this.events[event] = [];
      return this;
    }

    const handlers = this.events[event];
    if (!handlers) return this;

    // 过滤掉当前要删除的函数
    // 注意：还要检查 f.raw，这是为了兼容 once 产生包装函数
    this.events[event] = handlers.filter(f => f !== cb); 
	 return this;
	 
	}
	
	once(event, cb) {
    // 创建一个“马甲”函数
    const wrapper = (...args) => {
      // 1. 先把自己删掉（过河拆桥）
      this.off(event, wrapper);
      // 2. 再执行真正的逻辑
      cb(...args);
    };

    // 关键点：把原始函数存起来，方便 off 找到它
    wrapper.raw = cb;
    
    return this.on(event, wrapper);
  }
}


//观察者模式
class Subject{
	constructor(){
		this.observers = []
	}
	
	add(observer){
		this.observers.push(observer)
	}
	
	remove(observer){
		this.observers = this.observers.filter(o=>o !== observer)
	}
	
	notify(data){
		this.observers.forEach(o=>o.update(data))
	}
}

class Observer{
	constructor(name){
		this.name = name
	}
	update(data){
		console.log('data',data)
	}
}
const bus = new EventEmitter()
bus.on('msg', console.log)
bus.emit('msg', 'hello') // 'hello'

// 测试观察者
const subject = new Subject()
const ob1 = new Observer('A')
const ob2 = new Observer('B')
subject.add(ob1)
subject.add(ob2)
subject.notify('更新了') // A 收到: 更新了, B 收到: 更新了
