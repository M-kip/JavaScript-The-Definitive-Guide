#!/usr/bin/node
/*
 * Simple tutorial showing how to use regular expressions in javascript
 */

var text = 'testing: 1, 2, 3'; // SampleText
var pattern = /\d+/g // Matches all instances of one or more digits

console.log('Pattern test\n', pattern.test(text));
console.log('Using search method in javascript to find patterns in a string', text.search(pattern));
console.log('Using match method to search for a pattern in a string', text.match(pattern));
console.log('Using replace method with pattern', text.replace(pattern, '#'));
console.log('Using pattern in split method', text.split(/\D+/));
