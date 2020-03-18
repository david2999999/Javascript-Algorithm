// data is assigned to array elements using the [] operator in an assignment statement
var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = i + 1;
}

// Array elements can also be accessed using the [] operator
var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] +
    numbers[4];
console.log(sum); // displays 15

// accessing all elements of an array sequentially using a 'for' loop
var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log(sum); // displays 53

// Notice the 'for' loop is controlled using the length property rather than an integer literal
    // JS arrays are objects, and they can grow beyond the size they specified when they are created
    // By using the length property, which returns the number of elements currently in the array
        // We can make sure our loop processes all array elements