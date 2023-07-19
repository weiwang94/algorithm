/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var MyLinkedList = function() {
  this.size = 0
  this.head = new ListNode()
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size) {
    return -1
  } 
  let curr = this.head
  for (let i = 0; i <= index; i++) {
    curr = curr.next
  }
  return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // 加入的节点可以是最后一个的下一个，所以 index > this.size
  if (index > this.size) {
    return
  } 
  this.size++
  let prevNode = this.head
  for (let i = 0; i < index; i++) {
    prevNode = prevNode.next
  }
  const node = new ListNode(val)
  node.next = prevNode.next
  prevNode.next = node
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size) {
    return
  } 
  this.size--
  let prevNode = this.head
  for (let i = 0; i < index; i++) {
    prevNode = prevNode.next
  }
  prevNode.next = prevNode.next.next
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

