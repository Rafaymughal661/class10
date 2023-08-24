// Q: Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function calculateSumofEven(num:number){ 
    var sum = 0;
    for (let index = 1; index<=num; index++){
       sum += index * 2;
    }
    return sum
}
var res = calculateSumofEven(8);
console.log("the sum of first 8 even numbers is =", res);
