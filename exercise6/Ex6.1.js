// Ex6.1 - Mumbling

// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-zzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z
let str = 'RqaEzty';
const accum = (str) => {
    let newStr = str.split('');
    for(let i = 0; i < str.length ;i++){
        newStr[i] = str[i].repeat(i + 1); 
    }
    newStr = newStr.map((element, index) => {
      return str[index].toUpperCase() + element[index].repeat(index);
    });
    newStr = newStr.join('-');
    return newStr;
}
console.log(accum(str));