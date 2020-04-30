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