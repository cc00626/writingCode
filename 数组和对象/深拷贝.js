//手写深拷贝
const deepClone = (obj,map = new WeakMap())=>{
	//处理特殊类型的数据
	if(!obj || typeof obj !== 'object'){
		return obj
	}
	if(obj instanceof Date) return new Date(obj)
	if(obj instanceof RegExp) return new RegExp(obj)
	if(obj instanceof Error) return new Error(obj.message)
	
	if(map.has(obj)){
		return map.get(obj)
	}
	
	const cloneTarget = Array.isArray(obj) ? [] : {};
	map.set(obj, cloneTarget);
	
	for(const item in obj){
		if(obj.hasOwnProperty(item)){
			cloneTarget[item] = deepClone(obj[item],map)
		}
	}
	
	return cloneTarget
}
const testObj = {
    // 1. 基础类型
    num: 100,
    str: "Hello Gemini",
    bool: true,
    un: undefined,
    nul: null,
    
    // 2. 嵌套对象与数组
    obj: {
        name: "child",
        list: [1, 2, { a: 'nested' }]
    },
    
    // 3. 特殊对象
    date: new Date("2026-03-16"),
    reg: /^\d+$/gi,
    err: new Error("Oops! Something went wrong"),
    
    // 4. 函数（函数通常保持引用，不深拷贝）
    sayHi: function() { console.log("Hi!"); }
};

console.log(deepClone(testObj))
testObj.num = 101
console.log(testObj)