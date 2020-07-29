function crossingSequencesBinarySearch(args) {
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
    function binarySearch(searchedNumber, sortedNumbers) {
        let arrayLength = sortedNumbers.length;
        let centerIndex = Math.floor(arrayLength / 2);
        let numberInCenter = sortedNumbers[centerIndex];

        if (searchedNumber < numberInCenter && centerIndex !== 0) {
            sortedNumbers.splice(centerIndex, arrayLength - 1);
            return binarySearch(searchedNumber, sortedNumbers);
        } else if (searchedNumber > numberInCenter && centerIndex !== 0) {
            sortedNumbers.splice(0, centerIndex);
            return binarySearch(searchedNumber, sortedNumbers);
        } else if (searchedNumber === numberInCenter && searchedNumber <= 1000000) {
            return searchedNumber;
        } else if (searchedNumber !== numberInCenter && centerIndex === 0) {
            return false;
        }
    }

    let tribonacciArr = trib(tribNum1, tribNum2, tribNum3);
    let spiralArr = spiral(spiralNum, spiralStep);

    function checkFirstRepeatLetter(tribonacciArr, spiralArr) {
        let output = "";
        let found = false;
        for (let i = 0; i < tribonacciArr.length; i++) {
            let searchedNumber = tribonacciArr[i];
            let sortedNumbers = Array.from(spiralArr);
            found = binarySearch(searchedNumber, sortedNumbers);
            if (found !== false) {
                output = found;
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

crossingSequencesBinarySearch(["1", "2", "3", "5", "2"]);
crossingSequencesBinarySearch(["13", "25", "99", "5", "2"]);
crossingSequencesBinarySearch(["99", "99", "99", "2", "2"]);
crossingSequencesBinarySearch(["1", "1", "1", "1", "1"]);
crossingSequencesBinarySearch(["1", "4", "7", "23", "3"]);