// Ex5.8 - shortest words version 2

// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.
let str = "shortest word longerWord theLongestWord";
const shortest = (str) => {
    let newStr = str.split(' ');
    let lengths = [];
    newStr.forEach((element) => lengths.push(element.length));
    let lengthOfLongestWord = Math.max(...lengths);
    let index = lengths.indexOf(lengthOfLongestWord);
    let word = newStr[index];
    return word;
}
console.log(shortest(str));
