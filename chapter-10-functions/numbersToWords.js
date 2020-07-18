function solve(args) {
    let n = parseInt(args[0]);
    let result = "";

    function letterSize(num) {
        num = parseInt(num);
        if (num > 999) {
            return "too large";
        }
        if (num < -999) {
            return "too small";
        }

        let output = "";
        if (num < 0) {
            output = "minus ";
        }
        function numToDigits(num) {
            num = Math.abs(num);
            let d1 = Math.floor(num / 100) % 10;
            let d2 = Math.floor(num / 10) % 10;
            let d3 = Math.floor(num % 10);
            return [d1, d2, d3];
        }

        let [d1, d2, d3] = numToDigits(num);
        if (d1 === 0) {
            return "";
        }
        function checkHundreds(d1) {
            let result = "";
            if (d1 > 0) {
                switch (d1) {
                    case 1:
                        result = "one-hundred";
                        break;
                    case 2:
                        result = "two-hundred";
                        break;
                    case 3:
                        result = "three-hundred";
                        break;
                    case 4:
                        result = "four-hundred";
                        break;
                    case 5:
                        result = "five-hundred";
                        break;
                    case 6:
                        result = "six-hundred";
                        break;
                    case 7:
                        result = "seven-hundred";
                        break;
                    case 8:
                        result = "eight-hundred";
                        break;
                    case 9:
                        result = "nine-hundred";
                        break;
                    default:
                        break;
                }
            }

            if ((d2 !== 0 || d3 !== 0) && d1 > 0) {
                result += " and ";
            }
            return result;
        }

        function checkTens(d2) {
            let result = "";
            if (d2 === 1) {
                switch (d3) {
                    case 0:
                        result = "ten";
                        break;
                    case 1:
                        result = "eleven";
                        break;
                    case 2:
                        result = "twelve";
                        break;
                    case 3:
                        result = "thirteen";
                        break;
                    case 4:
                        result = "fourteen";
                        break;
                    case 5:
                        result = "fifteen";
                        break;
                    case 6:
                        result = "sixteen";
                        break;
                    case 7:
                        result = "seventeen";
                        break;
                    case 8:
                        result = "eighteen";
                        break;
                    case 9:
                        result = "nineteen";
                        break;
                    default:
                        break;
                }
            }
            if (d2 > 1) {
                switch (d2) {
                    case 2:
                        result = "twenty";
                        break;
                    case 3:
                        result = "thirty";
                        break;
                    case 4:
                        result = "forty";
                        break;
                    case 5:
                        result = "fifty";
                        break;
                    case 6:
                        result = "sixty";
                        break;
                    case 7:
                        result = "seventy";
                        break;
                    case 8:
                        result = "eighty";
                        break;
                    case 9:
                        result = "ninety";
                        break;
                    default:
                        break;
                }
                if (d3 > 0) {
                    result += " ";
                }
            }
            return result;
        }

        function checkUnits(d3) {
            let result = "";
            if (d3 > 0 && d2 !== 1) {
                switch (d3) {
                    case 1:
                        result = "one";
                        break;
                    case 2:
                        result = "two";
                        break;
                    case 3:
                        result = "three";
                        break;
                    case 4:
                        result = "four";
                        break;
                    case 5:
                        result = "five";
                        break;
                    case 6:
                        result = "six";
                        break;
                    case 7:
                        result = "seven";
                        break;
                    case 8:
                        result = "eight";
                        break;
                    case 9:
                        result = "nine";
                        break;
                    default:
                        break;
                }
            }
            return result;
        }
        output += "" + checkHundreds(d1) + checkTens(d2) + checkUnits(d3);
        return output;
    }

    printAll();

    function printAll() {
        for (let i = 1; i <= n; i += 1) {
            result = letterSize(parseInt(args[i]));
            console.log(result);
        }
    }
}

solve(["3", "999", "-420", "1020"]);
solve(["2", "15", "350"]);
solve(["4", "311", "418", "509", "-9945"]);
solve(["3", "500", "123", "9"]);

solve(["5", "418"]);
solve(["5", "509"]);
solve(["5", "-9945"]);
solve(["5", "999"]);
solve(["5", "-420"]);
solve(["5", "15"]);
solve(["5", "350"]);
solve(["5", "500"]);
solve(["5", "123"]);
solve(["5", "9"]);