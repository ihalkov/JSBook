function checkPrime([n]) {
    n = parseInt(n);
    let isPrime = true;

    if (n > 1) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            console.log("Not prime");
            break;
        }
    }

    if (isPrime === true) {
        console.log("Prime");
    }
    return;
    }
    console.log("Not prime");
}