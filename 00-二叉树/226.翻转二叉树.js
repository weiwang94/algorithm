/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const traversal = (curr) => {
    if (curr === null) {
      return curr;
    }
    const node = curr.left;
    curr.left = curr.right;
    curr.right = node;
    traversal(curr.left);
    traversal(curr.right);
    return curr;
  };
  return traversal(root);
};
// @lc code=end
