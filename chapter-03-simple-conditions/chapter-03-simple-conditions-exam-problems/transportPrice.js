function calcCheapestPrice([distance, dayOrNight]) {
    distance = parseInt(distance);
    let cheapestPrice = 0;

    if ((1 <= distance) && (distance <= 5000)) {
       if (distance >= 100) {
           cheapestPrice = distance * 0.06;
       } else if (distance >= 20) {
        cheapestPrice = distance * 0.09;
       } else if (dayOrNight === "day") {
        cheapestPrice = distance * 0.79;
        cheapestPrice += 0.70;
       } else if (dayOrNight === "night") {
        cheapestPrice = distance * 0.90;
        cheapestPrice += 0.70;
       }
       console.log(cheapestPrice);
    }
}

calcCheapestPrice(["5", "day"]);
calcCheapestPrice(["7", "night"]);
calcCheapestPrice(["25", "day"]);
calcCheapestPrice(["180", "night"]);
