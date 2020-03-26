// There are two mutator functions for adding elements
    // The first function is push() function, which adds an element to the end of an array
var nums = [1,2,3,4,5];
console.log(nums); // 1,2,3,4,5
nums.push(6);
console.log(nums); // 1,2,3,4,5,6

// Using push is more intuitive than using the 'length' proerty to extend an array
nums = [1,2,3,4,5];
console.log(nums); // 1,2,3,4,5
nums[nums.length] = 6;
console.log(nums); // 1,2,3,4,5,6