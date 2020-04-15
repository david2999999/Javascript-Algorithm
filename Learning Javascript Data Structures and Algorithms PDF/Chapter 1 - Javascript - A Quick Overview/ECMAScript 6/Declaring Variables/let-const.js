// The ouput of this code is React as the last variable declared, named frameword
// We have two variables with the same name; this is very danerous and might driver
// the code to an incorrect output
var framework = 'Angular';
var framework = 'React';
console.log(framework);

// Other languages, such as C, Java and C#, do not allow this behavior
// In ES6, a new keyword is introduced, called 'let'
let language = 'JavaScript!'; //{1}
let language = 'Ruby!'; // {2} - throws error
console.log(language);

// ES6 also introduce the keyword const. Its behavior is the same thing
// as the keyword let; the only difference is that a variable defined as
// const has a read-only value
const PI = 3.141593;
PI = 3.0; //throws error
console.log(PI);