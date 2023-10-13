/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var postorderTraversal = function(root) {
  const traversal = (curr, res) => {
    if (curr === null) {
      return []
    }
    res.push(...traversal(curr.right, []))
    res.push(...traversal(curr.left, []))
    res.push(curr.val)
    return res
  }
  return traversal(root, [])
};
// 循环
var postorderTraversal = function(root) {
  const res = []
  const stack = []
  let curr = root
  let prev = null
  while(stack.length > 0 || curr !== null) {
    while(curr !== null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    if (curr.right === null || curr.right === prev) {
      res.push(curr.val)
      prev = curr
      curr = null
    } else {
      stack.push(curr)
      curr = curr.right
    }
  }
  return res
};
// @lc code=end

