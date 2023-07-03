/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II(medium)
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    arr[i][0] = 1;
  }
  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    arr[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = obstacleGrid[i][j] === 1 ? 0 : arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[m - 1][n - 1];
};
// @lc code=end

// 压缩状态法
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const arr = new Array(n).fill(0)
  arr[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) {
        arr[j] = 0
      } else if (j > 0) {
        arr[j] += arr[j-1]
      }
    }
  }
  return arr[n - 1];
};