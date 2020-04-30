function checkPoolFilling([input]) {
    let str = String(input).split("\n"); // string split by "\n" (new row)

    let volume = parseInt(str[0]);
    let pipe1 = parseInt(str[1]);
    let pipe2 = parseInt(str[2]);
    let hours = Number(str[3]);

    let msg = "";

    /*if ((1 <= volume) && (volume <= 10000) &&
    ((1 <= pipe1) && (pipe1 <= 5000)) && ((1 <= pipe2) && (pipe2 <= 5000))
    && ((1.0 <= hours) && (hours <= 24.00))) {*/
       
        let poolFilled = (pipe1 + pipe2) * hours;
        

        if (poolFilled <= volume) {
            let poolFilledPercents = poolFilled / volume * 100;
            let pipe1Filled = pipe1 * hours / poolFilled * 100;
            let pipe2Filled = pipe2 * hours / poolFilled * 100;

            msg = `The pool is ${Math.floor(poolFilledPercents)}% full. Pipe 1: ${Math.floor(pipe1Filled)}%. Pipe 2: ${Math.floor(pipe2Filled)}%.`;
        } else if (poolFilled > volume) {
            let litresOver = poolFilled - volume;
            msg = `For ${hours} hours the pool overflows with ${parseFloat(litresOver.toFixed(2))} liters.`;
        }
            console.log(msg);
   // }
}

checkPoolFilling(["10500\n100\n120\n3\n"]);
checkPoolFilling(["134\n150\n134\n2.5\n"]);
checkPoolFilling(["1000", "100", "120", "3"]);
checkPoolFilling(["100", "100", "100", "2.5"]);