/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数(medium)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n).fill(0); //初始化 dp 数组 当 n 为 0 的时候
  for (let i = 1; i <= n; i++) {
      dp[i] = i; // 最坏的情况就是每次 +1 比如: dp[3]=1+1+1
      for (let j = 1; i - j * j >= 0; j++) {//枚举前一个状态
          dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
      }
  }
  return dp[n];
};
// @lc code=end

