var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;

console.log(dmpDept); // Raymond,Cynthia,Danny
console.log(cisDept); // Mike,Clayton,Terrill,Jennifer

// The splice() function creates a new array from the contents of existing array
    // The arguments to the function are the starting position for taking the splice and the number of elements to take from this existing array
// splice() also removes the elements from the original array
    // so when we try to access the original array again, we will notice the elements we have retrieved before are gone.