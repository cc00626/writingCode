function ListNode(key, val) {
  // 建议把 key 和 val 放在最前面
  this.key = key;
  this.val = val;
  this.next = null;
  this.pre = null;
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; //容量
    this.map = new Map();
    this.head = new ListNode(0, 0); //头节点
    this.tail = new ListNode(0, 0); //尾节点
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }
  //删除节点
  delNode(node) {
    const pre = node.pre;
    const next = node.next;

    pre.next = next;
    next.pre = pre;
  }

  //添加到头部
  addToHead(node) {
    const next = this.head.next;
    this.head.next = node;
    node.pre = this.head;
    node.next = next;
    next.pre = node;
  }

  //移动节点到头部
  moveToHead(node) {
    this.delNode(node);
    this.addToHead(node);
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      //有，移动到头部，直接返回
      this.moveToHead(node);
      return node.val;
    } else {
      //没有
      return -1;
    }
  }
  set(key, val) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = val; // 更新值
      this.moveToHead(node); //移动到头部
    } else {
      const newNode = new ListNode(key, val); // 注意：这里建议 ListNode 存 key 和 value
      this.map.set(key, newNode);
      this.addToHead(newNode);

      //检查是否超出
      if (this.map.size > this.capacity) {
        //删除最后一个节点
        const tailNode = this.tail.pre;
        this.map.delete(tailNode.key);
        this.delNode(tailNode);
      }
    }
  }
}
