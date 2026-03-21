function toCamelCase(str) {
  const sep = str.includes("-") ? "-" : "_";
  return str.split(sep).map((item, index) => {
    return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
  });
}

function toSnakeCase(str) {
  if (!str) return ""; // 空字符串处理

  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // 判断是否是大写字母
    if (char >= "A" && char <= "Z") {
      // 关键修正：如果不是第一个字母，才加下划线
      if (i > 0) {
        res += "_";
      }
      res += char.toLowerCase();
    } else {
      res += char;
    }
  }

  return res;
}
