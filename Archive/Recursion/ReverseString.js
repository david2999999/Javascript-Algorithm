console.log(reverse('elephant'));

function reverse(str) {
    let strLength = str.length;
    let reversedString = "";

    function reverseString(word, index) {
        if (index < 0) return;
        reversedString += word.charAt(index);
        reverseString(word, index - 1);
    }

    reverseString(str, strLength - 1);

    return reversedString;
}