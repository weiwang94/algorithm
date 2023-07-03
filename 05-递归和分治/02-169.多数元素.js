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
 var majorityElement = function (nums) {
  const getCount = (num, left, right) => {
    let count = 0
    while(left <= right) {
      if (nums[left] === num) {
        count++
      }
      left++
    }
    return count
  }

  const getModel = (left, right) => {
    if (left === right) {
      return nums[left]
    }

    const mid = Math.floor((left + right) / 2)
    const leftNum = getModel(left, mid)
    const rightNum = getModel(mid + 1, right)
    if (leftNum === rightNum) {
      return leftNum
    }

    const leftCount = getCount(leftNum, left, mid)
    const rightCount = getCount(rightNum, mid+1, right)
    return leftCount > rightCount ? leftNum : rightNum
  }

  return getModel(0, nums.length - 1)
};
// @lc code=end

const nums = [6, 5, 5];
console.log(majorityElement(nums));
