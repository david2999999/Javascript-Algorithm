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