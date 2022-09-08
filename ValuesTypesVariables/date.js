#!/usr/bin/node
/*
 * Quick tutorial on date objects
 */
var then = new Date(2010, 0, 1); // The 1st day on the 1st month of 2010
var later = new Date(2010, 0, 1, 17, 10, 30); // Same day, at 50:10:30, local time

var now = new Date(); // The current date and time
var elapsed = now - then;

console.log('Get the year: ', later.getFullYear()); // => 2010
console.log('The month of the year: ', later.getMonth()); // => 0: zero based months
console.log('The date of the month: ', later.getDate()); // => 5: day of the week 0 is sunday 5 is friday
console.log('Day of the week: ', later.getDay()); // => 5: day of the week 0 is sunday 5 is friday
console.log('Get the hours: ', later.getHours()); // => 17: 5pm local time
console.log('get UTC hours: ', later.getUTCHours());// hpurs in UTC time; depends on timezone
console.log('Date to string: ', later.toString()); // => returns a string rep on the date
console.log('Date to UTC string: ', later.toUTCString()); // => returns UTC string representation
console.log('Date to local Date string: ', later.toLocaleDateString()); // => Local date string
console.log('Date to local Time string: ', later.toLocaleTimeString()); // => local time string
console.log('ISO date string: ', later.toISOString()); // => ISO Date String representation
