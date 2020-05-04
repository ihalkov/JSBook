function stopNumber([n, m, s]) {
    n = parseInt(n);
    m = parseInt(m);
    let stopNum = parseInt(s);
    let result = "";
    while (m >= n) {
        if (m % 2 === 0 && m % 3 === 0) {
            if (m === stopNum) {
                break;
            }
            result = result.concat(m, " ");
        }
        m--;
    }
    console.log(result);
}

stopNumber(["1", "30", "15"]);
stopNumber(["1", "36", "12"]);
stopNumber(["20", "1000", "36"]);