// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]
// Constraints:
// 1 <= n <= 8

// ✅ SOLUTION
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const list = []
  const open = n
  const close = n
  const output = ''

  function rec(open, close, output) {
    if (open === 0 && close === 0) {
      list.push(output)
      return
    }

    if (open != 0) {
      let output1 = output + '('
      rec(open - 1, close, output1)
    }

    if (open < close) {
      let output2 = output + ')'
      rec(open, close - 1, output2)
    }
  }

  rec(open, close, output)
  return list
};

console.log(generateParenthesis(3))