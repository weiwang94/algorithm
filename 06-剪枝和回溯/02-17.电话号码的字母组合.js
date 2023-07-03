/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (digits === '') {
    return []
  }
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const arr= []
  const backtracking = (track, index) => {
    if (track.length === digits.length) {
      arr.push(track.join(''))
      return
    }
    const str  = map[digits[index]]
    for (let i = 0; i < str.length; i++) {
      track.push(str[i])
      backtracking([...track], index + 1)
      track.pop()
    }
  }
  backtracking([], 0)
  return arr
};
// @lc code=end

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

// const digits = "23"
// console.log(letterCombinations(digits))