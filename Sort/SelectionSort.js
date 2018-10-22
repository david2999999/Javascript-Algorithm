function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }

        if (lowest !== i) {
            let temp = arr[lowest];
            arr[lowest] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([2,6,1,2,3,5,7,9, 1, 2,3]));

function selectionSort2(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }

        if (lowest !== i) {
            swap(arr, lowest, i);
        }
    }
    return arr;
}

console.log(selectionSort2([2,6,1,2,3,5,7,9, 1, 2,3]));