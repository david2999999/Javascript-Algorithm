function isPalindrome(str) {
    function reverseStr(strToReverse) {
        if (strToReverse === null || strToReverse.length <= 1) {
            return strToReverse;
        }

        return reverseStr(strToReverse.substr(1)) + strToReverse.charAt(0);
    }

    return reverseStr(str) === str;
}

console.log(isPalindrome('amanaplanacanalpanama'));