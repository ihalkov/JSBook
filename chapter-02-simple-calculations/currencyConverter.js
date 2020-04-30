function convertCurrency([amount, entryNotes, exitNotes]) {
    amount = Number(amount);

    if (entryNotes === "BGN" && exitNotes === "BGN") {
        console.log(Number(amount.toFixed(2)));
    } else if(entryNotes !== "BGN" && exitNotes === "BGN") {
        currencyToBgn([amount, entryNotes]);
    } else if (entryNotes === "BGN" && exitNotes !== "BGN") {
        let result = bgnToCurrency([amount, exitNotes]);
        console.log(Number(result.toFixed(2)));
    } else if (entryNotes !== "BGN" && exitNotes !== "BGN") {
        currencyToCurrency([amount, entryNotes, exitNotes]);
    }


function currencyToBgn([amount, entry]) { // if exit === BGN
    let convert;
    let course;
    if(entry === "USD") {
        course = 1.79549;
    } else if(entry === "EUR") {
        course = 1.95583;
    } else if(entry === "GBP") {
        course = 2.53405;
    }
    amount = Number(amount);
    course = Number(course);
    convert = amount * course;
    console.log(Number(convert.toFixed(2)));
}

function bgnToCurrency([amount, exit]) { // if entry === BGN
    amount = Number(amount);
    let convert;
    let course;
    if(exit === "USD") {
        course = 1.79549;
    } else if(exit === "EUR") {
        course = 1.95583;
    } else if(exit === "GBP") {
        course = 2.53405;
    }
    amount = Number(amount);
    course = Number(course);
    convert = amount / course;
    convert = Number(convert.toFixed(2));
    return convert;
}

function currencyToCurrency([amount, entry, exit]) {
    amount = Number(amount);
    let bgnToEntry = bgnToCurrency([amount, entry]);
    let bgnToExit = bgnToCurrency([amount, exit]);
    let result = amount / (bgnToEntry / bgnToExit);
    result = Number(result);
    console.log(Number(result.toFixed(2)));
}
}

convertCurrency(["100", "BGN", "BGN"]);
convertCurrency(["100", "BGN", "USD"]);
convertCurrency(["100", "BGN", "EUR"]);
convertCurrency(["100", "BGN", "GBP"]);
console.log();
convertCurrency(["100", "EUR", "EUR"]);
convertCurrency(["100", "EUR", "BGN"]);
convertCurrency(["100", "EUR", "USD"]);
convertCurrency(["100", "EUR", "GBP"]);
console.log();
convertCurrency(["100", "USD", "BGN"]);
convertCurrency(["100", "USD", "EUR"]);
convertCurrency(["100", "USD", "GBP"]);
convertCurrency(["100", "USD", "USD"]);
console.log();
convertCurrency(["100", "GBP", "BGN"]);
convertCurrency(["100", "GBP", "EUR"]);
convertCurrency(["100", "GBP", "USD"]);
convertCurrency(["100", "GBP", "GBP"]);




