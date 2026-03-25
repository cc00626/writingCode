const tree = [
  {
    id: 1,
    name: "部门A",
    children: [
      {
        id: 2,
        name: "部门B",
        children: [
          { id: 4, name: "部门D" },
          { id: 5, name: "部门E" },
        ],
      },
      { id: 3, name: "部门C", children: [{ id: 6, name: "部门F" }] },
    ],
  },
];

//深度优先遍历
const dfs = (tree, res = []) => {
  tree.forEach((item) => {
    // 1. 巧妙使用解构，把剩下的属性存入 node，顺便排除了 children
    const { children, ...node } = item;

    // 2. 将扁平化后的节点推入结果数组
    res.push(node);

    // 3. 递归：如果还有子节点，继续往下钻，并带着同一个 res 数组
    if (children && children.length > 0) {
      dfs(children, res);
    }
  });

  return res;
};

// 使用示例
const result = flattenTree(tree);
console.log(result);

//广度优先遍历
const BFS = (tree) => {
  const res = [];
  let queue = [...tree];
  while (queue.length > 0) {
    // 核心：取出队头的元素
    const item = queue.shift();
    const { children, ...node } = item;
    res.push(node);
    if (children && children.length > 0) {
      queue.push(...children); // 孩子排到队尾
    }
  }

  return res;
};
