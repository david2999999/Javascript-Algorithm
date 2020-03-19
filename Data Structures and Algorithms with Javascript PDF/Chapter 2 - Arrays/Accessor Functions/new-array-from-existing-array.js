// Creating New Arrays from Existing Arrays
    // There are two accessor functions that allows you to create new arrays from existing arrays, concat() and splice()
        // The concat() function allows two or more arrays to create a new array
        // The splice() function can create a new array from a subset of an existing array

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];

var itDiv = cisDept.concat(dmpDept);
console.log(itDiv); // Mike,Clayton,Terrill,Danny,Jennifer,Raymond,Cynthia,Bryan

itDiv = dmpDept.concat(cisDept);
console.log(itDiv); // Raymond,Cynthia,Bryan,Mike,Clayton,Terrill,Danny,Jennifer