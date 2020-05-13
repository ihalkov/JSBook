function dateAfter5Days([d, m]) {
    d = parseInt(d);
    m = parseInt(m);

    let days = 31;
    switch (m) {
            // 28 days
        case 2: days = 28;
            break;
        // 30 days
        case 4:
        case 6:
        case 9:
        case 11: days = 30;
            break;
    }

    let futureDay = d + 5;
    let result = "";
    if (futureDay > days) {
        if (m === 12) {
            m = 0;
        }
        m++;
        futureDay -= days;
    }

    result = `${futureDay}.${m}`;

    if (m < 10) {
        result = `${futureDay}.0${m}`;
    }
    console.log(result);
}

dateAfter5Days(["28", "03"]);
dateAfter5Days(["27", "12"]);
dateAfter5Days(["25", "1"]);
dateAfter5Days(["26", "02"]);