console.log(findLongestSubstring('thisisawesome'));

function findLongestSubstring(str){
    if (str.length === 0) return 0;

    let letters = new Set();
    let currentCount = 0;
    let maxCount = 0;

    let minWindowIndex = 0;
    let minWindowValue = str.charAt(minWindowIndex);

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        currentCount++;

        if (letters.has(letter)) {
            while (minWindowValue !== letter) {
                letters.delete(minWindowValue);
                minWindowValue = str.charAt(++minWindowIndex);
                currentCount--;
            }

            letters.delete(minWindowValue);
            minWindowValue = str.charAt(++minWindowIndex);
            currentCount--;
        }

        letters.add(letter);
        maxCount = currentCount > maxCount ? currentCount : maxCount;
    }

    return maxCount;
}
