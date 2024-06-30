// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]
// Constraints:
// 1 <= numRows <= 30

// ✅ SOLUTION

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) {
      return [[1]]
  }
  let arr = [[1], [1,1]]
  for (let i = 2; i < numRows; i++) {
      let prevArr = arr[i-1]
      nextArr = []
      for (let j = 1; j < prevArr.length; j++) {
          nextArr.push(prevArr[j]+prevArr[j-1])
      }
      nextArr.unshift(1)
      nextArr.push(1)
      arr.push(nextArr)
  }

  return arr
};