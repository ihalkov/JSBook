function enterEvenNumber(args) {
    let num = 0;
    let count = 0;

    while (true) {
        num = parseInt(args[count]);
        if (num % 2 === 0) {
            break;
        }
        console.log("The number is not even");
        count++;
    }
    console.log(`Even number entered ${num}`);
}

