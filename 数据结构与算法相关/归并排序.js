const arr  = [1,2,3,4,5,76,5,4,33,2,6,7,8]
function mergeSort(arr){
	if(arr.length <= 1) return arr
	const mid = Math.floor(arr.length/2)
	const l = mergeSort(arr.slice(0,mid))
	const r = mergeSort(arr.slice(mid))
	
	return merge(l,r)
}

function merge(left,right){
	let i = 0,j = 0
	const res = []
	while(i < left.length && j < right.length){
		if(left[i] < right[j]){
			res.push(left[i])
			i++
		}else{
			res.push(right[j])
			j++
		}
	}
	
	return res.concat(left.slice(i),right.slice(j))
}

console.log(mergeSort(arr))