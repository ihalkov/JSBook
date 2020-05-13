function sumNumbers([arg1, arg2, arg3]) {
    let a = parseInt(arg1);
    let b = parseInt(arg2);
    let c = parseInt(arg3);

    let result = "No";
    if (a + b === c) {
        result = `${a} + ${b} = ${c}`;
        if (b < a) {
            result = `${b} + ${a} = ${c}`;
        }
    } else if (a + c === b) {
        result = `${a} + ${c} = ${b}`;
        if (c < a) {
            result = `${c} + ${a} = ${b}`;
        }
    } else if (c + b === a) {
        result = `${c} + ${b} = ${a}`;
        if (b < c) {
            result = `${b} + ${c} = ${a}`;
        }
    }
    console.log(result);
}

sumNumbers(["3", "5", "2"]);
sumNumbers(["2","2","4"]);
sumNumbers(["1","1","5"]);
sumNumbers(["2","6","3"]);