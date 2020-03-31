var movies = createArr('films.txt');

var movieList = new List();
for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

// When the elements of the text file are split into the array,
// the newline character is replaced with a space
// We use the trim() function to remove the space
function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
    return arr;
}
