const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: "demo",
    },
  ],
};
function getKey(obj, str) {}
console.log(getKey(obj, "a.b"));
console.log(getKey(obj, "arr[0].demo"));

function _get(obj, path, defaultValue = "undefined") {
  //处理统一的格式
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    // 字符串类型 obj[a] obj.a  这里把'[' 替换成'.' ']' 替换成''
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split("."); //最后转成数组
    console.log(newPath);
  }
  //obj 替换成 obj.a 逐步调用
  return (
    newPath.reduce((o, k) => {
      return (o || {})[k];
    }, obj) || defaultValue
  );
}

var object = { a: [{ b: { c: 3 } }] };

console.log(_get(object, "a[0].b.c"));
// => 3

console.log(_get(object, ["a", "0", "b", "c"]));
// => 3

console.log(_get(object, "a.b.c", "default"));
// => 'default'
