// Ex2.4 - Unique

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
let arr = [0, 0, 0.55, 0, 0];
const fundUniq = (arr) => {
    arr.sort();
    let arrd = 0;
    if((arr[0] === arr[1]) && (arr[arr.length - 1] !== arr[arr.length - 2]))
    {
        arrd = arr[arr.length -1];
    } else if((arr[0] !== arr[1]) && (arr[arr.length - 1] === arr[arr.length - 2])){
        arrd = arr[0];
    }
    console.log(arrd);
    return arr;
}
fundUniq(arr);