import { HashMap } from '../types/types';

// #2 Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

// Approach 1
export const isAnagramOne = (s: string, t: string): boolean => {
  const a = s
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  const b = t
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  return a === b;
};

export const isAnagramTwo = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  const mapOne: HashMap = {};
  const mapTwo: HashMap = {};
  for (let i = 0; i < s.length; i++) {
    mapOne[s[i]] = (mapOne[s[i]] || 0) + 1;
    mapTwo[t[i]] = (mapTwo[t[i]] || 0) + 1;
  }
  for (const char in mapOne) {
    if (mapOne[char] !== mapTwo[char]) return false;
  }
  return true;
};

console.log(isAnagramTwo('racecar', 'carrace'));
