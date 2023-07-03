/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let left = 0
  const arr = [fruits[0]]
  let max = 0
  let before = 0
  for (let right = 0; right < fruits.length; right++) {
    const f = fruits[right]
    if (!arr.includes(f)) {
      if (arr.length === 1) {
        arr.push(f)
      } else {
        left = before
        arr[0] = fruits[right - 1]
        arr[1] = f
      } 
    }

    if (f !== fruits[before]) {
      before = right
    }
    max = Math.max(max, right - left + 1)
  }
  return max
};
// @lc code=end

// [1, 2, 1] =>  3