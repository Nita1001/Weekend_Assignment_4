// Ex5.5 - Abbreviate two words

// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6
const initials = (str) => {
    let newStr = str.split('');
    console.log(newStr);
    let nameInitials = newStr.shift().toUpperCase() + '.';
    newStr = str.split(' ');
    newStr.shift();
    let newStr2 = newStr.join('');
    newStr = newStr2.split('')
    nameInitials += newStr.shift().toUpperCase();
    return nameInitials;
}
console.log(initials('nita jorjoliani'));
