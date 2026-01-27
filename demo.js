fiber = {
  type,            // 组件类型（函数组件、类组件、原生 DOM）
  key,             // 用于区分同级节点
  stateNode,       // 对应真实 DOM 或 class 实例
  memoizedProps,   // 上一次的 props
  memoizedState,   // 上一次的 state
  return,          // 父 Fiber
  child,           // 第一个子 Fiber
  sibling,         // 下一个兄弟 Fiber
  effectTag,       // 表示需要做的操作（新增、更新、删除）
  nextEffect,      // effect 链表，用于 commit 阶段
  lanes,           // 优先级
}


const effect: Effect = {
    tag, // 用来标识依赖项有没有变动
    create, // 用户使用useEffect传入的函数体
    destroy, // 上述函数体执行后生成的用来清除副作用的函数
    deps, // 依赖项列表
    next: (null: any),
};