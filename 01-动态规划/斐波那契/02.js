/* 
** 递归加记忆
*/

const fb = function(n) {
  
  const memorized = []
  const recursion = function(m) {
    if (m <= 1) {
      return m
    }

    if (memorized[m]) {
      return memorized[m]
    }
    memorized[m] = recursion(m - 1) + recursion(m - 2)
    return memorized[m]
  }
  return recursion(n)
}

