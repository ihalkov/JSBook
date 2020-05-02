function equalPairs(args) {
    let nums = Number(args[0]) * 2;

    let pair = Number(args[1]) + Number(args[2]);
    let diff = 0
    let maxDiff = 0;

    for (let i = 3; i <= nums; i+=2) {
        let newPair = Number(args[i]) + Number(args[i + 1]);
        if (pair !== (newPair)) {
            diff = Math.abs(pair - newPair);
            pair = newPair;
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }

    let output = `Yes, value=${pair}`;
    if (maxDiff !== 0) {
        output = `No, maxdiff=${maxDiff}`;
    }
    console.log(output);
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "-1", "2", "0", "-1"]);