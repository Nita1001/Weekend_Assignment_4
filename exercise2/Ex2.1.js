// Ex2.1 - Sum of lowest numbers

// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
let arr = [10, 343445353, 3453445, 3453545353453];
const sumOfLowestNums = (arr) => {
    arr.sort(function (a, b) {
        return a - b;
    });
    const sum = arr[0]+arr[1];
    return sum;
}
console.log(sumOfLowestNums(arr));