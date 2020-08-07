function bullsAndCows([arg1, arg2, arg3]) {

    let secretNum = arg1;
    let bulls = parseInt(arg2);
    let cows = parseInt(arg3);

    let guessNum = "";
    let output = "";
    let solutionFound = false;

    function setCharAt(str,index,chr) {
        if(index > str.length-1) {
            return str;
        }
        return str.slice(0,index) + chr + str.slice(index+1);
    }

    function calcBullsCows(tempGuess, tempSecret) {
        let args = [0, 0];

        function getBulls() {
            for (let i = 0; i < tempSecret.length; i++) {
                if (tempSecret[i] === tempGuess[i]) {
                    tempGuess = setCharAt(tempGuess, i, "0");
                    tempSecret = setCharAt(tempSecret, i, "0");
                    args[0]++;
                    continue;
                }
            }
            return args[0];
        }

        function getCows() {
            for (let i = 0; i < tempSecret.length; i++) {
                if (tempSecret[i] === tempGuess[i] || tempSecret[i] === "0") {
                    continue;
                }
                let counter = 0;
                for (let j = 0; j < tempGuess.length; j++) {
                    if (counter > 0) {
                        break;
                    }
                    if (tempSecret[i] === tempGuess[j] && i !== j) {
                        tempGuess = setCharAt(tempGuess, j, "0");
                        args[1]++;
                        counter++;
                    }
                }
            }
            return args[1];
        }

        getBulls();
        getCows();

        return args;
    }

    for (let d1 = 1; d1 <= 9; d1++) {
        for (let d2 = 1; d2 <= 9; d2++) {
            for (let d3 = 1; d3 <= 9; d3++) {
                for (let d4 = 1; d4 <= 9; d4++) {
                    let b = 0;
                    let c = 0;

                    guessNum = `${d1}${d2}${d3}${d4}`;
                    let tempGuess = guessNum;
                    let tempSecret = secretNum;
                    let array = calcBullsCows(tempGuess, tempSecret);
                    b = parseInt(array[0]);
                    c = parseInt(array[1]);

                    if (bulls === b && cows === c) {
                        solutionFound = true;
                        output += guessNum + " ";
                    }
                }
            }
        }
    }
    if (!solutionFound) {
        output = "No";
    }

    console.log(output);
}

bullsAndCows(["2228", "2", "1"]);
bullsAndCows(["1234", "3", "0"]);
bullsAndCows(["1234", "3", "1"]);