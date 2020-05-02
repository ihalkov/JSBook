function exam([arg1, arg2, arg3, arg4]) {
    let examHours = Number(arg1);
    let examMinutes = Number(arg2);
    let arrivalHours = Number(arg3);
    let arrivalMinutes = Number(arg4);

    let late = "Late";
    let onTime = "On time";
    let early = "Early";

    let examTime = (examHours * 60) + examMinutes;
    let arrivalTime = (arrivalHours * 60) + arrivalMinutes;

    let totalMinutesDifference = arrivalTime - examTime;

    // default is late, to cut one else check
    console.log(Math.abs(~~(totalMinutesDifference / 60)));
}

exam(["9", "30", "9", "50"]);
exam(["9", "00", "8", "30"]);
exam(["14", "00", "13", "55"]);