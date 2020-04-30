function writeNumber([num]) {
    num = Number(num); // something with parseInt
    let msg = "";
    

    if ((0 <= num) && (num <= 100) && (num % 1 === 0)) {
    if (num === 100) {
        msg += "one hundred";
    }   

    // check for two digit number
    if ((num / 10) >= 2) {
        switch(Math.floor(num / 10)) {
            case 2:
                msg += "twenty";
                break;
            case 3:
                msg += "thirty";
                break;
            case 4:
                msg += "forty";
                break;
            case 5:
                msg += "fifty";
                break;
            case 6:
                msg += "sixty";
                break;
            case 7:
                msg += "seventy";
                break;
            case 8:
                msg += "eighty";
                break;
            case 9:
                msg += "ninety";
                break;
        }
    }

    if ((num < 10) || (num >= 20)) {
        if (num < 10) {
            num = num;
        } else if ((num % 10) != 0) {
            num = num % 10; // remainder if its two digit num
            msg += " ";
        } 
        switch (num) {
            case 0:
                msg += "zero";
                break;
            case 1:
                msg += "one";
                break;
            case 2:
                msg += "two";
                break;
            case 3:
                msg += "three";
                break;
            case 4:
                msg += "four";
                break;
            case 5:
                msg += "five";
                break;
            case 6:
                msg += "six";
                break;
            case 7:
                msg += "seven";
                break;
            case 8:
                msg += "eight";
                break;
            case 9:
                msg += "nine";
            default:
                break;
        }
    } 
    if ((num >= 10) && (num < 20)) {
        switch (num) {
            case 10:
                msg += "ten";
                break;
            case 11:
                msg += "eleven";
                break;
            case 12:
                msg += "twelve";
                break;
            case 13:
                msg += "thirteen";
                break;
            case 14:
                msg += "fourteen";
                break;
            case 15:
                msg += "fifteen";
                break;
            case 16:
                msg += "sixteen";
                break;
            case 17:
                msg += "seventeen";
                break;
            case 18:
                msg += "eighteen";
                break;
            case 19:
                msg += "nineteen";
                break;
        }
    }
    
} else {
    msg += "invalid number";
}
console.log(msg);
}

writeNumber([" "]);
//writeNumber(["-0"]);
//writeNumber(["dg0"]);
writeNumber(["100ff"]);
/*writeNumber(["false"]);
writeNumber(["undefined"]);
writeNumber(["NaN"]);
writeNumber(["null"]);*/

   /* writeNumber(["1"]);
    writeNumber(["100"]);
    writeNumber(["20"]);
    writeNumber(["21"]);
    writeNumber(["10"]);
    writeNumber(["11"]);
    writeNumber(["9"]);
    writeNumber(["0"]);
    writeNumber(["99.9"]);

writeNumber(["25"]);
writeNumber(["42"]);
writeNumber(["600"]); 
writeNumber(["1001"]);
writeNumber(["111"]);
writeNumber(["-1"]);
*/