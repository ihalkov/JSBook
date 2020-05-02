function numberPyramid([n]) {
    n = parseInt(n);
    let num = 1;

    for (let row = 1; row <= n; row++) {
        if (num <= n) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            if (col > 1) {
                line += " ";
            }
            line += num;
            num++;
            if (num > n) {
                break;
            }
        }
        console.log(line);
    }
    }
}

numberPyramid(["1"]);