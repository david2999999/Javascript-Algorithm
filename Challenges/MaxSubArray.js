console.log(maxSubarraySum([100, 200, 300, 400], 2));

function maxSubarraySum(arr, num){
    if (num >= arr.length) return null;
    let currentSum = 0;
    let maxSum = 0;

    let startingIndexOfWindow = 0;
    let firstValueOfWindow = arr[startingIndexOfWindow];

    for (let i = 0; i < arr.length; i++) {
        if (i >= num) {
            currentSum -= firstValueOfWindow;
            firstValueOfWindow = arr[++startingIndexOfWindow];
        }

        currentSum += arr[i];
        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}