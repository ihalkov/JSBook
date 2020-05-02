function exam([examHour, examMin, arrivalHour, arrivalMin]) {
    examHour = parseInt(examHour);
    examMin = parseInt(examMin);
    arrivalHour = parseInt(arrivalHour);
    arrivalMin = parseInt(arrivalMin);

    let examTime = (examHour * 60) + examMin;
    let arrivalTime = (arrivalHour * 60) + arrivalMin;

    let onTime = (arrivalTime >= (examTime - 30)) && (arrivalTime <= examTime); // till 30 min before
    let early = arrivalTime < (examTime - 30);
    let late = arrivalTime > examTime;

    let timeDiff = Math.abs(examTime - arrivalTime);

    let msg = "";
    if (onTime) {   // on time have only 30 min before the start
        msg = `On time`;
        if ((0 < timeDiff) && (timeDiff < 60)) {
            msg += `\n${timeDiff} minutes before the start`;
        }
    } else if (early) {
        msg = `Early`;
        if ((timeDiff) < 60) {
            msg += `\n${timeDiff} minutes before the start`;
        } else if (timeDiff >= 60) {
            let hour = timeDiff / 60;
            hour = Math.floor(hour);
            let min = timeDiff % 60;
            if (min < 10) {
                msg += `\n${hour}:0${min} hours before the start`;
            } else {
                msg += `\n${hour}:${min} hours before the start`;
            }
        }
    } else if (late) {
        msg = `Late`;
        if ((timeDiff) < 60) {
            msg += `\n${timeDiff} minutes after the start`;
        } else if (timeDiff >= 60) {
            let hour = timeDiff / 60;
            hour = Math.floor(hour);
            let min = timeDiff % 60;
            if (min < 10) {
                msg += `\n${hour}:0${min} hours after the start`;
            } else {
                msg += `\n${hour}:${min} hours after the start`;
            }
        }
    }
    console.log(msg);
}

exam(["9", "30", "9", "50"]);
exam(["9", "00", "8", "30"]);
exam(["14", "00", "13", "55"]);
console.log();
exam(["16", "00", "15", "00"]);
exam(["9", "00", "10", "30"]);
exam(["11", "30", "8", "12"]);
console.log();
exam(["10", "00", "10", "00"]);
exam(["11", "30", "10", "55"]);
exam(["11", "30", "12", "29"]);

