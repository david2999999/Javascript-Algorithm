// When removing elements at the end of an array leads to the same problems we find when trying to add or remove
// elements from the beginning of an array
    // both operations requires shifting array elements either toward the beginning or toward the end of the array
// There is a mutator function that we can use to perform both operations - splice()

// To add elements to an array using splice()
    // The starting index, where you want to begin adding elements
    // The number of elements you want to remove (0 if you adding elements)
    // The elements you want to add to an array

// The following example adds elements to the middle of an array
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9

// The elements being added does not need to be an array of elements
// you can pass in individual elements separated by commas
nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);

// If you do not want to add elements, and just want to remove elements from an array
// You can just pass in the first 2 parameters
nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
console.log(nums); // 1,2,3,4,5