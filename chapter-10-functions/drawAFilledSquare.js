function solve([n]) {
    const num = parseInt(n);

    function printHeaderFooter(num) {
        console.log("-".repeat(2 * num));
    }

    function printMiddleRow(num) {
        let line = "-";

        for (let i = 0; i < num - 1; i++) {
            line += "\\/";
        }
        line += "-";
        console.log(line);
    }

    function drawMiddleSquare(num) {
        for (let i = 1; i < num - 1; i+=1) {
            printMiddleRow(num);
        }
    }

    printHeaderFooter(num);
    drawMiddleSquare(num);
    printHeaderFooter(num);
}

solve([4]);
solve([5]);
