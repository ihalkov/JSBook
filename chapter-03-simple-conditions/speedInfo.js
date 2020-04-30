function checkSpeed([speed]) {
    speed = parseFloat(speed);
    let message = "";

    if (speed <= 10) {
        message = "slow";
    } else if ((10 < speed) && (speed <= 50)) {
        message = "average";
    } else if ((speed > 50) && (speed <= 150)) {
        message = "fast";
    } else if ((speed > 150) && (speed <= 1000)) {
        message = "ultra fast";
    } else {
        message = "extremely fast";
    }
    console.log(message);
}

checkSpeed(["8"]);
checkSpeed(["49.5"]);
checkSpeed(["126"]);
checkSpeed(["160"]);
checkSpeed(["3500"]);