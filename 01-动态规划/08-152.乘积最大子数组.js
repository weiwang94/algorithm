/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function (nums) {
  let res = nums[0];
  let prevMin = nums[0];
  let prevMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const temp1 = prevMin * nums[i];
    const temp2 = prevMax * nums[i];
    prevMin = Math.min(temp1, temp2, nums[i]);
    prevMax = Math.max(temp1, temp2, nums[i]);
    res = Math.max(prevMax, res);
  }
  return res;
};
// @lc code=end