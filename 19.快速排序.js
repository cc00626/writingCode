const quickSort = (arr, left = 0, right= arr.length -1) => {
    if(left >= right) return
    const index = findIndex(arr,left,right)
    quickSort(arr,left,index -1)
    quickSort(arr,index + 1,right)
    return arr;
};

const findIndex = (arr, left, right) => {
  let privot = arr[right];
  let index = left - 1;
  for (let i = left; i < right; i++) {
    if(arr[i] <= privot){
        index++
        [arr[index],arr[i]] = [arr[i],arr[index]]
    }
  }
  //交换整体位置
  [arr[index + 1],arr[right]] = [arr[right],arr[index + 1]]

  return index + 1
};
const arr = [-10, 10, 1, 34, 5, 1];

console.log(quickSort(arr));