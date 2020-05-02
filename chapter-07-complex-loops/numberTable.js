function numberTable([n]) {
    n = parseInt(n);

    for (let row = 0; row < n; row++) {
        let line = "";
        for (let col = 0; col < n; col++) {
            let num = row + col + 1;
            if (col > 0) {
                line += " ";
            }
            if (num > n) {
                num = 2 * n - num;
            }
            line += num;
        }        
        console.log(line);
    }
}

numberTable(["4"]);