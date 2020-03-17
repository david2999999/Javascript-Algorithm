function showScope() {
    var scope = "local";
    return scope;
}

var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "local"

// The 'scope' variable defined in the showScope() function has a local scope
// The 'scope' variable defined in the main program is a global variable
    // even though the two variables has the same name, their scopes are different
    // Their values are different when accessed within the area of the program where they are defined

// If you leave off the keyword var in the variable definition
    // JS allows you to define variables without using the var keyword
    // When you do, the variable is automatically has global scope

function showScope2() {
    scope = "local";
    return scope;
}

scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "local"
console.log(scope); // displays "local"