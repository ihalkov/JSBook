function checkPoolFilling([volumeOfPool, pipe1, pipe2, hoursFilling]) {
    volumeOfPool = parseInt(volumeOfPool);
    pipe1 = parseInt(pipe1);
    pipe2 = parseInt(pipe2);
    hoursFilling = Number(hoursFilling);

    let msg = "";

    if ((1 <= volumeOfPool) && (volumeOfPool <= 10000) &&
    ((1 <= pipe1) && (pipe1 <= 5000)) && ((1 <= pipe2) && (pipe2 <= 5000))
    && ((1.0 <= hoursFilling) && (hoursFilling <= 24.00))) {
       
        let poolFilled = (pipe1 + pipe2) * hoursFilling;

        if (poolFilled <= volumeOfPool) {
            let poolFilledPercents = (poolFilled / volumeOfPool) * 100;
            let pipe1Filled = ((pipe1 * hoursFilling) / poolFilled) * 100;
            let pipe2Filled = ((pipe2 * hoursFilling) / poolFilled) * 100;

            msg += `The pool is ${Math.floor(poolFilledPercents)}% full. Pipe 1: ${Math.floor(pipe1Filled)}%. Pipe 2: ${Math.floor(pipe2Filled)}%.`;
        } else {
            let litresOver = poolFilled - volumeOfPool;
            msg += `For ${hoursFilling} hours the pool overflows with ${litresOver} liters.`;
        }
            console.log(msg);
    }
}

checkPoolFilling(["1000\n100\n120\n3\n"]);
checkPoolFilling(["1000", "100", "120", "3"]);
checkPoolFilling(["100", "100", "100", "2.5"]);