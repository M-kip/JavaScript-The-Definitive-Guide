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
