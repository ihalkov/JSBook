function digits([num]) {
    num = parseInt(num);

    let d1 = Math.floor(num / 100);
    let d2 = Math.floor((num % 100) / 10);
    let d3 = num % 10;

    let rows = d1 + d2;    // rows
    let cols = d1 + d3;    // cols

    for (let row = 0; row < rows; row++) {
        let result = "";
        for (let col = 0; col < cols; col++) {
            if (num % 5 === 0) {
                num -= d1;
            } else if (num % 3 === 0) {
                num -= d2;
            } else {
                num += d3;
            }
            result += num + " ";
        }
        console.log(result);
    }
}

digits(["132"]);
digits(["376"]);