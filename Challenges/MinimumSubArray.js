console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));

function minSubArrayLen(arr, targetSum) {
    let currentSum = 0;
    let maxSumOfArray = 0;

    let numIndex = 0;
    let minNumberOfIndex = arr.length;

    let beginningIndexOfWindow = 0;
    let beginningValueOfWindow = arr[beginningIndexOfWindow];

    for (let i = 0; i < arr.length; i++) {
        maxSumOfArray += arr[i];
        currentSum += arr[i];
        numIndex++;

        while (currentSum >= targetSum) {
            minNumberOfIndex = numIndex < minNumberOfIndex ? numIndex : minNumberOfIndex;

            currentSum -= beginningValueOfWindow;
            beginningValueOfWindow = arr[++beginningIndexOfWindow];
            numIndex--;
        }
    }

    return maxSumOfArray < targetSum ? 0 : minNumberOfIndex;
}