// Given two integer arrays nums1 and nums2, return an array of their
// intersection
//   .Each element in the result must be unique and you may return the result in any order.
//     Example 1:
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]
// Example 2:
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9, 4]
// Explanation: [4, 9] is also accepted.
//   Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// ✅ SOLUTION

var intersection = function (nums1, nums2) {
  let set = new Set()

  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }

  for (let i = 0; i < nums1.length; i++) {
    nums2.forEach(num => {
      if (num === nums1[i]) set.add(nums1[i])
    })
  }

  return [...set]
};

// variant 2

var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const res = []

  set1.forEach(el => {
    if (set2.has(el)) {
      res.push(el)
    }
  })

  return res
}