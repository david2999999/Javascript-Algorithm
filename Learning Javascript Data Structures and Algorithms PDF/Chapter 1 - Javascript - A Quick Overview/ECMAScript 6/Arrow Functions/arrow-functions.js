// Arrow functions are a great way of simplifying the syntax functions in ES6
var circleArea = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleArea(2));

// We can simplify the syntax of the previous code
let circleArea2 = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
    return area;
};
console.log(circleArea2(2));

// If the function has a single state, there is a simpler version as well
// by omitting the keyword return
let circleArea3 = (r) => 3.14 * r * r;
console.log(circleArea3(2));