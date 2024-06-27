// #2. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

interface HashMap {
  [key: string]: string[]
}

const sortStr = (str: string): string => {
  return str.split('').sort().join('')
}
export const groupAnagrams = (strs: string[]) => {
  const hashMap: HashMap = {}

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = sortStr(strs[i])
    if (hashMap[sortedWord]) {
      hashMap[sortedWord].push(strs[i])
    } else {
      hashMap[sortedWord] = [strs[i]]
    }
  }
  return Object.values(hashMap)
}
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
