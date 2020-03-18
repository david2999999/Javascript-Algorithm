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