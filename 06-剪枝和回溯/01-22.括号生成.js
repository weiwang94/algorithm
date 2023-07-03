/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  if (n === 0) {
    return ''
  }
  const arr = []
  const backtracking = (track, left, right) => {
    if (left < 0 || right < 0 || left > right) {
      return 
    }
    if (left === 0 && right === 0) {
      arr.push(track.join(''))
      return
    }
    track.push('(')
    backtracking([...track], left - 1, right)
    track.pop()

    track.push(')')
    backtracking([...track], left, right - 1)
    track.pop()
  }
  backtracking([], n, n)
  return arr
};
// @lc code=end

// n = 1
// ()

// n = 2
// (())  ()()  

// n = 3
// ((()))  (()())  ()()()  (())()  ()(()) 

// const n = 3
// console.log(generateParenthesis(n))