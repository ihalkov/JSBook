function triangleOfDollars(n) {
    n = parseInt(n);

    for (let row = 1; row <= n; row++) {
        let dollar = "$";
        for (let col = 1; col < row; col++) { // num cols depends on row
            dollar += " $";
        }
        console.log(dollar);
    }
}

triangleOfDollars(3);