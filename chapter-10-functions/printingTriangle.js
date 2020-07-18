function solve([n]) {
    const num = parseInt(n);

    function printLine(start = 1, end) {
        let line = "";
        for (let i = start; i <= end; i+=1) {
            line += i + " ";
        }
        console.log(line);
    }

    function upperPart(num) {
        for (let i = 1; i < num; i+=1) {
            printLine(1, i);
        }
    }

    function bottomPart(num) {
        for (let i = num - 1; i > 0; i-=1) {
            printLine(1, i);
        }
    }

    upperPart(num);
    printLine(1, num);
    bottomPart(num);
}

solve([3]);
solve([4]);