module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }

    let stringN = n.toString();

    let reversedString = '';
    for (let i = stringN.length - 1; i >= 0; i--) {
        reversedString += stringN[i];
    }

    return parseInt(reversedString);
}