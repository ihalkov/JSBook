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