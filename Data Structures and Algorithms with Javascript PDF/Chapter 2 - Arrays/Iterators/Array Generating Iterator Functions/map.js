// The map() functions works like the forEach() function
    // It applies a function to each of the elements but will return a new array with the results
    // of the function application
function curve(grade) {
    return grade + 5;
}

var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades); // 82, 70, 86, 97, 88

function first(word) {
    return word[0];
}

var words = ["for", "your", "information"];
var acronym = words.map(first);
console.log(acronym.join("")); // displays "fyi"