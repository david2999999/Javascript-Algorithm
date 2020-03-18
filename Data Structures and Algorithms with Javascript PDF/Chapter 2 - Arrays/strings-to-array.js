// Arrays can be created as the result of calling the split() function on a string
    // This function breaks up a string at a common delimiter and creates an array consisting of the individual parts of the string

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
}

// word 0: the
// word 1: quick
// word 2: brown
// word 3: fox
// word 4: jumped
// word 5: over
// word 6: the
// word 7: lazy
// word 8: dog