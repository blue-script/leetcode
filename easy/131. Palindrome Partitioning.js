// ❓ Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

// ✅ SOLUTION

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = []  

  const isPalindrom = (substr) => {
      let left = 0
      let right = substr.length - 1

      while (left < right) {
          if (substr[left] !== substr[right]) return false
          left++
          right--
      }
      return true
  }

  const backtrack = (start, path) => {
      if (start === s.length) {
          result.push([...path])
          return
      }

      for (let end = start + 1; end <= s.length; end++) {
          const substr = s.slice(start, end)

          if (isPalindrom(substr)) {
              path.push(substr)
              backtrack(end, path)
              path.pop()
          }
      }

  }

  backtrack(0, [])
  return result
};

const s1 = "aab";
console.log(partition(s1));  // Output: [["a","a","b"],["aa","b"]]