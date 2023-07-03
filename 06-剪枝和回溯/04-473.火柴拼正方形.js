/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function (matchsticks) {
  if (matchsticks.length < 4) {
    return false;
  }
  const sum = matchsticks.reduce((acc, curr) => acc + curr);
  if (sum % 4 !== 0) {
    return false;
  }
  if (matchsticks.find((d) => d > sum / 4)) {
    return false;
  }
  // index 是 nums 中元素的下标， 如果元素循环完了，则能构成正方形
  const backtrack = (index, nums, len, bucket) => {
    if (index > nums.length - 1) {
      return true;
    }
    for (let i = 0; i < 4; i++) {
      if (nums[index] + bucket[i] > len) {
        return false;
      }

      bucket[i] += nums[index];
      if (backtrack(index + 1, nums, len, bucket)) {
        return true;
      }
      bucket[i] -= nums[index];
    }
    return false;
  };

  const bucket = new Array(4).fill(0);
  matchsticks.sort((a, b) => a - b);
  return backtrack(0, matchsticks, sum / 4, bucket);
};
// @lc code=end

// 输入: matchsticks = [1,1,2,2,2]
// 输出: true
// 解释: 能拼成一个边长为2的正方形，每边两根火柴。

// 输入: matchsticks = [3,3,3,3,4]
// 输出: false
// 解释: 不能用所有火柴拼成一个正方形

// const matchsticks = [14, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 9, 19];

// // const matchsticks = [1,1,2,2,2]

// console.log(makesquare(matchsticks));
