function checkDuplicates() {
    if (arguments.length === 0) return false;
    let storage = {};

    for (let i = 0; i < arguments.length; i++) {
        if (storage[arguments[i]]) {
            return true;
        } else {
            storage[arguments[i]] = 1;
        }
    }

    return false;
}

console.log(checkDuplicates(1, 2, 3, 4));