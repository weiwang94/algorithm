/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 循环法
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = nums[mid];
    if (value === target) {
      return mid;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// @lc code=end