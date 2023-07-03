/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid 
  while(left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid === target) {
      break
    } else if (mid < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (left > right) {
    return [-1, -1]
  }

  let i = mid
  let j = mid
  while(nums[i] === target) {
    i++
  }
  while(nums[j] === target) {
    j--
  }
  return [j, i]
};
// @lc code=end

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

// 输入：nums = [], target = 0
// 输出：[-1,-1]