console.log("*".repeat(2)); // repeat function over strings
let pars = parseInt(5); // to be sure the value will be integer
let num = Number(5); // parses entire string to a number

console.log(pars);
console.log(num);

let str = "50.5asdsa";
pars = parseInt(str); // parseInt parses up to first non-digit and returns whatever value has been parsed
num = Number("5.5"); // Number(object) tries to convert the entire string to a number(which can also be a float)

console.log(pars);
console.log(num);

console.log("Hello \nJavaScript"); // \n put the text after it on new line

var // global scoped

let // block scoped
const // block scoped

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

let a = "book";
let b = "page";

console.log(a === "BooK"); // false
console.log(b !== "paGe"); // true

let color = "red";

if (color === "red") 
    console.log("tomato");
else if (color === "yellow")
    console.log("banana");
    console.log("bye");

// Print
// tomato
// bye

if (color === "red") {
    console.log("tomato");
} else if (color === "yellow") {
    console.log("banana");
    console.log("bye");
}

// tomato


// % return remainder of division
let odd = 3 % 2;    // odd number = remainder is 1 or something else
let even = 4 % 2;   // even number = remainder is 0

console.log(odd);
console.log(even);
console.log();
// variable scope
// var, let, const

// var is global variable

// let is local variable,
// let start on the row where we declare it
// ends on 1st } closing curly bracket

// when let variable is declared inside if () { let something; } its accessible only inside {}
// if we declare let something; before if () {} we can use it outside of {} too

// const have characteristics of let, but constant is declared only one time and never changed

let myMoney = 500;
let payDayDate = 07;
let todayDate = 10;
const x = 10;

if (todayDate >= payDayDate) {
    var salary = 1000;
    let bonus = salary * 0.15;
    myMoney = myMoney + salary + bonus;
    const x = 7;
    console.log(`Const x = ${x} locally`); // x is 7 because is only block scope and is not crossing with the 1st declaration
}
// x = 8; // can't be, because x is constant

console.log(myMoney); // 1650
console.log(salary); // 1000
//console.log(bonus); // Error, because is declared in if statement
console.log(`Const x = ${x} globally`); // x is 10 because it takes this one from the beginning of the program


// every comparison is performed if the previous one return false, start from the 1st one
function number1to9([arg1]) {
    let num = parseInt(arg1);
  
    if (num === 1) {
        console.log("one");
    } else if (num === 2) {
        console.log("two");
    } else if (num === 3) {
        console.log("three");
    }
    // TODO: add more checks
    else {
        console.log("number too big"); 
    }
  }


  let str = "Hello, JS!";
  console.log(str);
  str = str.toLowerCase();
  console.log(str);

  // or
str = "Hello, JS!";
str = String(str.toLowerCase());
console.log(str);

// else if ((100 <= number) && (number <= 200)) 
// NOT
// else if ((100 <= number <= 200)) 

// search more carefully and try different ways to search in softUni forum

// Falsy (falsey)
  // 8 falsy values
/*
    false	The keyword false
    0	The number zero
    -0	The number negative zero
    0n	BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
    ""	
    Empty string value

    null	null - the absence of any value
    undefined	undefined - the primitive value
    NaN	NaN - not a number
*/
if (false) {console.log("")}
if (null) {console.log("")}
if (undefined) {console.log("")}
if (0) {console.log("")}
if (-0) {console.log("")}
if (0n) {console.log("")}
if (NaN) {console.log("")}
if ("") {console.log("")}

