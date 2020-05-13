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

