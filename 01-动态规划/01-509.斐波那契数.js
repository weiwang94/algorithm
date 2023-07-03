/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数(easy)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) { 
  if (n <= 1) {
    return n
  }
  const arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};
// @lc code=end


// 状态压缩
var fib = function(n) { 
  if (n <= 1) {
    return n
  }
  const arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr[2] = arr[1] + arr[0]
    arr[0] = arr[1]
    arr[1] = arr[2]
  }
  return arr[2]
};