// The logical AND operator, &&
    // If the first object is falsy, it returns that object
    let bool1 = false && "dog"; // return: false
    let bool2 = 0 && "dog"; // return: 0
    let bool3 = "dog" && 0;
    // return 1st falsy object
    let bool4 = 0 && false; // return: 0
    let bool5 = false && 0; // return: false
    console.log(bool1);
    console.log(bool2);
    console.log(bool3);
    console.log(bool4);
    console.log(bool5);



    console.log(typeof(4)); // number
    console.log(typeof(4.4)); // shows numbers
    console.log(typeof("4")); // string
    console.log(typeof(true)); // boolean

    // multiple selections
    // alt + click (you can choose the rows to multi-cursor)
    /* A common way to add more cursors is with Ctrl+Alt+Down
    or Ctrl+Alt+Up that insert cursors below or above. */
    // Ctrl+D selects the word at the cursor, or the next occurrence of the current selection.
    /* Tip: You can also add more cursors with Ctrl+Shift+L,
    which will add a selection at each occurrence of the current selected text. */
console.log("number");
console.log("number");  
console.log("number");
console.log("number");

// Quickly shrink or expand the current selection. Trigger it with Shift+Alt+Left and Shift+Alt+Right.
// column box selection
// Place the cursor in one corner and then hold Shift+Alt while dragging to the opposite corner:

/* 
Key	Command	Command ID
Ctrl+Shift+Alt+Down	         Select Down	    cursorColumnSelectDown
Ctrl+Shift+Alt+Up	         Select Up	        cursorColumnSelectUp
Ctrl+Shift+Alt+Left	         Select Left	    cursorColumnSelectLeft
Ctrl+Shift+Alt+Right	     Select Right	    cursorColumnSelectRight
Ctrl+Shift+Alt+PageDown	     Select Page Down	cursorColumnSelectPageDown
Ctrl+Shift+Alt+PageUp	     Select Page Up	    cursorColumnSelectPageUp
*/

let input = "100\n200\n";
let msg = String(input).split("\n"); // string split by "\n" (new row)

console.log(msg[0], msg[1]);

// complex conditions
/* if (condition1) {
    if (condition2) {
        // тяло; 
    } else {
        // тяло;
    }
} */

// nested conditions have to be <= 3
// optimization of the code or another conditional statement
// like switch case

// true && true && false && true (program checks till false after that stops, because condition is not true)
// false || true || false || true (program check till true)
// logical negation a = true, !a = false, b = false, !b = true, that means b is not changed just ! check for the opposite

function logicalNegation(a) {
    console.log(`a = ${a}`);
    console.log(`!a = ${!a}`);
    console.log(`a = ${a}`);
    console.log(`a === !!a = ${a === !!a}`);
}
logicalNegation(true);

function numRange([arg1]) {
    let num = Number(arg1);
    let inRange = (num >= 100 && num <= 200) || num === 0;
    //  logical negation !inRange means if inRange is false the print invalid
    if (!inRange) {
        console.log("invalid");
    }
}

numRange(["1"]);
numRange(["100"]);

// && is with priority against ||
// good practice is to use () for better reading

// boolean conditions have to be:
// easy for understand and read, not short


// switch-case
// type have to be comparable (number, string)

/*
switch (селектор) {
    case стойност1:     // after selector we check all the cases
        конструкция;    // when we have valid case, the construction is started till meet
        break;          // operator break
    case стойност2:
        конструкция;
        break;
    case стойност3:
        конструкция;
        break;
    …
    default:            // when we have not coincidence with others, default construction is called if we have it
        конструкция;
        break;
}
*/

// 1st rule
    // most common situations
    // or in ascending order (numbers or strings)

// multiple labels in switch-case
/*
switch (селектор) {
    case стойност1:     // when case is meet the program will run next code, 
    case стойност2:     // because here we have not code or break operator
    case стойност3:
        конструкция;
        break;
    case стойност4:
    case стойност5:
        конструкция;
        break;
    …
    default:
        конструкция;
        break;
}
*/

console.log(`I read a book, named "Harry Potter"`);
console.log('I read a book, named "Harry Potter"');
console.log("I read a book, named \"Harry Potter\""); // escaping \"

let x = 1;
let y = 2;

if (x === 1 || y === 1) {
    console.log("1");
}
console.log("---");
if  ((x || y) === 1 ) {
    console.log("1");
}

// 1
// ---
// 1

