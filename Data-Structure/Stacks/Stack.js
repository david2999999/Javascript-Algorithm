let stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.unshift("Create new file");
stack.unshift("Resize file");
stack.unshift("cloned");

console.log(stack);
console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());