function currencyToCurrency([amount, entry, exit]) {
        let bgnToEntry = bgnToCurrency([amount, entry]);
        let bgnToExit = bgnToCurrency([amount, exit]);
        let result = amount / (bgnToEntry / bgnToExit);
        result = Number(result);
        console.log(result.toFixed(2));
}

function bgnToCurrency([amount, exit]) { // if entry === BGN
    amount = Number(amount);
    let convert = 1;
    if(exit === "USD") {
        course = 1.79549;
        convert = amount / course;
    } else if(exit === "EUR") {
        course = 1.95583;
        convert = amount / course; // 1 bgn to eur
    } else if(exit === "GBP") {
        course = 2.53405;
        convert = amount / course;
    }
    convert = Number(convert.toFixed(2));
    return convert;
}

currencyToCurrency(["150.35", "USD", "EUR"]);
currencyToCurrency(["1", "USD", "GBP"]);
currencyToCurrency(["1", "GBP", "USD"]);