/* The <meta> tag provides metadata about the HTML document.
Metadata will not be displayed on the page, but will be machine parsable.

Meta elements are typically used to specify page description,
keywords, author of the document, last modified, and other metadata.

Note: <meta> tags always go inside the <head> element.

Note: Metadata is always passed as name/value pairs.

HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
<meta name="viewport" content="width=device-width, initial-scale=1.0">

A <meta> viewport element gives the browser instructions
on how to control the page's dimensions and scaling.
The width=device-width part sets the width of the page to follow
the screen-width of the device (which will vary depending on the device).

<br /> they use this way of empty tags because they will be
able to work in HTML and XHTML that way

<input type="number"> for coordination of rect and point
<canvas> to draw geometric figs </canvas>

The arc() method creates an arc/curve (used to create circles, or parts of circles).

switch-case (when our program depends on value of one variable)

Винаги си мислете за кода с логическите изчисления, като за отделна част от,
различна от обработката на входните и изходните данни.
Той трябва да може да работи без значение как му се подават данните и
къде ще трябва да бъде показан резултатът.

check the language when you copy paste the result

Спрямо това как си подредим логическата схема (в какъв ред ще обхождаме граничните стойности),
ще имаме повече или по-малко проверки в условията. Помислете защо!

Винаги можем да инициализираме дадена стойност на параметъра и след това да направим само една проверка.
Това ни спестява една логическа стъпка.

*/

// Без използване на тернарен оператор кодът е по-дълъг, но се чете лесно:

let result = 2;
let numberIs = "";
if (result % 2 === 0) {
    numberIs = "even";
} else {
    numberIs = "odd";
}
console.log(numberIs);
// С използване на тернарен оператор кодът е много по-кратък, 
// но може да изисква допълнителни усилия,
// за да бъде прочетен и разбран като логика:

// ternary operator
// The ternary operator is an operator that takes three arguments.
// 1st comparison argument, 
// 2nd result upon a true comparison
// 3rd result upon a false comparison
// shortened way of writing if-else statement
numberIs = result % 2 === 0 ? "even" : "odd";
console.log(numberIs);
// Use ternary operators to set a value to a variable, or to reduce code if necessary.
// Use if-else statements for everything else.
totalStudio *= 0.70;  // 30% discount
totalApartment *= 0.90; // 10% discount

// when in function args, are array in our case, they can be string.split("/n"); also

// string from char code
console.log(String.fromCharCode(97)); // that will print "a"
console.log(String.fromCharCode(98));

// The static String.fromCharCode() method returns a string created
// from the specified sequence of UTF-16 code units.

let ch = 'a';

// return char code at index 0
console.log(ch.charCodeAt(0)); // if we put another index will be not valid because is only one symbol in the string

let str = "abc";

console.log(`Char code for b = ${str.charCodeAt(1)}`);

/*
function sumNumbers(args) { // when on new line each
    let n = parseInt(args[0]);
    let sum = 0;

    for (let i = 1; i < args.length; i++) {
       sum += Number(args[i]);
    }
    console.log(sum);
}

sumNumbers(["2", "10", "20"]);
sumNumbers(["3", "-10", "-20", "-30"]);
sumNumbers(["4", "45", "-20", "7", "11"]);
sumNumbers(["1", "999"]);
sumNumbers(["0"]);
*/

// to the max variable is assigned -infinity
let max = Number.NEGATIVE_INFINITY; // smallest number in JS

//a) declaration before loop:

let intermediateResult;
for (let i=0; i < 1000; i++) {
    intermediateResult = i;
   console.log(intermediateResult);
}
//b) declaration (repeatedly) inside loop:

for (let i = 0; i < 1000; i++) {
    let intermediateResult = i;
    console.log(intermediateResult);
}
/*
From a maintenance perspective, b is better.
Declare and initialize variables in the same place, in the narrowest scope possible.
Don't leave a gaping hole between the declaration and the initialization,
and don't pollute namespaces you don't need to. 
*/

