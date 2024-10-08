// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.
//   Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
//   Example 2:
// Input: s = "", t = "y"
// Output: "y"
// Constraints:
// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.

// ✅ SOLUTION
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const toObj = (str) => {
  const obj = {}

  for (let l of str) {
    if (!obj[l]) {
      obj[l] = 0
    }

    obj[l]++
  }

  return obj
}

var findTheDifference = function (s, t) {
  const sObj = toObj(s)
  const tObj = toObj(t)

  for (let l of t) {
    if (sObj[l] !== tObj[l]) {
      return l
    }
  }

  return null
};

let s = "abcd", t = "abcde"

console.log(findTheDifference(s, t))

// variant 2
const charSum = (str) => {
  let sum = 0

  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i)
  }

  return sum
}

var findTheDifference = function (s, t) {
  const sumS = charSum(s)
  const sumT = charSum(t)

  return String.fromCharCode(sumT - sumS)
};
