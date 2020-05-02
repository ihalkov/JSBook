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
// logical negation a = true, !a = false, b = false, !b = true

function numRange([arg1]) {
    let num = Number(arg1);
    let inRange = (num >= 100 && num <= 200) || num === 0;

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
