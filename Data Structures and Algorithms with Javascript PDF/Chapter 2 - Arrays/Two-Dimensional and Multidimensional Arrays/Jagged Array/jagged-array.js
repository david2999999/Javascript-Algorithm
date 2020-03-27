// jagged array is an array where the rows in the array may have different number of elements
// Many programming languages have problem handling jagged arrays, but JS does not since we can
// compute the length of any row

// Example: Imagine the 'grades' array where students have an unequal number of grades recorded
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0;
var average = 0.0;

for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2));

    total = 0;
    average = 0.0;
}

// Notice each of the students have different number of grades
    // Js is able to compute the length of the row in the inner loop, so the jaggedness does not cause any problem