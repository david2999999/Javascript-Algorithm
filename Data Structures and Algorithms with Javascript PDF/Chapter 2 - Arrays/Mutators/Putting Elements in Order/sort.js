// If we want to sort the elements of an array into order
    // We can use the sort() function
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names); // Bryan,Clayton,Cynthia,David,Mike,Raymond

// The sort() does not work so well with numbers
var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums); // 1,100,2,200,3,4

// The sort() function sorts data lexicographically, assuming the data elements are strings
    // In the previous example, the elements are numbers, so it is not sorted numerically
// We can make the sort() function work correctly for numbers by passing in an ordering function as the first
// argument to the function, which sort() will use to sort the array elements.
    // The function allows the sort() function to compare pairs of array elements to determine their correct order

// For numbers, the ordering function can simply subtract one number from another number
    // if the returned is negative, the left operand is less than the right operand
    // if the returned is positive, the left operand is bigger than the right operand
    // if the return is zero, the left operand is equal to the right operand
function compare(num1, num2) {
    return num1 - num2;
}
nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums); // 1,2,3,4,100,200