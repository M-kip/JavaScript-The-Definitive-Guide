#!/usr/bin/node
/*
 * Strings examples in JavaScript 
 * the string are enclosed with one single quotes
 * Escape sequences can be used to added single quotes
 * in string literals
 */
// concatenate 	2 strings using the + operator
name = 'Moses Kiprono';
msg = 'Hello' + 'World'; // produces the string "Hello Word"
greeting = 'Welcome to my Blog,' + ' ' + name;
console.log('Concatenate 2 Strings using + operator:\n ', msg);
console.log('Greetings concatenate a String Literal with a variable stored value:\n ', greeting);

/*
 * Methods that can be invoked on a string object
 * For example Length Property
 */
var s = 'Hello, World'; // String
// Find the character at a given position
console.log(s.charAt(0)); // => h: the first character
console.log(s.charAt(s.length - 1)); // => the last character
console.log('Length of a string: ', s.length); // => length of a string
console.log('Return a substring: ', s.substring(1,4)); // => the second to the fourth character
console.log('Slice a string and return a substring', s.slice(1,4)); // same as the previous command
console.log('Print the last 3 characters of the string', s.slice(-3)); // => last three characters
console.log('Return the position of a character in a string: ', s.indexOf('l')); // position of the l character
console.log('Return the Position if the last character shown', s.lastIndexOf('l')); // =>: position of the last letter
console.log('Position of the first l at or after 3: ', s.indexOf('l', 3));
console.log('Split a string into substrings using a given identifier', s.split(', '));
console.log('Replace a character in a string literal', s.replace('H', 'h'));
console.log('Convert string to upper case', s.toUpperCase()); // converts a String to uppercase
