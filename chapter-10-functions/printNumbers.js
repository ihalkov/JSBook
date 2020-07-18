function printNumbers(start = 0, end = 10) {
    for (let i = start; i <= end; i+= 1) {
        console.log(i);
    }
}

printNumbers();
printNumbers(2);
printNumbers(2, 3);