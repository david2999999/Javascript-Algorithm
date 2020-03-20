// If we want to sort the elements of an array into order
    // We can use the sort() function
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names); // Bryan,Clayton,Cynthia,David,Mike,Raymond

// The sort() does not work so well with numbers
var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums); // 1,100,2,200,3,4
