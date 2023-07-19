/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let curr = dummyHead
  while(curr.next && curr.next.next) {
    const temp1 = curr.next
    const temp2 = curr.next.next
    curr.next = temp2
    temp1.next = temp2.next
    temp2.next = temp1
    curr = temp1
  }
  return dummyHead.next
};
// @lc code=end

