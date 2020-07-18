function solve([num, power]) {
    const n = Number(num);
    const p = parseInt(power);

    function calculatePower(n, p) {
        let result = n;

        if (p === 0) {
            return 1;
        }
        while (p > 1) {
            result *= n;
            p -= 1;
        }

        if (n < 0) {
            return -result;
        }

        if (result.toString().indexOf('.') > 0) {
            result = Math.round(result * 1e15) / 1e15;
        }

        return result;
    }

    let numOfPower = calculatePower(n, p);
    console.log(numOfPower);
}

solve(["2", "8"]);
solve(["3", "4"]);
solve(["0", "0"]);
solve(["1", "0"]);
solve(["0", "1"]);
solve(["-10", "2"]);
solve(["1", "1"]);