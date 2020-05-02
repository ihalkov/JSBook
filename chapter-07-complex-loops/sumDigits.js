function sumDigits([arg1]) {
    let n = parseInt(arg1);
    let sum = 0;

    do {
        let currentDigit = n % 10;
        sum += currentDigit;
        n = Math.floor(n / 10);
    } while (n > 0);
    console.log(sum);
}

sumDigits(["5634"]);