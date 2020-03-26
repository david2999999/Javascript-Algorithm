// To do a row-wise computation, we simply have to flip the 'for' loops so that the outer
// loop controls the columsn and the inner loop controls the rows

// This next example calculates the average for each test, assuming each row is the test grades
// for a single student
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;

for (var col = 0; col < grades.length; ++col) {
    for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }

    average = total / grades[col].length;
    console.log("Test " + parseInt(col+1) + " average: " + average.toFixed(2));

    total = 0;
    average = 0.0;
}