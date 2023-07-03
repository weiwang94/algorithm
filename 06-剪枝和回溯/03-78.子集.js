/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const arr = []
  const backtracking = (track, ns, index) => {
    arr.push(track)
    for (let i = index; i < ns.length; i++) {
      track.push(ns[i])
      backtracking([...track], ns, i + 1)
      track.pop()
    }
  }
  backtracking([], nums, 0)
  return arr
};
// @lc code=end

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// const nums = [1,2,3]
// console.log(subsets(nums))