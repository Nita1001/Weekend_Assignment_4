// Ex2.2 - One and Zero - Binary

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// However, the arrays can have varying lengths, not just limited to 4
let arr = [0, 1, 0, 1, 0, 1, 0, 1];
const toDec = (arr) => {
    arr.reverse();
    let num = 0;
    for(var i = 0; i < arr.length; i++){
        num += (arr[i]*Math.pow(2, i));
    }
    return num;
}
console.log(toDec(arr));