console.log(power(4, 4));

function power(num, pow) {
    if (pow === 0) return 1;
    return num * power(num, pow - 1);
}