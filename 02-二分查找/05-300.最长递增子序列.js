/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let n = nums.length;
  if (n <= 1) {
      return n;
  }
  let tail = [nums[0]]; // 存放最长上升子序列数组
  for (let i = 0; i < n; i++) {
      if (nums[i] > tail[tail.length - 1]) { //当 nums 中的元素比tail中的最后一个大时 可以放心push进tail，自然有序
          tail.push(nums[i]);
      } else { //否则 进行二分查找, 使 tail 数组有序，小的值替换大的值
          let left = 0;
          let right = tail.length - 1;
          while (left < right) {
              let mid = (left + right) >> 1;
              if (tail[mid] < nums[i]) {
                  left = mid + 1;
              } else {
                  right = mid;
              }
          }
          tail[left] = nums[i]; //将 nums[i] 替换合适的位置的值
      }
  }
  return tail.length;
};
// @lc code=end

/* 输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

输入：nums = [0,1,0,3,2,3]
输出：4

输入：nums = [7,7,7,7,7,7,7]
输出：1 */

/* 
** 动态规划解法
*/

 var lengthOfLIS = function(nums) {
  const dp = Array(nums.length).fill(1)
  let res = 1
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
};