// PRE-incrementation
let a = 1;
console.log(++a);   // 2
console.log(a);     // 2

// decrementation
a = 1;
console.log(--a);   // 0
console.log(a);     // 0

// POST-incrementation
a = 1;
console.log(a++);   // 1
console.log(a);     // 2

// decrementation
a = 1;
console.log(a--);   // 1
console.log(a);     // 0

/*
a = 1;
++a (+1 then return "a")
a++ (return "a" then +1)
*/

function sumNumbers(args) {
    let n = parseInt(args[0]);
    let sum = 0;

    for (let i = 1; i < args.length; i++) { // better use "n" because we save mistakes this way
       sum += Number(args[i]);
    }
    console.log(sum);
}

sumNumbers(["2", "10", "20", ""]);


function nums(args) {
    let str = args[0] + args[1];    // str = 17
    console.log(str);
    str = Number(args[0] + args[1]);    // str = 17
    console.log(str);
    str = Number(args[0]) + Number(args[1]);    // str = 8
    console.log(str);
}

nums(["1", "7"]);

// make the code more readable
// try to do as less as possible test for if-else
// don't use \n on some operation systems is not working like new row

/*
Препоръчително е всички JavaScript файлове да се поставят в края на HTML документа,
преди завършващия "body" таг. С това гарантираме по-бързото зареждане на страницата,
защото не забавяме рендирането (обработването) на елементите и.
 */

/*
Винаги първо поставяме файла с библиотеката [jquery.js],
след това този с кода на приставката [jquery-turtle.js].
*/

/*
Чрез техниката на приковаването (chaining) спестяваме допълнително писане на код:

$('#turtle').pen('blue', '5').lt(30).fd(150).lt(120) ...
s*/

console.log("*".repeat(10));
// В някои уеб браузъри еднаквите резултати в конзолата се сливат в един.
// Ако все пак стигнете до този случай, можете да добавите знак за нов ред \n на края на метода за отпечатване:

function drawSquare(n) {
    for (let i = 1; i <= n; i++) {
        let stars = "";

        for (let j = 1; j <= n; j++) { // inside loop will do "n" times
            stars += "*";
        }
        console.log(stars);
    }
}

drawSquare(5);

// for (let col = 1; col < row; col++) { // num cols depends on row

// Comment Code Block Ctrl+K+C (comment)
// Ctrl+K+U (uncomment)

// debugging with F10

// how many times a will be printed
let a = 5;

for (let i = 1; i < a; i++) {
    // print value of a
    i++;
}

// какви са стойностите на следните променливи "a" и "b" след изпълнение на
// следните команди? let a = 5, let b = 13, console.log(++a) console.log(b++);
// Отговор: 6 и 14


/*
\ е специален символ в езика JavaScript и използвайки само него в метода console.log(…),
конзолата няма да го разпечата, затова с \\ показваме на конзолата, че искаме да отпечатаме
точно този символ, без да се интерпретира като специален (екранираме го, на английски се нарича
“character escaping”).
*/

// a lot variables can make the code ugly

// when write something test it immediately

// interpolation only on one row, if press enter computer will print it
console.log(`same row 
new row`);

// while
// do while
// break
// infinity loop

/*
for (let i = 0; i < n; i++)  can be i++, i--, i+=2, i*2, i/2 etc.
*/

console.log(Math.pow(2, 2)); // 2 ^ 2 = 4

// while loop is lower level loop
// for loop is applicable while loop

function whileDemo([n]) {
    let health = 100;
    while (health > 0) {    // its not depend on counter
        
        // walk
        // take damage
        // headshot
    }
}

// for loop is to count something
// while loop is for something indefinitely

// for (let i = 0; i < array.length; i++) { i++ can be i = i * 2 + 1;
// 88 % 100 = 88

// while condition, if true loop it, if false, break

