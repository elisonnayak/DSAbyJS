export function findMaxAverage(arr, k){
    let arrSize = arr.length;
    let maxAverage = 0;
    let windowSum = 0;
    for(let i = 0; i < k; i++){
        windowSum+=arr[i];
    }

    let maxSum = windowSum;

    for(let j = k; j < arrSize; j++){
        windowSum = windowSum + arr[j] - arr[j-k];
        maxSum = Math.max(maxSum, windowSum);
    }
    maxAverage = Math.round(maxSum);
    return maxAverage;
}