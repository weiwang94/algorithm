/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和(medium)
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = new Array(triangle.length).fill(0)
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = new Array(triangle[i].length).fill(0)
  }
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if ( i === triangle.length - 1) {
        dp[i][j] = triangle[i][j]
      } else {
        dp[i][j] = triangle[i][j] + Math.min(triangle[i - 1][j], triangle[i - 1][j+1])
      }
    }
  }
  return dp[0][0]
};
// @lc code=end

// 压缩状态
var minimumTotal = function (triangle) {
  const dp = Array(triangle[triangle.length - 1].length).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === triangle.length - 1) {
        dp[j] = triangle[i][j];
      } else {
        dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
      }
    }
  }
  return dp[0];
};