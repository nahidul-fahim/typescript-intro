"use strict";
// Functions -> 1. Normal function 2. Arrow function
// normal function
function add(num1, num2) {
    return num1 + num2;
} // here I am declaring the types of parameters as number and also the output as number.
add(5, 7);
// arrow function
const addArrowFunc = (num1, num2) => num1 + num2;
// ===========
// If there is any function in an object, it is called 'method'
const person1 = {
    name: "Nahidul Islam",
    bankBalance: 0,
    addBalance(balance) {
        return `My new balance is ${this.bankBalance + balance}`; // it is not a function anymore. It is a method. Because, if there is a function in an object, it is called 'method'
    } // If we use an arrow function for the addBalance method inside the object literal, it will cause an error because arrow functions do not bind their own 'this' context.
};
// ==============
// while we map over an array, we write a callback function there
const numberArr = [5, 10, 12];
const sqrNumberArr = numberArr.map((singleNum) => singleNum * singleNum); // here singleNum is 'number' data type and (singleNum: number): number - is the return data type which is also a number.
