#!/usr/bin/node
/*
 * Examples of explict conversions
 */
console.log('Explict conersion to number:', Number('3'));
console.log('Explict conversion to string:', String(false));
console.log('Explict conversion to boolean:', Boolean([]));
console.log('Explict conversion to object:', Object(3));

// JavaScript operators that perform implict type conversions

var x = 'Moses'
x + ''; // same as String(x)
+x; // same as Number(x)
!!x // same as Boolean(x). Note double !

/*
 * using toString() method defined in Number class accepts an optional
 * argument that specifies the radix, or base, for the converstion
 */

var n = 17;
binary_string = n.toString(2); // converts to binary
octal_string = '0' + n.toString(8); // converts to octal
hex_string = '0x' + n.toString(16); // converts to hexadecimal
console.log('Number before converstion:', n);
console.log('Binary conversion: ', binary_string);
console.log('Octal conversion: ', octal_string);
console.log('Hexadecimalconversion: ', hex_string);

var n = 123456.789;
console.log('Using toFixed() method:', n.toFixed(0));
console.log('using toFixed() method:', n.toFixed(2));
console.log('Using toFixed() method:', n.toFixed(5));
console.log('Using toExponential():', n.toExponential(1));
console.log('Using toExponential():', n.toExponential(3));
console.log('Using toPrecision(): ', n.toPrecision(4));
console.log('Using toPrecision(): ', n.toPrecision(7));
console.log('Using toPrecision(): ', n.toPrecision(10));
