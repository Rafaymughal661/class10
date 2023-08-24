"use strict";
// Q: Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function calculateSumofEven(num) {
    var sum = 0;
    for (let index = 1; index <= num; index++) {
        sum += index * 2;
    }
    return sum;
}
var res = calculateSumofEven(8);
console.log("the sum of first 8 even numbers is =", res);
function cell(evenNum) {
    var sum = 0;
    for (let index = 1; index <= evenNum; index++) {
        sum += index * 2;
    }
    return sum;
}
var res = cell(5);
console.log("the sum of first 5 even numbers is =", res);
