/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let left = 0
  let right = matrix.reduce((acc, curr) => acc + curr.length, 0)
  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midValue = matrix[Math.floor(mid / m)][mid % n]
    if (midValue < target) {
      left = mid + 1
    } else if (midValue > target) {
      right = mid - 1
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// 输出：false