// ❓ Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// ✅ SOLUTION

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// first variant
// var twoSum = function (nums, target) {
//   const sortNums = nums.map((el, idx) => [el, idx]).sort((a, b) => a[0] - b[0])
//   let [i, j] = [0, nums.length - 1]
//   while (i < j) {
//       if (sortNums[i][0] + sortNums[j][0] === target) {
//           return [sortNums[i][1], sortNums[j][1]]
//       }
//       if (target - sortNums[i][0] > sortNums[j][0]) i++
//       else j--
//   }
//   return []
// };

var twoSum = function (nums, target) {
  const map = new Map() 
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i]
    if (map.has(num)) {
        return [i, map.get(num)]
    }

    map.set(nums[i], i)
  }
};

console.log(twoSum([3, 2, 4], 6)) // [1,2]