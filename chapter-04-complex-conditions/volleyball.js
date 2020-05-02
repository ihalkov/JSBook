function playVolley([typeYear, holiday, weekendsTravel]) {
    holiday = parseInt(holiday);
    weekendsTravel = parseInt(weekendsTravel);

    let weekendsInSofia = 48 - weekendsTravel;
    let holidayPlay = holiday * (2 / 3);
    let weekendsPlay = (weekendsInSofia * (3 / 4)) + weekendsTravel;
    let totalPlay = holidayPlay + weekendsPlay;

    if (typeYear === "leap") {
        totalPlay = totalPlay + (totalPlay * 0.15);
    }
    console.log(Math.floor(totalPlay));
}

playVolley(["leap", "5", "2"]);
playVolley(["normal", "11", "6"]);
playVolley(["normal", "3", "2"]);
playVolley(["leap", "0", "1"]);