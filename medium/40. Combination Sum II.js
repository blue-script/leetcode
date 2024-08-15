// Given a collection of candidate numbers(candidates) and a target number(target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
// Example 1:
// Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
// Output:
// [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6]
// ]
// Example 2:
// Input: candidates = [2, 5, 2, 1, 2], target = 5
// Output:
// [
//   [1, 2, 2],
//   [5]
// ]
// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 

// ✅ SOLUTION
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b)
  const result = []
  const stack = [[0, [], 0]]

  while (stack.length > 0) {
    const [currSum, combination, index] = stack.pop()

    if (currSum === target) {
      result.push(combination)
      continue
    }

    if (currSum > target) {
      continue
    }

    for (let j = index; j < candidates.length; j++) {
      if (j > index && candidates[j] === candidates[j - 1]) {
        continue
      }

      const newCombination = combination.concat(candidates[j])
      const newSum = currSum + candidates[j]
      stack.push([newSum, newCombination, j + 1])
    }
  }

  return result
}

candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
console.log(combinationSum2(candidates, target))