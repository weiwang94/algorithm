/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const set = new Set('aeiou')
  let max = 0
  let count = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (i < k && set.has(s[i])) {
      count ++
    }
    if (i >= k) {
      if (set.has(s[i])) {
        count ++ 
      }
      if (set.has(s[j])) {
        count --
      }
      j ++
    }
    max = Math.max(max, count)
  }
  return max
};
// @lc code=end

// 输入：s = "abciiidef", k = 3
// 输出：3
// 解释：子字符串 "iii" 包含 3 个元音字母。