/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const arr = new Array(n).fill(0).map(()=> new Array(n).fill(0))
  let left = 0
  let right = n
  let top = 0
  let bottom = n
  let num = 1
  while(num <= n * n) {
      for (let i = left; i <= right; i++) {
          arr[top][i] = num++
      }
      top++
      for (let i = top; i <= bottom; i++) {
          arr[i][right] = num++
      }
      right--
      for (let i = right; i >= left; i--) {
          arr[bottom][i] = num++
      }
      bottom--
       for (let i = bottom; i >= top; i--) {
          arr[i][left] = num++
      }
      left++
  }
  return arr
};
// @lc code=end

