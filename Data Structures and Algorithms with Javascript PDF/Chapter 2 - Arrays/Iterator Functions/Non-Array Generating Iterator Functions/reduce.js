// reduce() function applies a function to an accumulator and the successive elements of
// an array until the end of the array is reached
    // This function will yield a single value, which is our accumulator at the end of our iteration
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum); // displays 55

// The reduce() functions uses the add() function and accumulate the sum of all of the numbers in our array
    // add(1,2) -> 3
    // add(3,3) -> 6
    // add(6,4) -> 10
    // add(10,5) -> 15
    // add(15,6) -> 21
    // add(21,7) -> 28
    // add(28,8) -> 36
    // add(36,9) -> 45
    // add(45,10) -> 55