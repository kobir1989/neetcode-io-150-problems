// #1 Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Approach 1
const hasDuplicateOne = (nums: number[]): boolean => {
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Approach 2
interface HashMap {
  [key: number]: number;
}
const hasDuplicateTow = (nums: number[]): boolean => {
  const map: HashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) return true;
    else map[nums[i]] = nums[i];
  }
  return false;
};

// console.log(hasDuplicate([1, 2, 4, 3, 4]));

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
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Approach 1
const isAnagramOne = (s: string, t: string): boolean => {
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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Approach 2
interface HashMap {
  [key: string]: number;
}

const isAnagramTwo = (s: string, t: string): boolean => {
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

// console.log(isAnagramTwo('racecar', 'carrace'));

// #3 Two Integer Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input:
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]
// Example 3:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums: number[], target: number): number[] => {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([3, 4, 5, 6], 7));
