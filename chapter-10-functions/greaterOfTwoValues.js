function solve([formatType, input1, input2]) {

    function getGreater() {
        if (input1 >= input2) {
            return input1;
        }
        return input2;
    }

    if (formatType === "int") {
        input1 = parseInt(input1);
        input2 = parseInt(input2);
    }
    let greater = getGreater();
    console.log(greater);
}

solve(["int", "5", "10"]);
solve(["string", "10", "6"]);