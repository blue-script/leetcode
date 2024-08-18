// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return the nth ugly number.
//   Example 1:
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
//   Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Constraints:
// 1 <= n <= 1690

// ✅ SOLUTION
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const arr = [1]
  let idxs = [0, 0, 0]

  while (arr.length < n) {
    let next = [
      arr[idxs[0]] * 2,
      arr[idxs[1]] * 3,
      arr[idxs[2]] * 5,
    ]

    let min = Math.min(...next)
    arr.push(min)

    if (next[0] === min) {
      idxs[0]++
    }
    if (next[1] === min) {
      idxs[1]++
    }
    if (next[2] === min) {
      idxs[2]++
    }

  }

  return arr[arr.length - 1]
};

console.log(nthUglyNumber(10))