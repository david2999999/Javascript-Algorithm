// We can use a set of nested 'for' loops to process 2D arrays.
// To process columns, the outer loop moves through the rows, and the inner loop
// processes the columns

// In this next example, we can think of each row as a set of grades for one student
// We can compute the average of each student's grade by adding each grade on the row to a
// total variable and then divide by the total number of grades on that row
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;

for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }

    average = total / grades[row].length;
    console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));

    total = 0;
    average = 0.0;
}