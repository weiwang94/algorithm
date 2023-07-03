/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  const isValid = (row, col, num, board) => {
    // 判断 行
    if (board[row].includes(num)) {
      return false
    }

    // 判断 列
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false
      }
    }

    // 判断 9 宫格
    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false
        }
      }
    }
    return true
  }

  for(let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const element = board[row][col]
      if (element !== '.') {
        board[row][col] = '.'
        const flag = isValid(row, col, element, board)
        board[row][col] = element
        if (!flag) {
          return false
        } 
      }
    }
  }
  return true
};
// @lc code=end

