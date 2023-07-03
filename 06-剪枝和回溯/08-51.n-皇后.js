/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const board = new Array(n)
  for(let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  const res = []
  const coled = new Set()
  const forwoardSlashed = new Set()
  const backSlashed = new Set()
  const backTrack = (row) => {
    if(row === n && board[row - 1].includes('Q')) {
      const resultBoard = board.slice()
      for(let i = 0; i < n; i++) {
        resultBoard[i] = resultBoard[i].join('')
      }
      res.push(resultBoard)
      return
    }
    for(let col = 0; col < n; col++) {
      if (!coled.has(col) && !forwoardSlashed.has(col + row) && !backSlashed.has(col - row)) {
        board[row][col] = 'Q'
        coled.add(col)
        forwoardSlashed.add(col + row)
        backSlashed.add(col - row)
        backTrack(row + 1)
        board[row][col] = '.'
        coled.delete(col)
        forwoardSlashed.delete(col + row)
        backSlashed.delete(col - row)
      }
    }
  }
  backTrack(0)
  return res
};
// @lc code=end

// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

// 输入：n = 1
// 输出：[["Q"]]

// console.log(solveNQueens(4))