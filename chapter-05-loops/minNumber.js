function maxNumber(args) {
    let n = parseInt(args[0]); // numbers

    let min = Number.POSITIVE_INFINITY; // biggest number in JS

    for (let i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (num < min) {
            min = num;
        }
    }
    console.log(min);
}