function backToThePast([heritage, year]) {
    heritage = Number(heritage);
    year = parseInt(year);

    let age = 18;
    let yearInPast = 1800;
    let expenses = 0;

    for (let i = yearInPast; i <= year; i++) {
        if (i % 2 === 1) {
            age++;
            expenses += 12000 + (50 * age);
            age++;
        } else {
            expenses += 12000;
        }
    }
    let diff = Math.abs(heritage - expenses).toFixed(2);
    let output = `Yes! He will live a carefree life and will have ${diff} dollars left.`;

    if (expenses > heritage) {
        output = `He will need ${diff} dollars to survive.`;
    }
    console.log(output);
}

backToThePast(["50000", "1802"]);