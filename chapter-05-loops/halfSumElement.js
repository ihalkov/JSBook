function halfSumElement(args) {
    let n = parseInt(args[0]);

    let sumAll = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let num = Number(args[i]);
        sumAll += num;
        if (num > maxNum) {
            maxNum = num;
        }
    }

    let sumSmall = sumAll - maxNum;
    let diff = Math.abs(sumSmall - maxNum);
    let result = "";

    if (sumSmall === maxNum) {
        result = `Yes\nSum = ${sumSmall}`;
    } else {
        result = `No\nDiff = ${diff}`;
    }
    console.log(result);
}

halfSumElement(["7", "3", "4", "1", "1", "2", "12", "1"]);
halfSumElement(["4", "6", "1", "2", "3"]);
halfSumElement(["3", "1", "1", "10"]);
halfSumElement(["3", "5", "5", "1"]);
halfSumElement(["3", "1", "1", "1"]);