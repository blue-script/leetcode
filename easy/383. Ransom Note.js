// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
//   Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// ✅ SOLUTION
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineObj = {}
  for (let char of magazine) {
    if (!magazineObj.hasOwnProperty(char)) {
      magazineObj[char] = 0
    }
    magazineObj[char]++
  }

  for (let char of ransomNote) {
    if (!magazineObj[char] || magazineObj[char] < 1) {
      return false
    }
    magazineObj[char]--
  }

  return true
};

ransomNote = "a", magazine = "b"

console.log(canConstruct(ransomNote, magazine))