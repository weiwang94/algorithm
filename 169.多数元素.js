/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const getCount = (num, left, right) => {
    let count = 0
    for(let i = left; i <= right; i++) {
      if (nums[i] === num) {
        count ++
      }
    }
    return count
  }
  const recursion = (left, right) => {
    if (left === right) {
      return nums[left]
    }
    const mid = Math.floor((left + right) / 2)
    const leftNum = recursion(left, mid)
    const rightNum = recursion(mid + 1, right)
    if (leftNum === rightNum) {
      return leftNum
    }
    const leftCount = getCount(leftNum, left, mid)
    const rightCount = getCount(rightNum, mid + 1, right)
    return leftCount > rightCount ? leftNum : rightNum
  }
  return recursion(0, nums.length - 1)
};
// @lc code=end

// const nums = [6, 5, 5];
// console.log(majorityElement(nums));