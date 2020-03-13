function charCount(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

function charCountRefactored(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }

    return obj;
}

console.log(charCount('hello'));
console.log(charCount('Hi there!'));