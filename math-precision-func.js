function getMathPrecision(decimalNum) {
    if (decimalNum.toString().indexOf('.') > 0) {
        decimalNum = Math.round(decimalNum * 1e15) / 1e15;
    }
    return decimalNum;
}

let number = 145.56546546545645648486186464864684;
let result = getMathPrecision(number);
console.log(result);

let x = 0.0000000001 * 0.00000000000000002;
result = getMathPrecision(x);
console.log(result);