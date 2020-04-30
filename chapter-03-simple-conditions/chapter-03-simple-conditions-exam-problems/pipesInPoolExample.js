function checkPoolFilling([input]) {
    let str = String(input).split("\n"); // string split by "\n" (new row)

    volume = parseInt(str[0]);
    pipe1 = parseInt(str[1]);
    pipe2 = parseInt(str[2]);
    hours = Number(str[3]);

    let water = (pipe1 + pipe2) * hours;

    if (water <= volume) {
        console.log(`The pool is ${Math.trunc(water / volume * 100)}% full. Pipe 1: ${Math.trunc(pipe1 * hours / water * 100)}%. Pipe 2: ${Math.trunc(pipe2 * hours / water * 100)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${parseFloat((water - volume).toFixed(2))} liters.`); // parseFloat to 2 digits after floating point
    }
}

checkPoolFilling(["1000\n100\n120\n3\n"]);
checkPoolFilling(["150\n150\n100\n2.5\n"]);