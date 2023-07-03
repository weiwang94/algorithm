/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const arr = []
  const backtracking = (track, ns) => {
    if (track.length === ns.length) {
      arr.push(track)
      return
    }
    for (let i = 0; i < ns.length; i++) {
      if (track.includes(ns[i])) {
        continue
      }
      track.push(ns[i])
      backtracking([...track], ns)
      track.pop()
    }
  }
  backtracking([], nums)
  return arr
};
// @lc code=end

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const nums = [1,2,3]

console.log(permute(nums))