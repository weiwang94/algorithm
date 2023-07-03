/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x  
  let res = 0;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (mid * mid <= x) {
      res = mid
      left = mid + 1
    } else {
      right = mid - 1;
    }
  }
  return res
};
// @lc code=end

// 0 <= x <= 231 - 1

// 思路， x 的平方根在一个范围内， 0 ~ x， 二分查找那个数

console.log(mySqrt(4))