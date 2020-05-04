function specialNumbers([arg]) {
    let num = parseInt(arg);
    
    let maxNum = 9999;
    let minNum = 1111;

    let result = "";
    while (minNum <= maxNum) {
        let specialNum = "" + minNum;
        let i = 0;
        let temp = "";
        let currentDivider = "";
        while (i < specialNum.length) {
            currentDivider = parseInt(specialNum[i]);
            if (num % currentDivider === 0) {
                temp += currentDivider;
            }
            i++;
        }
        if (temp === specialNum) {
            result += temp + " ";
        }
        minNum++;
    }
    console.log(result);
}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);