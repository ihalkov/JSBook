function solve([arg1, arg2, arg3]) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);

    function getMin(a, b) {
        if (a <= b) {
            return a;
        }
        return b;
    }

    let resultFirstTwo = getMin(num1, num2);
    let min = getMin(resultFirstTwo, num3);
    console.log(min);
}

solve(["1", "2", "3"]);
solve(["-100", "-101", "-102"]);