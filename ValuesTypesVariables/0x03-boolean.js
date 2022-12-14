#!/usr/bin/node
/*
 * Simple examples showing how to use booleans
 * Examples of booleans &&, || ==
 */

var a  = 3 // initializes a with value 3
var b;
console.log('Test if the value of variable a equates to 3: ', (a == 3)); // evaluates to true if a = 3

if (a == 4)
  b += 1;
else
  a += 1;
console.log('Value of a after conditional statement', a);

if ((x == 0 && y == 0) || !(z == 0)) {
  // x and y are both zero or z is non-zero
  console.log('Boolean condition passed');
} else {
  // if consdition is not met
  console.log('Boolean condition not met');
}
