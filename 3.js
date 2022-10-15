let str = "Hello";
let strReversed = "";
function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    return strReversed;
};

console.log(reverseString(str));