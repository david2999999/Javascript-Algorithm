// To create a two-dimensional array in JS, we have to create an array and then make each
// element an array as well
    // At the very laast, we need to know the number of rows we want the array to contain
var twoDimensional = [];

var rows = 5;
for (var i = 0; i < rows; i++) {
    twoDimensional[i] = [];
}

// The problem with this approach is that each element of the array is set to undefined
    // A better approach is to extend the Javascript array object with a function that sets
    // the number of rows and columns and sets each value to a value passed to the function
Array.matrix = function (numRows, numCols, initial) {
    var arr = [];
    for (var row = 0; row < numRows; row++) {
        var columns = [];
        for (var col = 0; col < numCols; col++) {
            columns[col] = initial;
        }
        arr[col] = columns;
    }

    return arr;
};

var nums = Array.matrix(5,5,0);
console.log(nums[1][1]); // displays 0

var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
console.log(names[1][2]); // display "Joe"

// creates a two dimensional array and initialize it to a set of values in one line
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[2][2]); // displays 89