// do while is used very rarely
// do-while will do the body of the loop at least one time
// if you have a lot operations then use do-while
let a = 15;
do {    // Gosho is printed at least one time
    console.log("Gosho");
} while (a < 15);

// example with do-while
function factorial([n]) {
    let product = 1;

    do {
        product *= n;
        n--;
    } while (n > 0);
    console.log(product);
}

factorial([10]);

// break (if we want to finish the loop)

function solve([num]) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) { // for better optimization
        if (num % i === 0) {
            isPrime = false;
            console.log("Not Prime");
            break;
         }
        
    }
    
    if (isPrime) {
        console.log("Prime");
    }
 }
 
 solve([9]);

 // try to do something that can have an error
 // if you have error catch it
 try {
     
 } catch (error) {
     
 }

 function isEven(arg1) {
    try {
        let n = Number(arg1);
        if (n % 2 === 0) {
            console.log("The number is even");  // if this is true, next step is after catch block
        } else {
            throw "The number is not even"
        }    // if we go to here, next we go to catch and print the error
    } catch (error) {
        console.log(error);
    }
}

isEven(7);
isEven("sdfs");

// n % 10: връща последната цифра на числото n.
// Math.floor(n / 10): изтрива последната цифра на n.

// while (true) {
//     console.log("Infinite loop");
// }

// for (;;) {
//     console.log("Infinite loop");
// }

// prime numbers divisible on 1 on itself
// 1st prime number is 2
// not prime composite numbers are made by multiplication of prime numbers


// break is to break out of a loop like for, while, switch etc which you don't have here,
// you need to use return to break the execution flow of the current function and return to the caller.

// Когато във вложен цикъл използваме оператора break, той прекъсва изпълнението само на вътрешния цикъл.

// Always read carefully the task
/*
when have an array and have to check two numbers next to each other
try to do current and previous ?!?
*/

// The continue statement "jumps over" one iteration in the loop.
let skipNum = 5;
for (let i = 0; i < 7; i++) {
    if (i === skipNum) {
        continue;
    }
    console.log(i);
}

let firstLetter = "a";
let l1 = String(firstLetter).charCodeAt(0); // from letter get charCode at 0 position in this case
console.log(l1);
l1 = String.fromCharCode(l1);
console.log(l1);

// coords in rectangle x1 (left), y1 (top) corner, x2 (right) y2 (bottom) corner

// JAVASCRIPT NAMING CONVENTIONS: FILES
// PascalCase
// kebab-case

// let left = Math.min(first, second);
//     let right = Math.max(first, second);

//     let distanceLeft = Math.abs(left - point);
//     let distanceRight = Math.abs(right - point);

//     let minDist = Math.min(distanceLeft, distanceRight);

// if (i % 3 === 0) {
//     sum3 += num;
// }
// if (i % 3 === 1) {
//     sum1 += num;
// }
// if (i % 3 === 2) {
//     sum2 += num;
// }


// BINARY SEARCH
// In computer science, binary search, also known as half-interval search,
// logarithmic search, or binary chop, is a search algorithm that
// finds the position of a target value within a sorted array

let searchedNumber = -13;

let sortedNumbers = [1, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 25, 40, 42, 44, 53];
binarySearch();

function binarySearch() {
    let arrayLength = sortedNumbers.length;
    let centerIndex = Math.floor(arrayLength / 2);
    let numberInCenter = sortedNumbers[centerIndex];

    if (searchedNumber < numberInCenter && centerIndex !== 0) {
        sortedNumbers.splice(centerIndex, arrayLength - 1);
        return binarySearch(sortedNumbers);
    } else if (searchedNumber > numberInCenter && centerIndex !== 0) {
        sortedNumbers.splice(0, centerIndex);
        return binarySearch(sortedNumbers);
    } else if (searchedNumber === numberInCenter) {
        return true;
    } else if (searchedNumber !== numberInCenter && centerIndex === 0) {
        return false;
    }
}

let result = binarySearch();
console.log(result);

// here we make copy of array
// let sortedNumbers = [Array.from(spiralArr);

