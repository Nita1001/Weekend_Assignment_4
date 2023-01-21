// Ex5.7 - shortest words

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
let str = "shortest hi longerWord theLongestWord";
const shortest = (str) => {
    let newStr = str.split(' ');
    let lengths = [];
    newStr.forEach((element) => lengths.push(element.length));
    let lengthOfShortestWord = Math.min(...lengths);
    let index = lengths.indexOf(lengthOfShortestWord);
    let word = newStr[index];
    return word;
}
console.log(shortest(str));
