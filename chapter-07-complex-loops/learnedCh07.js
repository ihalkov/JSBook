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
