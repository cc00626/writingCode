const arr  = [1,2,3,4,5,76,5,4,33,2,6,7,8]
const bubbleSort = (arr)=>{
	for(let i = 0;i < arr.length - 1;i++){
		for(let j = 0;j < arr.length - 1 - i;j++){
			if(arr[j] > arr[j + 1]){
				[arr[j],arr[j + 1]] = [arr[j + 1],arr[j]] 
			}
		}
	}
	return arr
}

const res = bubbleSort(arr)
console.log(res)
/*
时间复杂度 O(n²)
空间复杂度O(1)
稳定
*/