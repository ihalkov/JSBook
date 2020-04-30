function calcSleep([daysOff]) {
    daysOff = Number(daysOff);

    let workDays = 365 - daysOff;

    let timeNorm = 30000; // min yearly
    let playTime = (workDays * 63) + (daysOff * 127);
    let timeDiff = Math.abs(timeNorm - playTime); // min
    let hours = timeDiff / 60;
    hours = Math.trunc(hours);
    let mins = timeDiff % 60;

    if (playTime > timeNorm) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${mins} minutes more for play`);
    } else if (playTime < timeNorm) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${mins} minutes less for play`);
    }
}

calcSleep(["20"]);
calcSleep(["113"]);