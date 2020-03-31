// The array that stores the stack elements is named dataStore
// The 'top' variable keeps track of the top of the stack and is initially set
// to 0, indicating that the 0 position of the array is the top of the stack
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.isEmpty = isEmpty;
    this.clear = clear;
}

// We store new elements in the top position and then increment our top variable
// so that the new top is the next empty position in the array
function push(element) {
    this.dataStore[this.top++] = element;
}

// returns the element in the top position of the stack and then decrements the top variable
function pop() {
    if (isEmpty()) {
        return null;
    }

    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function isEmpty() {
    return this.top === 0;
}

function clear() {
    this.dataStore = [];
    this.top = 0;
}


var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());

s.push("Cynthia");
console.log(s.peek());

s.clear();

console.log("length: " + s.length());
console.log(s.peek());

s.push("Clayton");
console.log(s.peek());