function calcMoney([bitcoins, yuans, commission]) {
    bitcoins = parseInt(bitcoins);  // quantity of bitcoins
    yuans = parseFloat(yuans);  // yans
    commission = parseFloat((commission) / 100);

    // courses in BGN
    let bitcoinCourse = 1168; // in BGN
    let yuanCourse = 0.15; // in USD
    let dollarCourse = 1.76; // in BGN
    yuanCourse = parseFloat(yuanCourse * dollarCourse); // in BGN
    let euroCourse = 1.95; // in BGN

    
    if ((0 <= bitcoins <= 20) && (0.00 <= yuans <= 50000.00) && (0.00 <= commission <= 5.00)) {
        let bitcoinsInBgn = bitcoins * bitcoinCourse;
        let yuansInBgn = yuans * yuanCourse;
        let totalInBgn = bitcoinsInBgn + yuansInBgn;

        let totalInEur = totalInBgn / euroCourse;
        totalInEur = totalInEur - (totalInEur * commission);
        console.log(totalInEur.toFixed(2));
    }
}

calcMoney(["1", "5", "5"]);
calcMoney(["20", "5678", "2.4"]);
calcMoney(["7", "50200.12", "3"]);
calcMoney(["0", "0", "0"]);