function numberInRange(args) {
    let counter = 0;
    let currentNumber = args[counter];

    while (currentNumber > 100 || currentNumber < 1) {
        console.log("Invalid number!");
        counter++;
        currentNumber = args[counter];
    }

    console.log(`The number is ${currentNumber}`);
}

numberInRange(["-10", "310", "10", "-150"]);