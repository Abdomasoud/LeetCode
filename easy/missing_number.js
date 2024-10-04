/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let v = new Array(n + 1).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    v[nums[i]] = nums[i];
  }

  for (let i = 0; i < v.length; i++) {
    if (v[i] === -1) {
      return i;
    }
    console.log(v);
  }
};

console.log(missingNumber([3, 0, 1])); // 2

// time complexity: O(n) why? because we are iterating through the array twice but itis two loops of n elements each
// space complexity: O(n)
