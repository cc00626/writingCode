function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(getType({}));
console.log(getType([]));
console.log(getType(new Date()));
console.log(getType("123"));
