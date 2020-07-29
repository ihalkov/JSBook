function crossingSeq(args) {
    let tribNum1 = parseInt(args[0]);
    let tribNum2 = parseInt(args[1]);
    let tribNum3 = parseInt(args[2]);
    let spiralNum = parseInt(args[3]);
    let spiralStep = parseInt(args[4]);

    function trib(tribNum1, tribNum2, tribNum3) {
        let tribonacciNumbers = [tribNum1, tribNum2, tribNum3];

        function findingNumbers() {
            let nextNum = tribNum3;
            while (nextNum < 1000000) {
                nextNum = tribNum1 + tribNum2 + tribNum3;
                tribonacciNumbers.push(nextNum);

                tribNum1 = tribNum2;
                tribNum2 = tribNum3;
                tribNum3 = nextNum;
            }
            return tribonacciNumbers;
        }
        return findingNumbers();
    }

    function spiral(firstNum, spiralStep) {
        let spiralCount = 0, spiralStepMul = 1;

        let spiralCurrent = firstNum;
        let spiralNumbers = [spiralCurrent];

        while (spiralCurrent < 1000000) {
            spiralCurrent += spiralStep * spiralStepMul;
            spiralNumbers.push(spiralCurrent);
            spiralCount++;
            if (spiralCount % 2 === 0) {
                spiralStepMul++;
            }
        }
        return spiralNumbers;
    }

    let tribonacciArr = trib(tribNum1, tribNum2, tribNum3);
    let spiralArr = spiral(spiralNum, spiralStep);

    function checkFirstRepeatLetter(tribonacciArr, spiralArr) {
        let output = "";
        let found = false;

        for (let i = 0; i < tribonacciArr.length; i++) {
            for (let j = 0; j < spiralArr.length; j++) {
                if (tribonacciArr[i] === spiralArr[j] && tribonacciArr[i] <= 1000000) {
                    output = tribonacciArr[i];
                    found = true;
                    break;
                }
            }

            if (found) {
                break;
            }
        }
        if (!found) {
            output = "No";
        }
        return output;
    }

    let output = checkFirstRepeatLetter(tribonacciArr, spiralArr);
    console.log(output);
}