function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let el of arr1) {
        frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
    }

    for (let el of arr2) {
        frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3,2], [9,1,4, 4]));