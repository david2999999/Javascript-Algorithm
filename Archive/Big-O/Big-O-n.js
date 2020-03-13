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

function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(10);