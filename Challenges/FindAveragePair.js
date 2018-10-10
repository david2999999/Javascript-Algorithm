console.log(findAveragePair([1,2,3, 4], 2.5));

function findAveragePair(arr, targetAverage) {
    if (arr.length === 0) return false;
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        if (average(arr[i], arr[j]) === targetAverage) {
            return true;
        } else if (average(arr[i], arr[j]) > targetAverage) {
            j--;
        } else {
            i++;
        }
    }

    return false;
}

function average(a, b) {
    return (a + b) / 2;
}