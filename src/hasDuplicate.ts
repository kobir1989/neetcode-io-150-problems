import { HashMap } from '../types/types';

// #1 Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

// Approach 1
export const hasDuplicateOne = (nums: number[]): boolean => {
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return true;
    }
  }
  return false;
};

// Approach 2

export const hasDuplicateTow = (nums: number[]): boolean => {
  const map: HashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) return true;
    else map[nums[i]] = nums[i];
  }
  return false;
};

// console.log(hasDuplicate([1, 2, 4, 3, 4]));
