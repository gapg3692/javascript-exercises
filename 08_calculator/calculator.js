const add = function(sum1, sum2) {
    return sum1 + sum2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

// const sum = function(array) {
//     let total = 0;
//     array.forEach((value) => (total += value));
//     return total;
// };
const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
};

// const multiply = function(array) {
//     return array.length
//       ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//       : 0;
// };

const multiply = function(array) {
    let total = 1;
    array.forEach((value) => (total *= value));
    return total;
};

const power = function(num1, num2) {
    return num1 ** num2;
};

const factorial = function(number) {
    let total = 1;
    for (; number > 0; number--) total *= number;

    return total;
};

// const recursiveFactorial = function(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * recursiveFactorial(n - 1);
// };

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};