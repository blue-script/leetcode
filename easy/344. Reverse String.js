// Write a function that reverses a string.The input string is given as an array of characters s.
// You must do this by modifying the input array in -place with O(1) extra memory.
//   Example 1:
// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Example 2:
// Input: s = ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]
// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// ✅ SOLUTION
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }

  return s
};

// variant 2

var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }

  return s
};
