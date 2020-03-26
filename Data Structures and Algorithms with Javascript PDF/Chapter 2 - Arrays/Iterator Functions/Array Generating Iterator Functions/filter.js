// The filter() function works similarly to every(), but instead of returning true if all
// the elements of an array satisfy a Boolean Function, the function returns a new array
// consisting of those elements that satisfy the Boolean function
function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i+1;
}

var evens = nums.filter(isEven);
console.log("Even numbers: ");
console.log(evens);

var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);