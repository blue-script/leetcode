// ❓ Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

// ✅ SOLUTION
/**
 * @param {string[]} words
 * @return {string[]}
 */

const countChars = (word) => {
  const result = {}
  for (let letter of word) {
    if (!result[letter]) result[letter] = 0

    result[letter]++
  }

  return result
}

const compare = (first, second) => {
  const result = {}
  for (let key in first) {
    if (second[key]) {
      result[key] = Math.min(first[key], second[key])
    }
  }
  return result
}

const resultToArray = (obj) => {
  let result = []
  for (let [key, value] of Object.entries(obj)) {
    for (let i = 0; i < value; i ++) {
      result.push(key)
    }
  }
  return result
}

var commonChars = function (words) {
  let frequencyCounter = countChars(words[0])

  for (let i = 1; i < words.length; i++) {
    frequencyCounter = compare(frequencyCounter, countChars(words[i]))
  }

  return resultToArray(frequencyCounter)
};

console.log(commonChars(["cool", "lock", "cook"]))