/* 
** 动态规划
** 数组动态改变前两位
*/

const fb = function(n) {
  if (n <= 1) {
    return n
  }
  const arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[0] + arr[1]
    arr[0] = arr[1]
    arr[1] = arr[i]
  }

  return arr[1]
}