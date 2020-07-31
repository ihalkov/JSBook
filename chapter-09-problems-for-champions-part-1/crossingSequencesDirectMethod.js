function crossingSequencesDirectMethod(args) {
    let tribNum1 = parseInt(args[0]);
    let tribNum2 = parseInt(args[1]);
    let tribNum3 = parseInt(args[2]);
    let spiralNum = parseInt(args[3]);
    let spiralStep = parseInt(args[4]);

    let tribonacciCurrent = tribNum1;

    let spiralCount = 0, spiralStepMul = 1;
    let spiralCurrent = spiralNum;
    let output = "No";
    let count = 0;
    while (tribonacciCurrent <= 1000000 && spiralCurrent <= 1000000) {
        if (tribonacciCurrent === spiralCurrent) {
            // print and stop execution
            output = tribonacciCurrent;
            break;
        } else if (tribonacciCurrent < spiralCurrent) {
            tribonacciCurrent = tribNum1 + tribNum2 + tribNum3; // to be fixed trib current is only more than 3 of them together

            count += 1;
            if (count === 1) {
                tribonacciCurrent = tribNum2;
            } else if (count === 2) {
                tribonacciCurrent = tribNum3;
            } else {
                tribNum1 = tribNum2;
                tribNum2 = tribNum3;
                tribNum3 = tribonacciCurrent;
            }
        } else {
            spiralCurrent += spiralStep * spiralStepMul;
            spiralCount += 1;
            if (spiralCount % 2 === 0) {
                spiralStepMul += 1;
            }
        }
    }
    console.log(output);
}

crossingSequencesDirectMethod(["1", "2", "3", "5", "2"]);
crossingSequencesDirectMethod(["13", "25", "99", "5", "2"]);
crossingSequencesDirectMethod(["99", "99", "99", "2", "2"]);
crossingSequencesDirectMethod(["1", "1", "1", "1", "1"]);
crossingSequencesDirectMethod(["1", "4", "7", "23", "3"]);