const arr = [1, 23, 4, 4, 5, 5, 6, 6, 7, 435, 234, 123];

function fn(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