// descriptive name of function, including action
function printHeader() {
    "use strict";
    console.log("----------");
}

// separate big task in smaller once
// better readability and less mistakes
// use the same piece of code multiple times

// JS is not strongly typed language
// 2 basic ways for declaring functions: function declaration and function expression

// Func Declaration
function getSquare(n) {
    "use strict";
    return n * n;
}

// 'use strict' With strict mode, you can not, for example, use undeclared variables.

// Func Expression
// combination of declaration of function and declaration of variable
let getSquareVar = function getSquareFunc(n) {
    return n * n;
};

// if we don't put name on func the func is unnamed
// when declaring variable in body of function we call it local variable { variable scope }

// functions declared with Func Declaration can be called before declared because
// they are loaded in the memory before the execution of the program

// functions declared with Func Expression can be called only after declared

// Calling Funcs

// from global scope
printRowOfDashes();

function printRowOfDashes() {
    console.log("----------");
}

printRowOfDashes();

// invoking function from the body of another function
function printMessage() {
    "use strict";
    printRowOfDashes();
}

// also we can call function from its body ( that is called recursion )

// Funcs with Params
// params can be zero or multiple
// every parameter have its own name
// in JS declaring func with num of params don't need to use the same number of params when calling it
// func can be called with less or more params and that will not be a mistake

function printNumbers(start, end) {
    "use strict";
    for (let i = start; i <= end; i += 1) {
        console.log(i);
    }
}

printNumbers(5, 10);

// calling func with more params than declared
printNumbers(5, 10, 15, 20);

function printNumbers(firstNumber, secondNumber) {
    console.log(firstNumber);
    console.log(secondNumber);
    // this will print "undefined" on the console
}

printNumbers(5);

// Not Mandatory Params
function printNumbers(start = 0, end = 10) {
    for (let i = start; i <= end; i += 1) {
        console.log(i);
    }
}

printNumbers();
printNumbers(2);
printNumbers(2, 3);

// when is missing value of param, tha param will take the default value of declaration

// Return Funcs
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function compareTo(number1, number2) {
    if (number1 > number2) {
        return 1;
    } else if (number1 === number2) {
        return 0;
    } else {
        return -1;
    }
}

// if return is not in conditional statement
// after return don't have to be another rows of code

function getFullName(firstName, secondName, familyName) {
    return firstName + " " + secondName;

    return firstName + " " + secondName + " " + familyName;

}

// return can be used also without some specific value, just will return undefined


// Using the returned value of Func
function getMax(n1, n2) {
    const num1 = Number(n1);
    const num2 = Number(n2);

    if (n1 >= n2) {
        return n1;
    }

    return n2;
}

function getPrice(price) {
    price = Number(price);
    return price;
}
function getMyAge(age) {
    age = parseInt(age);
    return age;
}
let quantity = 2;
// 1. assigning the result as value of the variable
let max = getMax(5, 10);
console.log(max);
// 2. result to be used in expression
let total = getPrice() * quantity * 1.20;

// 3. the result of Func to another Func
let age = parseInt(getMyAge());

let number = 145.56546546545645648486186464864684;
function getMathPrecision(decimalNum) {
    if (decimalNum.toString().indexOf('.') > 0) {
        decimalNum = Math.round(decimalNum * 1e15) / 1e15;
    }
    return decimalNum;
}
let result = getMathPrecision(number);
console.log(result);

let x = 0.0000000001 * 0.00000000000000002;
result = getMathPrecision(x);
console.log(result);

//      FUNC RETURNING MULTIPLE VALUES
//      2 ways in JS (destruction or returning object)


//  DESTRUCTION

//      we put all returning value in []
function getNames(firstName, secondName, familyName) {.
    const name = firstName + " " + familyName;
    const fullName = firstName + " " + secondName + " " + familyName;

    return [name, fullName];
}
//      to get returned values we use [] we count the params which we want to get these values
//      assignment will be in the same order as values are returned
let [name, fullName] = getNames("John", "Silver", "Doe");

