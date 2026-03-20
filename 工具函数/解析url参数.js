const parseQuery = (url) => {
  const res = [];
  const tempUrl = url.split("?")[1];
  for (const item of tempUrl.split("&")) {
    let [key, val] = item.split("=");
    val = decodeURIComponent(val);

    if (res.hasOwnProperty(key)) {
      res[key] = [].concat(res[key], val);
    } else {
      res[key] = val;
    }
  }
  return res;
};

// 测试
console.log(parseQuery("?name=Tom&age=18"));
// { name: 'Tom', age: 18 }

console.log(parseQuery("?id=1&id=2&city=%E5%8C%97%E4%BA%AC&enabled"));
