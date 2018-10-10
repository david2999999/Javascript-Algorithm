console.log(countString(182, 281));

function countString(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    let frequencyCounter1 = {};

    for (let i = 0; i < str1.length; i++) {
        frequencyCounter1[str1.charAt(i)] ? frequencyCounter1[str1.charAt(i)]++ : frequencyCounter1[str1.charAt(i)] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (!frequencyCounter1[str2.charAt(i)]) return false;
        else if (frequencyCounter1[str2.charAt(i)] === 0) return false;
        else frequencyCounter1[str2.charAt(i)]--;
    }

    return true;
}