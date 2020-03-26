// The some() function also takes in a boolean function
    // it will return true if at least one element in the array meets the criterion of the boolean function
function isEven(num) {
    return num % 2 === 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) { // prints: some numbers are even
    console.log("some numbers are even");
} else {
    console.log("no numbers are even");
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) { // prints: no numbers are even
    console.log("some numbers are even");
} else {
    console.log("no numbers are even");
}