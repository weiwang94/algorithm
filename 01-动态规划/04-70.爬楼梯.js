/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯(medium)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
// @lc code=end

// 状态压缩法
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  let prev = 1;
  let next = 2;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
  }
  return sum;
};
