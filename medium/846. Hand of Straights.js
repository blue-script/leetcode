// ❓ Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// Constraints:
// 1 <= hand.length <= 104
// 0 <= hand[i] <= 109
// 1 <= groupSize <= hand.length

// ✅ SOLUTION
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false

  const countNumbers = new Map()
  for (const value of hand) {
    countNumbers.set(value, (countNumbers.get(value) || 0) + 1)
  }

  const countNumbersKeys = Array.from(countNumbers.keys()).sort((a, b) => a - b)

  for (const key of countNumbersKeys) {
    const currentValue = countNumbers.get(key)

    if (currentValue > 0) {
      for (let i = 0; i < groupSize; i++) {
        const nextValue = key + i
  
        if ((countNumbers.get(nextValue) || 0 ) < currentValue) {
          return false
        }
  
        countNumbers.set(nextValue, countNumbers.get(nextValue) - currentValue)
      }
    }
  }

  return true
};


hand = [8, 10, 12]
groupSize = 3  // false

console.log(isNStraightHand(hand, groupSize))