function checkNumbersEquality([num1, num2, num3]) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    
    if ((num1 === num2) && (num2 === num3)) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

checkNumbersEquality(["5", "5", "5"]);
checkNumbersEquality(["5", "4", "5"]);
checkNumbersEquality(["1", "2", "3"]);