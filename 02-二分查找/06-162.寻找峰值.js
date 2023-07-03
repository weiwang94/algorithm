/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left < right) {
      const mid = Math.floor((left + right) / 2)
      // 顺着上升的方向找，准没错
      if (nums[mid] < nums[mid + 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return  left
};
// @lc code=end

// 输入：nums = [1,2,3,1]
// 输出：2
// 解释：3 是峰值元素，你的函数应该返回其索引 2。

// 输入：nums = [1,2,1,3,5,6,4]
// 输出：1 或 5 
// 解释：你的函数可以返回索引 1，其峰值元素为 2；
//      或者返回索引 5， 其峰值元素为 6。

console.log(findPeakElement([1,2,3,1]))