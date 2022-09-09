#!/usr/bin/node
/*
 * Program to copy the properties of one object or an array
 * uses a for loop the iterate over the elements in the array
 */

var a = ['a', 'b', 'c', 'd', 'e', 'f']; // An array we want to copy
var b = []; // distinct array we want to copy into
for (var i = 0; i < a.length; i++) {
  b[i] = a[i]; // copy value to the given index to b[i]
}
console.log('Print the new array b:', b);

/*
 * function to compare to distinct objects i.e arrays
 * uses for loop
 * checks if the length of the arrays are similar
 * checks if the elements are identical
 */

function equalArrays (a, b) {
  if ( a.length != b.length) return false;
  for (var i = 0; i < a.length; i++)
    if (a[i] !== b[i]) return false;
  return true;
}
console.log('Compare two arrays a and b:', equalArrays(a, b)); // compares array a and b and prints true/false 
