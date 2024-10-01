var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b); // Sort the array first
  let left = 0;
  let total = 0;
  let maxFreq = 0;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right];

    while (nums[right] * (right - left + 1) - total > k) {
      total -= nums[left];
      left++;
    }

    maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq;
};

// Example usage:
console.log(maxFrequency([1, 2, 4], 5)); // 3
console.log(maxFrequency([1, 4, 8, 13], 5)); // 2
console.log(maxFrequency([3, 9, 6], 2)); // 1
