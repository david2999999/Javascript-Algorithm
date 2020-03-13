console.log(sameFrequency([1, 2, 3, 4, 4, 5, 5, 6], [1, 2, 3, 4, 4, 5, 5, 5]));

function sameFrequency(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};

    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] ? frequencyCounter1[arr1[i]]++ : frequencyCounter1[arr1[i]] = 1;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!frequencyCounter1[arr2[i]]) return false;
        else if (frequencyCounter1[arr2[i]] === 0) return false;
        else frequencyCounter1[arr2[i]]--;
    }

    return true;
}

