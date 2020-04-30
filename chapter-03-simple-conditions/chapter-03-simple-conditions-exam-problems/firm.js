function firm([hours, days, employees]) {
    hours = parseInt(hours);
    days = parseInt(days);
    employees = parseInt(employees);

    let hoursDaily = 8;
    let overHours = 2;

    let study = days * 0.1; // 10% of the days
    let workdays = days - study;
    let totalHours = (hoursDaily + overHours) * workdays * employees;
    let hoursDiff = Math.abs(hours - totalHours);

    if (totalHours < hours) {
        console.log(`Not enough time!${Math.floor(hoursDiff)} hours needed.`);
    } else {
        console.log(`Yes!${Math.floor(hoursDiff)} hours left.`);
    }
}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);