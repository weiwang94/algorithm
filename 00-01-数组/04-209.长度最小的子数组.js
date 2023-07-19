/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0 
  let len = 0
  let res = Infinity
  let sum = 0
  for(let right = 0; right < nums.length; right++) {
      sum += nums[right]
      while (sum >= target) {
          len = right - left + 1
          res = Math.min(res, len)
          sum = sum - nums[left++]
      }
  }
  return res === Infinity ? 0 : res
};
// @lc code=end

