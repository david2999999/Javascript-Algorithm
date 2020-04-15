// basic syntax of a function
function sayHello() {
    console.log('Hello!');
}

sayHello();

function output(text) {
    console.log(text);
}

output('Hello!');
output('Hello!', 'Other text'); // 2nd argument is ignored

function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1, 2);
output(result);
