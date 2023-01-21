// Ex6.4 - isogram

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter case
const islsogram = (str) => {
    return str.toLowerCase().split('').filter((element, index, arr)=> arr.indexOf(element) === index).length === str.length;
}

console.log(islsogram('Dermatoglyphics'));
console.log(islsogram('aba'));
console.log(islsogram('moOse'));