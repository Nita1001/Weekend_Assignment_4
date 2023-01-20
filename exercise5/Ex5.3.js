// Ex5.3 - To Camel Case

// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
const toWeirdCase = (str) => {
    let newStr = str.split('');
    console.log(newStr);
    for(let i = 0; i < str.length ; i++) {   
        if(newStr[i] === '-' || newStr[i] === '_'){
            newStr[i + 1] = newStr[i + 1].toUpperCase();
            newStr[i] = ' ';
        }
    }
    let newStr2 = newStr.join('');
    newStr = newStr2.split(' ');
    return newStr.join('');
}
console.log(toWeirdCase('the-stealth-warrior'));
console.log(toWeirdCase('The_Stealth_Warrior'));