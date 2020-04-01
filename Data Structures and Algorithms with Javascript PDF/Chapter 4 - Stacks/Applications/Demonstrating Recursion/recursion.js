// Demonstrating Recursion
    // One area where stacks are used is in implementing recursion
    // We can use stacks to simulate recursive processes

// To illustrate how recursion is implemented using a stack
    // consider the definition of the factorial function
    // 5! = 5 * 4 * 3 * 2 * 1
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function factorialWithStack(num) {
    var stack = new Stack();
    while (num > 1) {
        stack.push(num--);
    }

    var product = 1;
    while (stack.length() > 0) {
        product *= stack.pop();
    }

    return product;
}

console.log(factorial(5)); // displays 120
console.log(factorialWithStack(5)); // displays 120