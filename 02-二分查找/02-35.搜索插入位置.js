/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let res = nums.length
  while(left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] >= target) {
      right = mid - 1     
      res = mid 
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  } 
  return res
};
// @lc code=end