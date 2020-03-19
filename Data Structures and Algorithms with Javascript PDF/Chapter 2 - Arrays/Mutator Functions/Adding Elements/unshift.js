// Adding elements to the beginning of an array is much harder than adding data to the end
    // This is because we need to move all of the existing elements on index up one position before the new data can be added
var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
    nums[i] = nums[i-1];
}
nums[0] = newnum;
console.log(nums); // 1,2,3,4,5


// This code becomes more inefficient as the number of elements stored in the array increases
    // The mutator function for adding element to the beginning of an array is unshift()
nums = [2,3,4,5];
console.log(nums); // 2,3,4,5

newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5

nums = [3,4,5];
nums.unshift(newnum, 1, 2); // we are able to add multiple elements to an array in one function call
console.log(nums); // 1,2,3,4,5