// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
//   Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are['I', 'e', 'e', 'A'].On reversing the vowels, s becomes "AceCreIm".
//   Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// ✅ SOLUTION
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU"
  const arr = s.split("")
  let i = 0, j = arr.length - 1

  while (i < j) {
    if (vowels.includes(arr[i]) && vowels.includes(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
    if (!vowels.includes(arr[i])) i++
    if (!vowels.includes(arr[j])) j--
  }

  return arr.join("")
}

console.log(reverseVowels("IceCreAm"))