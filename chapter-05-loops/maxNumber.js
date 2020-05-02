function maxNumber(args) {
    let n = Number(args[0]); // numbers
    let max = Number.NEGATIVE_INFINITY; // smallest number in JS

    for (let i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
}

maxNumber(["2", "100", "99"]);
maxNumber(["3", "-10", "20", "-30"]);
maxNumber(["4", "40", "-20", "7", "99"]);
maxNumber(["1", "999"]);
maxNumber(["2", "-1", "-2"]);