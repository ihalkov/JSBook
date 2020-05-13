function gradesStatistics(args) {
    let numOfStudents = Number(args[0]);

    let top = 0;
    let good = 0;
    let bad = 0;
    let fail = 0;

    let gradesTotal = 0;
    // avg for exam
    // boundary of grades % of all
    for (let i = 1; i <= numOfStudents; i++) {
        let grade = Number(args[i]);
        gradesTotal += grade;
        if (grade >= 5.00) {
            top++;
        } else if (grade >= 4.00) {
            good++;
        } else if (grade >= 3.00) {
            bad++;
        } else {
            fail++;
        }
    }

    let avg = (gradesTotal / numOfStudents).toFixed(2);
    let topPercent = ((top / numOfStudents) * 100).toFixed(2);
    let goodPercent = ((good / numOfStudents) * 100).toFixed(2);
    let badPercent = ((bad / numOfStudents) * 100).toFixed(2);
    let failPercent = ((fail / numOfStudents) * 100).toFixed(2);

    console.log(`Top students: ${topPercent}%`);
    console.log(`Between 4.00 and 4.99: ${goodPercent}%`);
    console.log(`Between 3.00 and 3.99: ${badPercent}%`);
    console.log(`Fail: ${failPercent}%`);
    console.log(`Average: ${avg}`);
}

gradesStatistics(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
gradesStatistics(["6", "2", "3", "4", "5", "6", "2.2"]);