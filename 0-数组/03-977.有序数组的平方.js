/**
* @param {number[]} nums
* @return {number[]}
*/
var sortedSquares = function(nums) {
   const len = nums.length
   const arr = []
   let k = len - 1
   for (let i = 0, j = len - 1; i <= j;) {
       if(nums[i] * nums[i] < nums[j] * nums[j]) {
           arr[k--] = nums[j] * nums[j]
           j--
       } else {
          arr[k--] = nums[i] * nums[i]
           i++
       }
   }
   return arr
};