// When an array simply points to another array's elements, this is called a shallow copy
// The better alternative is to make a deepy copy
    // Each of the original array's elements is actually copied to the new array's element
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i+1;
}

var samenums = [];
copy(nums, samenums);

nums[0] = 400;
console.log(samenums[0]); // displays 1