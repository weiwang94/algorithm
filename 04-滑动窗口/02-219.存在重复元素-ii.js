/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) { 
      return true
    }
    set.add(nums[i])
    if (set.size > k) {
      set.delete(nums[i - k]) // 删除不满足 j - i <= k 的元素
    }
  }
  return false
};
// @lc code=end

// 输入：nums = [1,2,3,1], k = 3
// 输出：true

// 输入：nums = [1,0,1,1], k = 1
// 输出：true

// 输入：nums = [1,2,3,1,2,3], k = 2
// 输出：false

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

