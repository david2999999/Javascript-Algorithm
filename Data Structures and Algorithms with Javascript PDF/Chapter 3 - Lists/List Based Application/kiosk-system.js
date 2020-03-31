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

// For each of the objects in the list, we use the instanceof operator to test whether the object is
// a Customer object. If so, we retrieve the name and the movie the customer has checked our using each of the
// two properties as an index for retrieving the associated value
function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        }
        console.log(list.getElement());
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}