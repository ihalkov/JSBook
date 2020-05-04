function magicNumber([arg]) {
    const magicNum = parseInt(arg);
    let result = "";
    let d1, d2, d3, d4, d5, d6;

    d1 = 1;
    while (d1 <= 9) {
        d2 = 1;
        while (d2 <= 9) {
            d3 = 1;
            while (d3 <= 9) {
                d4 = 1;
                while (d4 <= 9) {
                    d5 = 1;
                    while (d5 <= 9) {
                        d6 = 1;
                        while (d6 <= 9) {
                            if (d1 * d2 * d3 * d4 * d5 * d6 === magicNum) {
                                result = result.concat(d1, d2, d3, d4, d5, d6, " ");
                            }
                            d6++;
                        }
                        d5++;
                    }
                    d4++;
                }
                d3++;
            }
            d2++;
        }
        d1++;
    }
    console.log(result);
}

magicNumber(["2"]);
magicNumber(["8"]);
magicNumber(["531441"]);