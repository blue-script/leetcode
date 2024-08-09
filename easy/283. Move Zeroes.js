/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0, j = nums.length - 1
  while (i < j) {
    if (nums[i] === 0) {
      nums.push(nums[i])
      nums.splice(i, 1)
      j--
    } else {
      i++
    }
  }

  return nums
};

console.log(moveZeroes([0, 0, 1, 0, 3, 12]))