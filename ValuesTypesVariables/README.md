- Types are values that can be represented and manipulated in JavaScript
- Variables define a symbolic name for a value and allows the program/programmer to access and manipulate the value by            referencing the value by name

## JavaScript Types
- Javascript types are categorised into 2 types namely;
1. Primitive types
2. Object types

# Primitives types
 Primitive types fall under numbers, strings and truth values (true and false)
 null and undefined also falls under the category of primitive data types
# Objects
 Objects are a collections of properties in a key value pair format
 
 **Examples of objects**
 - Functions
 - Arrays
 - Classes

JavaScript types are further subdivided into immutables and mutable types, objects with methods and objects without methods

## Numbers
 In JavaScript there is no types to represent floating point numbers and integers
 JavaScript uses IEEE floating point format to represent integers and floating point numbers

 Numbers the appear directly in code are refered to as number literals
 JavaScript recognizes boths integer literals and hexademical literals some JavaScript interpreters 
 support octal numbers but not all interpreters have this ability

JavaScript supports simple arithmetic operations such as addition, subtraction, multiplication
division, and modulo operations for complex mathematical operations JavaScript exposes the Math object
which has methods to perform complex operations such as Square root, and power operations.

## Date and Times
 JavaScript include a Date() construcotr for creating date objects
 The date object exposes and API for simple date computations

## String
- A string is an immutable ordered sequence of 16bit values, each of which typically represents a Unicode character
- The length of a String is usually the of of 16bit values it contains
- String in javascript use zero base indexing
**String Literal** is a string enclosed in double or single quotes
 **Java Standard dictates we write our string in single quotes**

# Pattern Matching
 JavaScript defines a RegExp() constructor for creating objects that represent textual patterns
 These patterns are described with regular expressions javascript adopts Perl's syntax for regular experssions.

**Examples**
- /^HMTL/ // Math the letters H T M L at the start of a string
- /[1-9][1-9]*/ // Match a non-zero digit ,followed by any # of digits
- /\bjavascript\b/i // Match "javascript" as a word, case-insensitive

## Boolean Values 
 Boolean values represents truth or false, yes or no and on or off
 There are only two possible values for this type The reserved words true and false

 **Boolean values** are commonly used in JavaScript control structures for example
 the if/else statement

 **Any JavaScript value can be converted to boolean value **
 - undefined
 - null
 - 0
 - -0
 - NaN
 - "" // empty string
 Converts to false

 While all positive values and objects convert to true