console.log(name); // John Doe
console.log(fullName); // John Silver Doe


//  OBJECT

//      we give names to the values we want to be returned
//      returning object with two values (name and fullName)
function getNamesObj(firstName, secondName, familyName) {
    return {
        name: firstName + " " + familyName,
        fullName: firstName + " " + secondName + " " + familyName
    };
}

const personNames = getNamesObj("John", "Silver", "Doe");

// with the "." dot symbol we have access to the values inside the object/function
console.log(personNames.name);  // John Doe
console.log(personNames.fullName);  // John Silver Doe


//  VARIANTS OF FUNCTIONS

//      in many programming languages one function can be declared in multiple ways
//      with the same name and different params "method overloading"
//      in JS that is not possible
//      if you declare function with the same name like another, JS will use the last one created
//      declaring new function with the same name you just like remove it and write new one on that place


// NESTED FUNCTIONS (local)

function solve() {
    // function sum is nested/local for solve function
    function sum(a, b) {
        return a + b;
    }

    const a = 10;
    const b = 20;

    console.log(sum(a, b));
}

solve();

//  why to use LOCAL FUNCTIONS?
//      when we have function which will be used only once or/and our function is getting too long
//      when function have too many rows is getting harder to read and maintenance (support)
//      using local functions is helping our code to be easy readable and easy for correction


//  DECLARATION OF NESTED FUNCTIONS
function solve() {
    // function sum is nested/local for solve function
    function sum(a, b) {
        return a + b;
    }

    const a = 10;
    const b = 20;

    console.log(sum(a, b));
}

//      function sum is nested/ local for solve
//      sum() can be used only in solve() because is declared in it

//  Local Functions can access variable which are declared on the same or upper level of them
function solve() {
    const message = "I will be used in local function";

    function printMessage() {
        console.log(message);
    }

    printMessage();
}

// this characteristic of nested functions makes them very useful for solving problems
// they save time and code, which we will write to pass parameters and variables to nested functions


//  NAMING FUNCTIONS. GOOD PRACTICES IN WORKING WITH FUNCTIONS

//  NAMING FUNCTIONS
//      each function is responsible for part of the problem we are solving
//      name to describes the goal of function
//      verb. or verb. + noun

//      lowerCamelCase
//      each word start with capital letter only the first one is starting with small
//      () are always after the name of function

//  Correct Names:
//      findStudent()
//      loadReport()
//      sine()

//          Not Correct:
// method 1, doSomething, handleStuff, sampleMethod, dirtyHack, FindStudent, LoadReport

//      IF WE CAN'T FIND SUITABLE NAME OUR FUNCTION IS SOLVING MORE THAN ONE PROBLEM OR
//      THERE IS NOT CLEAR DEFINED PURPOSE AND
//      WE HAVE TO THINK HOW TO SEPARATE IT ON FEW DIFFERENT FUNCTIONS

//  NAMING PARAMETERS OF FUNCTIONS
//      noun or adj. + noun
//      name of param to describe the units in mathematics which we work with

//  Correct Names:
//      firstName
//      report
//      speedKmH
//      userList
//      fontSizeInPixels
//      font

//      Not Correct:
// p, p1, p2, populate, LastName, last_name


//  GOOD PRACTICES IN WORKING WITH FUNCTIONS
//      one function have to solve only one problem
//      if this is not possible, we have to think how to
//      split the function on few functions
//      the name to describe purpose of the function
//      to avoid too long functions, like too long of our monitor
//      split them on few once

function printReceipt() {
    printHeader();
    printBody();
    printFooter();
}


// STRUCTURE AND FORMATTING OF CODE
//      indentation (moving more inward on block of code)

// correct formatting
function solve() {
    // some code here...
    // some more code here...
}

//      not correct formatting
function solve() {
    // some code here...
    // some more code...
}

