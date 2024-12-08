/*
Description: The two pointers move based on condition and return when the condition is met which is the target value in the second parameter.
Add following to main.js
var name = 'Two Sum Example';
var output = twoSUM([1, 2, 3, 4, 5], 6);
*/

export function twoSUM(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) {
      return [left, right];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
}
