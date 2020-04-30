function sumSeconds([arg1, arg2, arg3]) {
    let firstCompetitor = parseInt(arg1);
    let secondCompetitor = parseInt(arg2);
    let thirdCompetitor = parseInt(arg3);

    let seconds = firstCompetitor + secondCompetitor + thirdCompetitor;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);