const isCycle = (obj) => {
  const stack = new Set();
  let isDetected = false;

  function helper(item) {
    //结束条件
    if (item !== null && typeof item !== "object") {
      return;
    }

    //检查到了函数引用
    if (stack.has(item)) {
      isDetected = true;
      return;
    }

    stack.add(item);

    for (const key of item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        detect(item[key]); // 关键修正：递归探测的是属性值 item[key]，而不是键名 key
      }
    }
  }

  helper(obj);

  return isDetected;
};
