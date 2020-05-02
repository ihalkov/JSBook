function greatestCommonDivisor([a, b]) {
    a = parseInt(a);
    b = parseInt(b);

    while (b !== 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    }
    console.log(a);
}

greatestCommonDivisor(["24", "16"]);