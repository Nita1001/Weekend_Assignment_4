// Ex5.2 - String Repeat

// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
const repeatStr = (count, str) => {
    let newStr = str;
    while(count > 1){
        newStr = newStr.concat(str);
        count--;
    }
    return newStr;
}
console.log(repeatStr(8, 'Hey'));