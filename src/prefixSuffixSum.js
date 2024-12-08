/* Prefix Sum Pattern Example */
export function outPutPrefixSum(arr) {
  let n = arr.length;
  let prefix = new Array(n).fill(0);
  prefix[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
}

/* Suffix Sum Pattern Example */
export function outPutSuffixSum(arr) {
  let n = arr.length;
  let suffix = new Array(n).fill(0);
  suffix[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + arr[i];
  }
  return suffix;
}
