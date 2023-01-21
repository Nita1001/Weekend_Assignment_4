// Ex6.3 - organize strings

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a ="xyaabbbccccdefww"
// b ="xxxxyyyyabklmopq"
// longest(a, b) -> “abcdefklmopqwxy"
// a ="abcdefghijklimnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklimnopqrstuvwxyz"
let str1 = 'xyaabbbccccdefww';
let str2 = 'xxxxyyyyabklmopq'
const longest = (str1, str2) => {
    let newStr = str1 + str2;
    newStr = newStr.split(''); //==
    let newStr2 = newStr.filter((c, index) => {
        return newStr.indexOf(c) === index;
    });
    return newStr2.sort().join('');
}
console.log(longest(str1, str2));
