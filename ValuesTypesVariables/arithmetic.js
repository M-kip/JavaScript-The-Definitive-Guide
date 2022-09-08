#!/usr/bin/node
/**
 * Simple tutorial to demonstrate arithmetic in JavaScript using the math
 * Object
 */
var a = 2;
var b = 53;
var x = 12, y = 10, z = 50;
console.log(Math.pow(a,b)); // 2 to the power of 53
console.log(Math.round(.6)); // round to the nearest integer
console.log(Math.ceil(.6)); // round up to an integer
console.log(Math.floor(.6)); // round down to an integer
console.log(Math.abs(-5)); // => 5: absolute value
console.log(Math.max(x,y,z)); // Return the largest number
console.log(Math.random()); // pseudo random number generator
console.log('circumference of a circle / diameter:', Math.PI); // Circumference of a circle / diameter
console.log(Math.E); // The base of the natural logarithm
console.log(Math.sqrt(b)); // the square root of 53
console.log(Math.pow(3, 1/3)); // the cube root of 3
console.log(Math.sin(0)); // Trigonometry: also Math.cos Math.atan, e.t.c.
console.log(Math.log(10)); // Natural logarithm of 10
console.log(Math.log(100)/Math.LN10); // Base 10 logarithm of 100
console.log(Math.log(512)/Math.LN2); // Base 2 logarithm of 512
console.log(Math.exp(3)); // Math.E cubed
