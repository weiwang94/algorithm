/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummyHead = new ListNode(0, head)
    let curr = dummyHead
    while(curr.next) { 
        if (curr.next.val === val) {
            curr.next = curr.next.next
            continue
        }
        curr = curr.next
    }
    return dummyHead.next
};
// @lc code=end

