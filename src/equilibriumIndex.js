/*
Description: 
Equilibrium index is the index where the prefix sum and suffix sum become equal.
This example is combination of prefix and suffix sum pattern.

Add following to main.js
var name = 'Equilibrium Index Example';
var output = equilibriumPoint([-7, 1, 5, 2, -4, 3, 0]);
*/

// Program to find equilibrium index of an array
export function equilibriumPoint(arr) {
  let n = arr.length;
  if (n === 1) return 1;

  // Arrays to store prefix and suffix sums
  let prefix = new Array(n).fill(0);
  let suffix = new Array(n).fill(0);

  // Initialize prefix sum
  prefix[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  // Initialize suffix sum
  suffix[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + arr[i];
  }

  // Check for equilibrium index
  for (let i = 0; i < n; i++) {
    if (prefix[i] === suffix[i]) {
      return i + 1; // return 1-based index
    }
  }
  return -1;
}
