function curry(fn){
	return function curried(...args){
		if(args.length > fn.length){
			return fn.apply(this,args)
		}else{
			return (...nextArgs)=>{
				return curried(...args, ...nextArgs)
			}
		}
	}
}
// 一个接收 3 个参数的加法函数
const sum = (a, b, c) => a + b + c;

// 进行柯里化
const curriedSum = curry(sum);

// 测试不同的调用方式
console.log(curriedSum(1, 2, 3));      // 6 (直接调用)
console.log(curriedSum(1)(2, 3));      // 6 (分两次)
console.log(curriedSum(1)(2)(3));      // 6 (完全柯里化)

// 实际应用场景：创建一个专门加 10 的函数
const addTen = curriedSum(10)(0); 
console.log(addTen(5));                // 15