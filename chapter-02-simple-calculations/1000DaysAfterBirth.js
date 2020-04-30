function thousandDays([dateString]) {
    //let dateString = "25-02-1995";
    let dateParts = dateString.split("-"); // show it like a array
    //console.log(dateParts);

    let d = dateParts[0];
    let m = dateParts[1];
    let y = dateParts[2];

    let strDate = y + "-" + m + "-" + d;
    //console.log(strDate);
    var date = new Date(strDate);
    //console.log(date);
    date.setDate(date.getDate() + 1000);


    d = date.getDate();
    m = date.getMonth() + 1;
    y = date.getFullYear();

    if(d < 10 && m > 9) {
        console.log(`0${d}-${m}-${y}`);
    } else if(d < 10 && m <= 9) {
        console.log(`0${d}-0${m}-${y}`);
    } else if(d >= 10 && m <= 9) {
        console.log(`${d}-0${m}-${y}`);
    } else {
        console.log(`${d}-${m}-${y}`);
    }
}

thousandDays(["09-02-1995"]);
thousandDays(["25-02-1995"]);
thousandDays(["07-11-2003"]);
thousandDays(["14-06-1980"]);
thousandDays(["01-01-2012"]);
thousandDays(["30-12-2002"]);