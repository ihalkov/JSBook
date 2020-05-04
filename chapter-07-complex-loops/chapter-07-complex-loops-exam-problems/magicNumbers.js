function magicNumber([arg]) {
    const magicNum = parseInt(arg);
    let result = "";

    for (let d1 = 1; d1 <= 9; d1++) {
        for (let d2 = 1; d2 <= 9; d2++) {
            for (let d3 = 1; d3 <= 9; d3++) {
                for (let d4 = 1; d4 <= 9; d4++) {
                    for (let d5 = 1; d5 <= 9; d5++) {
                        for (let d6 = 1; d6 <= 9; d6++) {
                            let product = d1 * d2 * d3 * d4 * d5 * d6;
                                if (product === magicNum) {
                                    result += `${d1}${d2}${d3}${d4}${d5}${d6}`;
                                    result += " ";
                                }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

magicNumber(["2"]);
magicNumber(["8"]);
magicNumber(["531441"]);