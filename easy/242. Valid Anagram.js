// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const sCountLetters = {}
  for (let i = 0; i < s.length; i++) {
    if (!sCountLetters[s[i]]) {
      sCountLetters[s[i]] = 0
    }
    sCountLetters[s[i]]++
  }

  for (let i = 0; i < t.length; i++) {
    sCountLetters[t[i]]--
    if (sCountLetters[t[i]] < 0) {
      return false
    }
  }

  for (let value of Object.values(sCountLetters)) {
    if (value !== 0) {
      return false
    }
  }

  return true
};