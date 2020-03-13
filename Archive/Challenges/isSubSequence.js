console.log(isSubSequence('sing', 'sting'));

function isSubSequence(str1, str2) {
    let shorter = str1.length < str2.length ? str1 : str2;
    let longer = str1.length < str2.length ? str2 : str1;

    let shorterIndex = 0;
    let longerIndex = 0;

    while (shorterIndex < shorter.length && longerIndex < longer.length) {
        if (shorter.charAt(shorterIndex) === longer.charAt(longerIndex)) {
            shorterIndex++;
            longerIndex++;
        } else {
            longerIndex++;
        }
    }

    return shorterIndex === shorter.length;
}