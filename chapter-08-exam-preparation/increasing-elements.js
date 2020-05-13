function increasingElements(arg) {
    let n = parseInt(arg[0]);

    let sequenceLength = 0;
    let longestSequence = 0;
    let prevNum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = parseInt(arg[i]);
        // in the first iteration there is no actual prevNum
        // is not matter what numeric value will be assigned to it
        // later on we count each item on growing sequence
        // sequence length is always growing when current num is bigger than previous
        // when is not we assign one to sequence length,
        // because will be always at least one element in the sequence
        if (currentNum > prevNum) {
            sequenceLength++;
        } else {
            sequenceLength = 1;
        }

        if (sequenceLength > longestSequence) {
            longestSequence = sequenceLength;
        }
        prevNum = currentNum;
    }
    console.log(longestSequence);
}

increasingElements(["3", "5", "2", "4"]);
increasingElements(["4", "2", "8", "7", "6"]);
increasingElements(["4", "1", "2", "4", "4"]);
increasingElements(["4", "5", "6", "7", "8"]);
increasingElements(["3", "-1", "-2", "0"]);