// when the heading row of the function is too long is recommended
//      to split it on few rows like
//      each row after the first is TWO TABS inward (for better reading)

function solve(firstName, secondName,
    familyName) {
    // some code here...
    // some more code here...
}

// EMPTY ROW BETWEEN FUNCTIONS
//      AFTER LOOPS AND CONDITIONAL STATEMENTS

// ALWAYS {} FOR BODY OF LOOPS
//      AND CONDITIONAL STATEMENTS


//  WHAT WE LEARNED?
//      the purpose of functions is to split big tasks with multiple rows of code in
//          smaller and short tasks
//      declaration and calling of functions
//      functions with parameters and how to use them in our programs
//      returned value and operator return
//      good practices in naming functions and their parameters,
//          how to format the code and others.

// code formatting
// naming elements of code
// keyboard shortcuts
// code snippets
// debugging

//   CODE FORMATTING
//      we have to have good code formatting
//      because in practice we have to work
//      with other people and the code have
//      to be understandable to them too

//      they are conventions of writing quality code

//      {} to be opened in the same row and to be closed
//      below the construction to which they are

if (someCondition) {
    console.log("Inside the if statement");
}

//      console.log(); is 4 spaces or 1 tab inside
//      if construction is 1 tab inside the {}
//      have to be also 1 tab inside

if (someCondition) {
    if (anotherCondition) {
        console.log("Inside the if statement");
    }
}

//      the same rule is for loops and
//      all other constructions

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//      [Shift + Alt + F] formatting the code of whole document
//      can't format the name of variables
//      naming can't be with keyword
    //  like let, for, while, do, if, else

//  GOOD NAMING
//      firstName
//      age
//      startIndex
//      lastNegativeNumberIndex

//   SHORTCUTS VS CODE
//      SHIFT + ALT + F     (formatting code according to conventions)
//      CTRL + Backspace    (delete the word left of cursor)
//      CTRL + DEL          (delete the word right of cursor)
//      CTRL + K S          (save all files in the project)
//      CTRL + /            (comments and remove comments)
//      CTRL + Y            (redo, opposite of ctrl + z)
//      CTRL + F            (opens search)

//  CODE SNIPPETS
//      File > Preferences > Settings (ctrl + ,)
//      User Settings

//      writing "for" and then pressing TAB + TAB
//      its automatically generated full for loop

//  making own snippet
//  File > Preferences > User Snippets

/*{
	// Place your JSBook workspace snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
}*/

// 	between {} is the content of one snippet
// 	prefix is the short text which you write and
//  after pressing TAB + TAB the code is showing up
//  body is the complicated part of the snippet
//  this is actually the code which will be generated
//  Tabstops (they put the cursor on places in the code and
// 	between them can be navigated with tabs)
//  Placeholders (they are type of Tabstops,
//  but can include some value) like: ${1:myVal}
//  description for adding more clarification


for (let i = 0; i < n; i+=1) {
	''
}

// DEBUGGING TECHNICS
// notice the problems
// correct the code which makes the problem
// test to be sure that our program works correctly
// Ctrl + Shift + D can see the changes on local variables

// Rounding Numbers
// 	Math.round() rounding like in mathematics
//  Math.floor() always to the lowest integer
//  Math.ceil() always to the bigger integer
//  Math.trunc() cutting the floating point part

// ALWAYS USE === AND !==
// they are checking not only value but the type of variable

// TRUTHY and FALSY values

//Truthy
if (true) {}       //true
if ({}) {}         //true
if ([]) {}         //true
if (42) {}         //true
if ("foo") {}      //true
if (new Date()) {} //true
if (-42) {}        //true
if (3.14) {}       //true
if (-3.14) {}      //true
if (Infinity) {}   //true
if (-Infinity) {}  //true

//Falsy
if (false) {}       //false
if (null) {}        //false
if (undefined) {}   //false
if (0) {}           //false
if (NaN) {}         //false
if ('') {}          //false
if ("") {}          //false

// In time we will learn how to use them to make our code short