// https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = nums.length; // Start by assuming the target is larger than all elements

  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i; // Return the index where the target is found
    } else if (target < nums[i]) {
      index = i; // If target is smaller than the current element, that's the insertion point
      break; // No need to continue since nums is sorted
    }
  }

  return index; // Return the index where the target should be inserted
};
