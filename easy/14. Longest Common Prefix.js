// ❓ Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 // Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// ✅ SOLUTION
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = strs[0].length; i >= 1; i--) {
      let prefix = strs[0].slice(0, i)
      let flag = true
      for (let j = 1; j < strs.length; j++) {
          if (!strs[j].startsWith(prefix)) {
              flag = false
              break
          }
      }
      if (flag) return prefix
  }
  return ''
};

console.log(longestCommonPrefix(["flower","flow","flight"]))