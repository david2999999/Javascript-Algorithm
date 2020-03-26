// The forEach() function takes another function as argument and applies the called function to each element of an array
function square(num) {
    console.log(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

// 1 1
// 2 4
// 3 9
// 4 16
// 5 25
// 6 36
// 7 49
// 8 64
// 9 81
// 10 100