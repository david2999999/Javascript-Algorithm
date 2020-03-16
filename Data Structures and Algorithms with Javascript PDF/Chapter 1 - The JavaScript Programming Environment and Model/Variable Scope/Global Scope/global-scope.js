function showScope() {
    return scope;
}

var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "global"

// The function showScope() can access the variable scope because scope is a global variable.
// Global variables can be declared at any place in a program, either before or after
// function definitions.