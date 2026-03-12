let a = [1, 2, 3];
let proxy = new Proxy(a, {
  get(target, key) {
    if (key === "-1") {
      return target[target.length - 1];
    }
  },
});
console.log(proxy[-1]);
console.log(proxy[-2]);
console.log(proxy[2]);
