function oddEvenSum(args) {
    let n = parseInt(args[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenSum += Number(args[i]);
        } else {
            oddSum += Number(args[i]);
        }
    }

    let sumInfo = "";
    let sumDiff = 0;
    if (evenSum === oddSum) {
        sumInfo = `Yes\nSum = ${evenSum}`;
    } else {
        sumDiff = Math.abs(evenSum - oddSum);
        sumInfo = `No\nDiff = ${sumDiff}`
    }
    console.log(sumInfo);
}

oddEvenSum(["4", "10", "50", "60", "20"]);
oddEvenSum(["4", "3", "5", "1", "-2"]);
oddEvenSum(["3", "5", "8", "1"]);