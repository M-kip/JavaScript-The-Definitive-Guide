#!/usr/bin/node
/*
 * Objects are mutable meaning their values can be changed
 * This module describes the simplest method to change values of an \
 * object using properties
 */

var o = { x:1 }; // start with object
o.x = 2; // mutate it by changing the value of a property
o.y = 3; // mutate it again by ading a new property

var a = [1, 2, 3] // Arrays are also mutable
a[0] = 0; // change the value of an array element
a[3] = 4; // add a new element to the array

/*
 * objects are not compared by value: two objects are not equal even if they have the same
 * properties and values
 */

var o = { X:1 }, p = { x:1 }; // Two objects with the same properties
console.log('Compare two objects with same properties: ', ( o === p )); // => false
var a = [], b = []; // two distinct, empty arrays
console.log('Comparison btwn two distinct arrays: ', (a === b)); // false: distinct arrays are never equal
