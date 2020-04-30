function calcBonus([points]) {
    points = parseInt(points);

    let bonusPoints = 0;
    let totalPoints = 0;

    if (points < 100) {
        bonusPoints = 5;
    } else if ((100 < points) && (points <= 1000)) {
        bonusPoints = 0.2 * points;
    } else if (points > 1000) {
        bonusPoints = 0.1 * points;
    }

    // is even +1 pt
    if (points % 2 === 0) {
        bonusPoints += 1;
    }

    if (points % 10 === 5) {
        bonusPoints += 2;
    }
    totalPoints = bonusPoints + points;
    console.log(bonusPoints);
    console.log(totalPoints);
}


calcBonus(["2703"]);
calcBonus(["15785"]);