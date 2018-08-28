function countUpAndDown(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }

    for (let j = n - 1; j>= 0; j--) {
        console.log(j);
    }
}

countUpAndDown(5);

// this is O(5n) which simplifies to O(n)