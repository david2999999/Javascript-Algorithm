// Without a mutator function, removing elements from the beginning of an array requires shifting elements toward the beginning of the array
// This causes the same inefficiency when adding an element to the beginning of the array
var nums = [9,1,2,3,4,5];
console.log(nums);
for (var i = 0; i < nums.length; ++i) {
    nums[i] = nums[i+1];
}
console.log(nums); // 1,2,3,4,5,

// Beside the fact that we have to shift the elements down to collapse the array
    // we also left with an extra element (we know this because of the extra comma when we display the numbers)

// The mutator function we can use to remove an element from the beginning of an array is shift()
nums = [9,1,2,3,4,5];
nums.shift();
console.log(nums); // 1,2,3,4,5

// There are no extra elements at the end of the array

// Both of the pop() and shift() functions returns the elements that they have removed, so we can access the values in the variable
nums = [6,1,2,3,4,5];
var first = nums.shift(); // first gets the value 9
nums.push(first);
console.log(nums); // 1,2,3,4,5,6