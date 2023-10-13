/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  const traversal = (curr, res) => {
    if (curr === null) {
      return []
    }
    res.push(...traversal(curr.left, []))
    res.push(curr.val)
    res.push(...traversal(curr.right, []))
    return res
  }
  return traversal(root, [])
};
// 循环
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  let curr = root
  while(stack.length > 0 || curr !== null) {
    if (curr !== null) {
      stack.push(curr) 
      curr = curr.left
    } else {
      curr = stack.pop()
      res.push(curr.val)
      curr = curr.right
    }
  }
  return res
};
// @lc code=end

