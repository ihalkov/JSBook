function oddEvenPosition(args) {
    let n = parseInt(args[0]);

    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;

    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

        for (let i = 1; i <= n; i++) {
            let num = Number(args[i]);
            if (i % 2 === 0) { // even nums
                evenSum += num;
                if (num > evenMax) {
                    evenMax = num;
                }
                if (num < evenMin) {
                    evenMin = num;
                }
            } else {
                oddSum += num;
                if (num > oddMax) {
                    oddMax = num;
                }
                if (num < oddMin) {
                    oddMin = num;
                }
            }
        }

    let oddInfo = `OddSum=${oddSum},\nOddMin=${oddMin},\nOddMax=${oddMax},`;
    let evenInfo = `EvenSum=${evenSum},\nEvenMin=${evenMin},\nEvenMax=${evenMax}`;

    if (n === 1) {
        //let num = Number(args[1]);
        //oddInfo = `OddSum=${oddSum},\nOddMin=${num},\nOddMax=${num},`;
        evenInfo = `EvenSum=0,\nEvenMin=No,\nEvenMax=No`;
    } else if (n === 0) {
        oddInfo = `OddSum=0,\nOddMin=No,\nOddMax=No,`;
        evenInfo = `EvenSum=0,\nEvenMin=No,\nEvenMax=No`;
    }
    console.log(oddInfo + "\n" + evenInfo);
}

oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
oddEvenPosition(["1", "1"]);
oddEvenPosition(["5", "3", "-2", "8", "11", "-3"]);
oddEvenPosition(["1", "-5"]);
console.log();
oddEvenPosition(["2", "1.5", "-2.5"]);
oddEvenPosition(["0"]);
oddEvenPosition(["4", "1.5", "1.75", "1.5", "1.75"]);
oddEvenPosition(["3", "-1", "-2", "-3"]);
