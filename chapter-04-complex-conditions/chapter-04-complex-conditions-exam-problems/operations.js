function mathOperations([n1, n2, operator]) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    let result = 0;
    let output = "";
    let numberIs = "";
    switch (operator) {
        case "+":
            result = n1 + n2;
            numberIs = result % 2 === 0 ? "even" : "odd";
            output = `${n1} ${operator} ${n2} = ${result} - ${numberIs}`;
            break;
        case "-":
            result = n1 - n2;
            numberIs = result % 2 === 0 ? "even" : "odd";
            output = `${n1} ${operator} ${n2} = ${result} - ${numberIs}`;
            break;
        case "*":
            result = n1 * n2;
            numberIs = result % 2 === 0 ? "even" : "odd";
            output = `${n1} ${operator} ${n2} = ${result} - ${numberIs}`;
            break;
        case "/":
            result = n1 / n2;
            output = `${n1} ${operator} ${n2} = ${result.toFixed(2)}`;
            if (n2 === 0) {
                output = `Cannot divide ${n1} by zero`;
            }
            break;
        case "%":
            result = n1 % n2;
            output = `${n1} ${operator} ${n2} = ${result}`;
            if (n2 === 0) {
                output = `Cannot divide ${n1} by zero`;
            }
            break;
        default:
            break;
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