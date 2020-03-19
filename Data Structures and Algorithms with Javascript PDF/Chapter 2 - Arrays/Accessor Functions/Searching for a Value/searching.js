// One of the most commonly used accessor functions is indexOf(), which looks to see if the argument passed to the function is found in the array
// If the argument passed to the function is found in the array
    // the index position of the argument will be returned
// If the argument is not found in the array, a -1 will be returned
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

putstr("Enter a name to search for: ");
var name = readline();

var position = names.indexOf(name);
if (position >= 0) {
    console.log("Found " + name + " at position " + position);
} else {
    console.log(name + " not found in array.");
}

// if you have multiple occurrence of the same data in an array, the indexOf() function will always return the position of the first occurrence
    // There is another similar function, 'lastIndexOf()', which returns the position of the last occurrence of the argument in an array, or -1 if not found
var names2 = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var name2 = "Mike";

var firstPos = names.indexOf(name2);
console.log("First found " + name2 + " at position " + firstPos);

var lastPos = names.lastIndexOf(name2);
console.log("Last found " + name2 + " at position " + lastPos);