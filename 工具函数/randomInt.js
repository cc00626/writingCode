const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 测试
console.log(randomInt(1, 10)); // 1-10 之间的随机整数
