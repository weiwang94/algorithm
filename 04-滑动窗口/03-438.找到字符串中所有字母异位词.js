/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let need = {}
  let win = {}
  for (let k of p) {
    need[k] = (need[k] || 0) + 1
  }
  let left = 0, right = 0, val = 0, res = []
  while(right < s.length) {
    let str = s[right]
    if (need[str]) {
      win[str] = (win[str] || 0) + 1
      if (need[str] === win[str]) {
        val++
      }
    }
    right++
    while(right - left >= p.length) {
      if(val === Object.keys(p).length) {
        res.push(left)
      }
      let str = s[left]
      if (need[str]) {
        if (win[str] === need[str]) {
          val --
        }
        win[str] --
      }
      left ++
    }
  }
};
// @lc code=end

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

// const s = "cbaebabacd", p = "abc"
const s = "abab", p = "ab"

console.log(findAnagrams(s, p))