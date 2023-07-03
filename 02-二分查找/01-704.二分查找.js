/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 循环法
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = nums[mid];
    if (value === target) {
      return mid;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

var search = function (nums, target) {
  // 递归解法，有个展开，合并的过程，如何利用这个过程是关键
  // 递归思路： 
  //        递归参数： nums， target， 下标
  //        展开：每一次，找到就结束返回下标，没找到，判断能不能继续找，能找就继续递归，不能找返回 -1，
  //        合并：没找到 -1， 找到 下标， 其他 0， 最终把所有返回结果相加  
  
  const binarySearch = function(nums, target, left, right) {
    if (left > right) {
      return -1  
    }
    const n = right - left + 1 // left 和 right 中间有 n 项
    const mid = left + Math.floor(n / 2) // 中间项的下标 
    if (nums[mid] === target) {
       return mid
    } else if (nums[mid] < target) {
      // 往右边找
      return binarySearch(nums, target, mid + 1, right)
    } else if (nums[mid] > target) {
      // 往左边找
      return binarySearch(nums, target, left, mid - 1)
    }
  }
  return binarySearch(nums, target, 0, nums.length - 1)
};
// @lc code=end

/* 
** 问题分析
** 目的：在有序数组里面查找数据
** 思考： 有序和查找，最先想到的就是 二分查找 ，事实上也是最正确的解决办法
*/

/* 
** 解决思路
** 目的：找下标，二分查找需要确定查找范围，所以需要两个变量确定查找的范围
** 循环解法步骤：
      1， 
*/
// 解决思路： 