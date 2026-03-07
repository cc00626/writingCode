const arr = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];
function flatArr(arr) {
  if (!arr) return [];
  let res = [];
  for (const item of arr) {
    if (item && Array.isArray(item)) {
      res = res.concat(flatArr(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

const result =  flatArr(arr)
console.log(result)
