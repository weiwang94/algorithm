/* 
** 动态规划
** 用变量替换数组
*/

const fb = function(n) {
  if (n <= 1) {
    return n
  }
  let a0 = 0
  let a1 = 1
  let sum = 0
  for (let i = 2; i <= n; i++) {
    sum = a0 + a1
    a0 = a1
    a1 = sum
  }

  return sum
}