/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function (board) {
  const isValid = (row, col, num, board) => {
    // 验证 行是否 合法
    if (board[row].includes(num)) {
      return false;
    }
    // 验证 列是否 合法
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }

    // 验证 9*9 格子是否 合法
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  };

  const backTracking = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === ".") {
          for (let i = 1; i < 10; i++) {
            if (isValid(row, col, `${i}`, board)) {
              board[row][col] = `${i}`;
              if (backTracking()) {
                return true;
              }
              board[row][col] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  };
  backTracking();
  return board;
};
// @lc code=end

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// console.log(solveSudoku(board))