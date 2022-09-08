#!/usr/bin/node
/**
 * testing properties of the number object
 *
 */
console.log('A read variable initialized to Infinity: ', Infinity);
console.log('Infinity value as a property of number: ', Number.POSTIVE_INFINITY); // same value as Infinity
console.log('Division by zero leading to negative infinity: ', 1/0);
console.log(Number.MAX_VALUE + 1); // Infinity
console.log(Number.NaN); // not a number
console.log(NaN); // not a number
console.log(0/0); // not a number NaN
console.log('Overflow: ', -Number.MIN_VALUE/2); // undeflow: evaluate to 0
console.log('Negative zero: ', -Number.MIN_VALUE/2); // negative zero
console.log(-1/Infinity);
console.log(-0); //also a negative
