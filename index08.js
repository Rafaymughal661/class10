"use strict";
/* for loop
Do while loop
{
variable
condition
increment operator (i++) or
decrement operator (i--) or
prefix  increment operator (++i) or
prefix decrement operator (--i) }

(for loop)
(do loop) it show at least one time: */
let sum = 0;
let list = [];
for (let i1 = 1; i1 <= 100; i1++) {
    if (i1 % 2 == 0) {
        sum = sum + i1;
        list.push(i1);
    }
}
console.log(list, sum);
// Create a function that takes an array of numbers as parameter. Use while loop to calculate and return the sum of all the numbers in the array
function add(array) {
    var i = 0;
    var sum1 = 0;
    while (i < array.length) {
        sum1 = sum1 + array[i];
        i++;
    }
    return sum1;
}
var result = add([20, 40, 60, 80]);
console.log(result);
var i = 0;
var sum2 = 0;
function add2(array1) {
    while (i < array1.length) {
        sum2 = sum2 + array1[i];
        i++;
    }
    return sum2;
}
var result2 = add2([0, 30, 60, 90, 100]);
console.log(result2);
// Create a function that takes a positive integer as a parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num) {
    if (num > 0) {
    }
    var result = 1;
    while (num > 1) {
        result *= num; //The *= operator in programming is commonly referred to as the "multiplication assignment" operator. It's used to multiply 
        num--; //the value on the left side of the operator by the value on the right side and assign the result back to the left side variable.
    }
    return result;
}
var new1 = factorial(5);
console.log(new1);
// Create a function that takes a positive integer as a parameter and uses a while loop to calculate and return the factorial of that number.
function factorial1(num2) {
    result = 0;
    while (num2 > 1) {
        result *= num2;
        num2--;
    }
    return result;
}
var v = factorial(6);
console.log(v);
// Create a function that takes an array of numbers as parameter. Use while loop to calculate and return the sum of all the numbers in the array
function cal(anum) {
    var sum3 = 0;
    var i1 = 0;
    while (i1 < anum.length) {
        sum3 = sum3 + anum[i1];
        i1++;
    }
    return sum3;
}
var zz = cal([30, 30, 30, 30]);
console.log(zz);
;
var sum6 = 0;
let list1 = [];
for (let i2 = 1; i2 <= 200; i2++) {
    if (i2 % 2 == 0) {
        sum6 = sum6 + i2;
        list1.push(i2);
    }
    console.log(list1, sum6);
}
let sum8 = 0;
let list9 = [];
for (let i9 = 1; i9 <= 300; i9++) {
    if (i9 % 2 == 0) {
        sum8 = sum8 + i9;
        list9.push(i9);
    }
}
console.log("list", list9, "result", sum8);
