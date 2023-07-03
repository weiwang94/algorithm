/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
  const height = board.length;
  const width = board[0].length;
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = new Array(height);
  for (let i = 0; i < height; i++) {
    visited[i] = new Array(width).fill(false);
  }
  const backtracking = (position, i) => {
    const [row, col] = position;
    if (board[row][col] !== word[i]) {
      return false;
    } else if (i === word.length - 1) {
      return true;
    }
    visited[row][col] = true;
    let result = false;
    for (const [x, y] of direction) {
      const dx = row + x;
      const dy = col + y;
      if (dx >= 0 && dy >= 0 && dx < height && dy < width) {
        if (!visited[dx][dy]) {
          if (backtracking([dx, dy], i + 1)) {
            result = true
            break;
          }
        }
      }
    }
    visited[row][col] = false;
    return result;
  };
  let flag = false
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const flag = backtracking([row, col], 0);
      if (flag) {
        return true;
      }
    }
  }
  return flag
};
// @lc code=end

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

// const board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   word = "ABCCED";
