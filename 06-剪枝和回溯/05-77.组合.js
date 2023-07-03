/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function (n, k) {
  const arr = [];
  const backtracking = (track, index) => {
    if (track.length === k) {
      arr.push(track);
      return
    }
    for (let i = index; i <= n - (k - track.length)  + 1; i++) {
      track.push(i)
      backtracking([...track], i+1)
      track.pop()
    }
  };
  backtracking([], 1);
  return arr;
};
// @lc code=end

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

const n = 4,
  k = 2;
console.log(combine(n, k));
