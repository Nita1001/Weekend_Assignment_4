// Ex5.6 - Mask

// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"
let str = '4556364607935616';
const maskify = (str) => {
    let newStr = str.split('');
    for(let i = 0; i < str.length - 4; i++) {
         newStr[i] = newStr[i].replace(newStr[i], '#'); 
    }
    newStr = newStr.join('');
    return newStr;
}
console.log(maskify(str));