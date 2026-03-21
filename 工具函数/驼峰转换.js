function toCamelCase(str) {
  const sep = str.includes("-") ? "-" : "_";
  return str.split(sep).map((item, index) => {
    return index === 0 ? item : item[0].toUpperCase() + item.slice(1).join("");
  });
}

//驼峰转下划线
// 驼峰转下划线
function toSnakeCase(str) {
  let res = "";
  for (const c of str) {
    if (c >= "A" && c <= "Z") {
      res += "_" + c.toLowerCase();
    } else {
      res += c;
    }
  }
  return res;
}
