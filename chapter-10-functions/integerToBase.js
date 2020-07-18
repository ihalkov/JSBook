function solve([number, base]) {
    number = parseInt(number);
    base = parseInt(base);
    function integerToBase() {
        let result = "";
        while (number !== 0) {
            result += number % base;
            number = Math.floor(number / base);
        }
        function turnTheString(str) {
            let turnedString = "";
            for (let i = str.length - 1; i >= 0; i-=1) {
                turnedString += str[i];
            }
            return turnedString;
        }
        return turnTheString(result);
    }
    console.log(integerToBase());
}

solve(["3", "2"]);
solve(["4", "4"]);
solve(["9", "7"]);