const EqualObj = function(obj1,obj2){
	if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
		return obj1 === obj2
	}
	
	if(obj1 === obj2) return true
	if (typeof obj1 !== 'object' || obj1 === null || 
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
	const keys1 = Object.keys(obj1)
	const keys2 = Object.keys(obj2)
	
	if(keys1.length !== keys2.length) return false
	
	for(const key of keys1){
		if (!EqualObj(obj1[key], obj2[key])) {
		  return false
		}
	}
	
	return true
}

const user1 = {
    name: "Gemini",
    age: 1,
    skills: ["AI", "Search"],
    address: { city: "Mountain View", zip: 94043 }
};

const user2 = {
    name: "Gemini",
    age: 1,
    skills: ["AI", "Search"],
    address: { city: "Mountain View", zip: 94043 }
};

const user3 = {
    name: "Gemini",
    age: 2, // 改了这里
    skills: ["AI", "Search"],
    address: { city: "Mountain View", zip: 94043 }
};

console.log("--- 深度比较测试 ---");
console.log("用例 1 (完全相同):", EqualObj(user1, user2)); // 应为 true
console.log("用例 2 (内容不同):", EqualObj(user1, user3)); // 应为 false
console.log("用例 3 (原始类型):", EqualObj(100, 100));     // 应为 true
console.log("用例 4 (数组比较):", EqualObj([1, 2], [1, 2])); // 应为 true
console.log("用例 5 (包含 null):", EqualObj(null, user1));  // 应为 false