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