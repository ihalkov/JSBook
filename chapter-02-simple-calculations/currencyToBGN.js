function currencyToBgn([amount, entry]) { // if exit === BGN
    let convert = 1;
    let course = 0;
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
    console.log(convert.toFixed(2) + " BGN");
}

currencyToBgn([10, "USD"]);
currencyToBgn([10, "EUR"]);
currencyToBgn([10, "GBP"]);


