function sumsStep3(args) {
    let n = parseInt(args[0]);
    
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let i = 1; i <= n; i++) {
        let num = parseInt(args[i]);

        if (i % 3 === 0) {
            sum3 += num;
        }
        if (i % 3 === 1) {
            sum1 += num;
        }
        if (i % 3 === 2) {
            sum2 += num;
        }
    }

    console.log(`sum1 = ${sum1}`);
    console.log(`sum2 = ${sum2}`);
    console.log(`sum3 = ${sum3}`);
}

sumsStep3(["2", "3", "5"]);
sumsStep3(["4", "7", "-2", "6", "12"]);
sumsStep3(["5", "3", "5", "2", "7", "8"]);