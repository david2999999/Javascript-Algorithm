// Summing integers using a for loop
var sum = 0;
for (var number = 1; number < 11; number++) {
    sum += number;
}
console.log(sum); // displays 55

// Using a for loop with an array
var numbers = [3, 7, 12, 22, 100];
sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log(sum); // displays 144