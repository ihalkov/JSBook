function mathOperations([n1, n2, operator]) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    let result = 0;
    let output = "";
    let numberIs = "";

    if (n2 === 0 && (operator === "/" || operator === "%")) {
        output = `Cannot divide ${n1} by zero`;
    } else if (operator === "/") {
        result = n1 / n2;
        output = `${n1} ${operator} ${n2} = ${result.toFixed(2)}`;
    } else if (operator === "%") {
        result = n1 % n2;
        output = `${n1} ${operator} ${n2} = ${result}`;
    } else {
        if (operator === "+") {
            result = n1 + n2;
        } else if (operator === "-") {
            result = n1 - n2;
        } else if (operator === "*") {
            result = n1 * n2;
        }
        numberIs = result % 2 === 0 ? "even" : "odd";
        output = `${n1} ${operator} ${n2} = ${result} - ${numberIs}`;
    }
    console.log(output);
}

mathOperations(["123", "12", "/"]);
mathOperations(["10", "3", "%"]);
console.log();
mathOperations(["112", "0", "/"]);
mathOperations(["10", "0", "%"]);
console.log();
mathOperations(["10", "12", "+"]);
mathOperations(["10", "1", "-"]);
mathOperations(["7", "3", "*"]);