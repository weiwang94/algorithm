/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const getCrossSum = (nums, left, right, mid) => {
    if (left === right) {
      return nums[left]
    }
    let leftMax = Number.MIN_SAFE_INTEGER
    let leftSum = 0
    for(let i = mid; i >= left; i--) {
      leftSum = leftSum + nums[i]
      leftMax = Math.max(leftMax, leftSum)
    }

    let rightMax = Number.MIN_SAFE_INTEGER
    let rightSum = 0
    for(let i = mid + 1; i <= right; i++) {
      rightSum = rightSum + nums[i]
      rightMax = Math.max(rightMax, rightSum)
    }
    return leftMax + rightMax
  }

  const getSum = (nums, left, right) => {
    if (left === right) {
      return nums[left]
    }
    const mid = Math.floor((left + right) / 2)
    const leftSum = getSum(nums, left, mid) 
    const rightSum = getSum(nums, mid+1, right)
    const crossSum = getCrossSum(nums, left, right, mid)
    return Math.max(leftSum, rightSum, crossSum)
  };
  return getSum(nums, 0, nums.length - 1)
};
// @lc code=end

