// Ex2.7 - Basic Math

// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7
const calcThis = (operator, num1, num2) => {
    let sum = 0;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        default: 
            console.log('something went wrong');        
    }
    return sum;
}
const num1 = 15;
const num2 = 18;
const operator = '-';
console.log(calcThis(operator, num1, num2));