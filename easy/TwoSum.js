// https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array

const twoSum = (nums, target) => {
  // Create an empty hashmap to store the value and its index
  let hashmap = new Map();
  // Traverse the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (target - current number)
    let complement = target - nums[i];

    // If the complement exists in the hashmap, return the indices
    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i]; // Return the index of complement and the current index
    }

    // Otherwise, store the current number with its index in the hashmap
    hashmap.set(nums[i], i);
  }
};

let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

let nums3 = [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]

// Approach: Hash Table

// Time Complexity: O(n)
// Space Complexity: O(n)
