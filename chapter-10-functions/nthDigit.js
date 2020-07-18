function solve([n, i]) {
    let number = parseInt(n);
    let index = parseInt(i);

    function findNthDigit() {
        let count = 0;
        let currentDigit = 0;
        while (count !== index) {
            currentDigit = Math.floor(number % 10);
            number /= 10;
            count += 1;
        }
        return currentDigit;
    }

    let nthDigit = findNthDigit();
    console.log(nthDigit);
}

solve(["5564646", "2"]);