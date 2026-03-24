// 1. 题目给出的构造函数
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 2. 辅助函数：将数组转换为链表
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current.next.val = arr[i]; // 确保赋值
    current = current.next;
  }
  return head;
}

// 3. 辅助函数：打印链表（方便观察结果）
function printList(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log(res.join(" -> "));
}

// --- 测试开始 ---

// 生成一个测试用例: 1 -> 2 -> 3 -> 4 -> 5
let head = createLinkedList([1, 2, 3, 4, 5]);

console.log("重排前的链表：");
printList(head);

function reorderList(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //后半部分链表
  const list2 = slow.next;
  slow.next = null;

  //反转链表
  let cur = list2;
  let pre = null;
  while (cur) {
    const node = cur.next;
    cur.next = pre;

    pre = cur;
    cur = node;
  }
  //前部分链表
  let list1 = head;

  //后部分链表
  //pre
  while (list1 && pre) {
    const node1 = list1.next;
    const node2 = pre.next;

    list1.next = pre;
    node2.next = node1;

    list1 = node1;
    pre = node2;
  }
  return head;
}

const res = reorderList(head);
console.table(res);
