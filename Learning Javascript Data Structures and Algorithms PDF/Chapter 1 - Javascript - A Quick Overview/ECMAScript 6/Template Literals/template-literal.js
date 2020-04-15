// Template literals allows us to create strings without the need to concatenate the values
var book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
};

console.log('You are reading ' + book.name + '.,\n and this ia  new line\n and so is this');

// We can improve the syntax of the previous console.log output with the following code
console.log(`You are reading ${book.name}.,
and this is a new line
and so is this`);

// Template literals are enclosed by backticks (`).
// To interpolate a variable value, we will simply set the variable value inside a dollar sign and curly braces ${}
// Template literals can also be used for multiline strings
    // There is no need to use \n anymore
