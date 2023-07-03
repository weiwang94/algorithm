/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let set = new Set();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    const str = s[i];
    if (!set.has(str)) {
      set.add(str);
      max = Math.max(max, set.size);
    } else {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(str);
    }
  }
  return max;
};
// @lc code=end
