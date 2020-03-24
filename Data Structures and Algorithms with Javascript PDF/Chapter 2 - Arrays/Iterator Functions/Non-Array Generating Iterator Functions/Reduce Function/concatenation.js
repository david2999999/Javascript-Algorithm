// The reduce() function can also perform string concatenation
function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence); // displays "the quick brown fox"

// Along with reduce(), JS also provides a reduce right function,
// which will accumulate values from the end of the array instead of the start of the array
sentence = words.reduceRight(concat);
console.log(sentence); // displays "fox brown quick the"