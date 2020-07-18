function printNumbers(start = 0, end = 10) {
    for (let i = start; i <= end; i+= 1) {
        console.log(i);
    }
}

printNumbers();
printNumbers(2);
printNumbers(2, 3);

// Array destructing

// we have an array with the name and surname
let arr = ["Ivan", "Halkov"];

// “Destructuring” does not mean “destructive”.
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.

// It’s just a shorter way to write:

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];