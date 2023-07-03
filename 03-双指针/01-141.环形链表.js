/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    //设置快慢指针
    let slow = head;
    let fast = head;
    //如果没有环，则快指针会抵达终点，否则继续移动双指针
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        //快慢指针相遇，说明含有环
        if (slow == fast) {
            return true;
        }
    }

    return false;
};
// @lc code=end

