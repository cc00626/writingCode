const isCycle = (obj) => {
  // 修正拼写: Cycie -> Cycle
  let isDetected = false; // 修正拼写: Dected -> Detected
  const stack = new Set();

  const detect = (item) => {
    // 修正拼写: dected -> detect
    // 1. 如果不是对象或者是 null，直接返回（递归终点）
    if (item === null || typeof item !== "object") {
      return;
    }

    // 2. 如果 Set 中已经存在该对象，说明存在循环引用
    if (stack.has(item)) {
      isDetected = true;
      return;
    }

    // 3. 将当前对象加入 Set
    stack.add(item);

    // 4. 遍历对象属性
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        detect(item[key]); // 关键修正：递归探测的是属性值 item[key]，而不是键名 key
      }
    }

    // 5. 重点：回溯。如果需要检测的是“路径”上的循环，通常需要在退出递归时移除
    // 但在检测普通循环引用时，通常保持 stack 记录已访问对象即可
  };

  detect(obj);
  return isDetected;
};
