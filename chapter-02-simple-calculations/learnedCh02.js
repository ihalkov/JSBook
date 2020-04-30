// Array destructuring
const arrayOfNumbers = [1, 2, 3, 4, 5];
const [one, two, three, four, five] = arrayOfNumbers;

console.log(arrayOfNumbers);
console.log(one);
console.log(five);

// Object destructuring
const objectOfNumbers = {
    eleven: 11
};

const { eleven } = objectOfNumbers;

console.log(objectOfNumbers.eleven);
console.log();

// Division of numbers
let a = 25;
let i = a / 4;  // 6.25 (float)
let f = parseInt(a / 4.0); // 6 fractional part is cut
let infinity = a / 0; // result is infinity
let sqrt = Math.sqrt(-1); // NaN (not a number)

console.log(i);
console.log(f);
console.log(infinity);
console.log(sqrt);

// when we test some program input to be like string to test the programW
console.log();
console.log(23 * 1.3); // 29.900000000000002
console.log(1.1 + 1.1 + 1.1); // 3.3000000000000003

let b = 24 * 1.3; // 31.200000000000003
console.log(b);

console.log();
b = b.toFixed(2); // 31.20 and b is text
console.log(b);
console.log(b + "asdsad");

// string interpolation
console.log();
let city = "Sofia";
let area = "101";
let text = `City: ${city}, area: ${area}.`; // City: Sofia, area: 101.
console.log(text);

// var can be defined after we assign it
n = 5;
console.log(`n = ${n}`);

var n;

// round numbers
let up = Math.ceil(23.45); // up = 24
let down = Math.floor(45.67); // down = 45
let trunc = Math.trunc(45.67); // trunc = 45 returns the integer part of a number by removing any fractional digits.
let num = 123.456789;
num = num.toFixed(2); // 123.45 and return it to text

let round = 12345.56789;
round = Math.round(round); // 12346 rounded to the nearest integer

let absNum = Math.abs(-5);

console.log(num);
console.log(round);
console.log(`Absolute value: ${absNum}`);

let max = Math.max(-20, 20, 3, -5); // return MAX number
console.log(max);

let min = Math.min(-20, 20, 3, -50); // return MIN number
console.log(min);

console.log(Date()); // current date
 var currentDate = new Date();
 console.log(currentDate); // current date

 let dateString = "1995-02-25";
let dateParts = dateString.split("-"); // show it like a array
console.log(dateParts);

// zero test
// put entry in string type
let amount = 100;

console.log(Number(amount.toFixed(2))); // print 100
console.log(amount.toFixed(2)); // print 100.00