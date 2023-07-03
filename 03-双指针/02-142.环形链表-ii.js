/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next) {
      // 1, fast 和 slow 是否会相遇
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) {
        // 2, 相遇后，fast 指向头节点，头节点到入环点的距离等于 相遇时节点 到 入环点 的距离
        fast = head
        while (slow !== fast) {
          fast = fast.next
          slow = slow.next
        }
        return fast
      }
    }
    return null
};
// @lc code=end

