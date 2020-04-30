function updateTime([hour, mins]) {
    hour = parseInt(hour);
    mins = parseInt(mins);

    let newMins = mins + 15;

    if ((newMins > 59) && (hour < 23)) {
        hour++;
        newMins = newMins - 60;
    } else if ((newMins > 59) && (hour === 23)) {
        hour = 0;
        newMins = newMins - 60;
    }

    if (newMins < 10) {
        console.log(`${hour}:0${newMins}`);
    } else {
        console.log(`${hour}:${newMins}`);
    }
}

updateTime(["1", "46"]);
updateTime(["0", "01"]);
updateTime(["23", "59"]);
updateTime(["11", "08"]);
updateTime(["12", "49"]);