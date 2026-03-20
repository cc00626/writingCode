const arr  = [1,2,3,4,5,76,5,4,33,2,6,7,8]

const selectArr = (arr)=>{
	for(let i = 0;i < arr.length;i++){
		let minIndex = i
		for(let j = i + 1;j < arr.length;j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j
			}
		}
		
		if(minIndex !== i){
			[arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
		}
	}
	
	return arr
}
console.log(selectArr(arr))