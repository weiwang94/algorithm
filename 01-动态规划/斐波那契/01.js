/* 
** 直接暴力递归
*/
// 复杂度 O(n^2)
const fb = function(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  return fb(n - 1) + fb(n - 2)
}

