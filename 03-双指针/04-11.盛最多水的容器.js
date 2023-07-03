/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let i = 0; j = height.length - 1; i < j) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--]  // 能容纳水的多少，取决于短板，所以移动短板就行
    const area = minHeight * (j - i + 1)
    max = Math.max(max, area)
  }
  return max
};
// @lc code=end

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。