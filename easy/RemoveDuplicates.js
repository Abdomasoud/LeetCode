// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] != nums[left]) nums[++left] = nums[right];
  }
  return ++left;
};

// time complexity: O(n)
// space complexity: O(1)
