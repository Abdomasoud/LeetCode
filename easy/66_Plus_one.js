var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]

// time complexity: O(n) because of the for loop
// space complexity: O(1) because we are modifying the input array in place, but if we create new array, then it would be O(n)
