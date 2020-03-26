function afterc(str) {
    return str.indexOf("cie") > -1;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];

var misspelled = words.filter(afterc);
console.log(misspelled); // displays recieve,percieve,concieve