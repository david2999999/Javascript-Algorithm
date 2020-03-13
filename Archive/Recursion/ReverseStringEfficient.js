console.log(reverse('hello'));

function reverse(str) {
    if ((str == null) || (str.length <= 1)) {
        return str;
    }

    return reverse(str.substr(1)) + str.charAt(0);
}