function xExpression([expression]) {
    let index = 0;
    let symbol = expression[index];
    let result = 0;
    let expressionOperator = "+";
    while (symbol !== "=") {
        if (symbol === "(") {
            let innerResult = 0;
            let innerOperator = "+";
            index += 1;
            symbol = expression[index];
            while (symbol !== ")") {
                if (0 <= symbol - "0" && symbol - "0" <= 9) {
                    switch (innerOperator) {
                        case "+":
                            innerResult += symbol - "0";
                            break;
                        case "-":
                            innerResult -= symbol - "0";
                            break;
                        case "/":
                            innerResult /= symbol - "0";
                            break;
                        case "*":
                            innerResult *= symbol - "0";
                            break;
                        default:
                            break;
                    }
                } else if (symbol === "+" || symbol === "-"
                    || symbol === "/" || symbol === "*") {
                    innerOperator = symbol;
                }
                index += 1;
                symbol = expression[index];
            }
            switch (expressionOperator) {
                case "+":
                    result += innerResult;
                    break;
                case "-":
                    result -= innerResult;
                    break;
                case "/":
                    result /= innerResult;
                    break;
                case "*":
                    result *= innerResult;
                    break;
                default:
                    break;
            }
        } else if (0 <= symbol - "0" && symbol - "0" <= 9) {
            switch (expressionOperator) {
                case "+":
                    result += symbol - "0";
                    break;
                case "-":
                    result -= symbol - "0";
                    break;
                case "/":
                    result /= symbol - "0";
                    break;
                case "*":
                    result *= symbol - "0";
                    break;
                default:
                    break;
            }
        } else if (symbol === "+" || symbol === "-"
            || symbol === "/" || symbol === "*") {
            expressionOperator = symbol;
        }
        index += 1;
        symbol = expression[index];
    }

    console.log(result.toFixed(2));
}

xExpression(["4+6/5+(4*9-8)/7*2="]);
xExpression(["3+(6/5)+(2*3/7)*7/2*(9/4+4*1)="]);