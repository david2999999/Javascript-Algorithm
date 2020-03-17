// Simplest way to declare an array is using the [] operator
var numbers = [];

// when we create an array in this manner, we will have an array with length of 0
    // this can be checked with the built-in length property
 console.log(numbers.length); // displays 0

// Another way to create an array is to declare an array variable with a set of elements inside the [] operator
var numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length); // displays 5


// you can also create array by calling the Array constructor
var numbers3 = new Array();
console.log(numbers3.length); // displays 0

// you can also call the array constructor with a set of elements as arguments to the constructor
var numbers4 = new Array(1, 2, 3, 4, 5);
console.log(numbers4.length); // displays 5

// Lastly, you can create an array by calling the Array constructor with a single argument specifying the length of the array
var numbers5 = new Array(10);
console.log(numbers5.length); // displays 10


// Elements inside the array does not have to be the same type
var objects = [1, "Joe", true, null];

// We can verify that an object is an array by calling the Array.isArray() function
var numbers = 3;
var arr = [7,4,1776];
console.log(Array.isArray(number)); // displays false
console.log(Array.isArray(arr)); // displays true