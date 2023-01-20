// Ex4.1 - Fibonacci -

// ?? “Write a function to return an n element in Fibonacci sequence” 
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
const fibonacci = (n) => {
    let arr = [0, 1];
    for(let i = 2; i <= n; i++)
    {
        arr.push(arr[i - 1] + arr[i - 2]);
    } 
    return arr[n];
}
console.log(fibonacci(15));