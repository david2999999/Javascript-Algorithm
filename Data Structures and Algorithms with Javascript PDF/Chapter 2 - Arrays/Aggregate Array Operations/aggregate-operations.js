// There are several aggregate operations you can perform on arrays
    // You can assign one array to another array
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = i+1;
}
var samenums = nums;

// However, you are assigning a reference to the assigned array
    //  when you make a change to the original array, that change is reflected in the other array as well
nums[0] = 400;
console.log(samenums[0]); // displays 400