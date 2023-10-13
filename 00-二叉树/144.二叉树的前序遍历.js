/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  const traversal = (curr, res) => {
    if (curr === null) {
      return []
    }
    res.push(curr.val)
    res.push(...traversal(curr.left, []))
    res.push(...traversal(curr.right, []))
    return res
  }
  return traversal(root, [])
};

// 第一种 循环
var preorderTraversal = function(root) {
  const res = []
  const stack = [root]
  while(stack.length > 0) {
    const curr = stack.pop()
    if (curr !== null) { 
      res.push(curr.val)
      stack.push(curr.right)
      stack.push(curr.left)
    } 
  }
  return res
};

// 第二种 循环
var preorderTraversal = function(root) {
  const res = []
  const stack = []
  let curr = root
  while(stack.length > 0 || curr !== null) {
    if (curr !== null) {
      res.push(curr.val)
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()
      curr = curr.right
    }
  }
  return res
};
// @lc code=end

