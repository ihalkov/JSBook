function priceForBouquet([h, r, t, season, holiday]) {
    h = parseInt(h);
    r = parseInt(r);
    t = parseInt(t);
    season = String(season).toLowerCase();
    holiday = String(holiday).toLowerCase();

    let chrysPrice = 2.00;
    let rosesPrice = 4.10;
    let tulipsPrice = 2.50;

    if (season === "autumn" || season === "winter") {
        chrysPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;
    }

    let totalPrice = (h * chrysPrice) + (r * rosesPrice) + (t * tulipsPrice);

    if (holiday === "y") {
        totalPrice = totalPrice + (totalPrice * 0.15);
    }

    let totalFlowers = h + r + t;
    if (t > 7 && season === "spring") {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }

    if (r >= 10 && season === "winter") {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }

    if (totalFlowers > 20) {
        totalPrice = totalPrice - (totalPrice * 0.20);
    }

    totalPrice += 2;
    console.log(totalPrice.toFixed(2));
}

priceForBouquet(["2", "4", "8", "Spring", "Y"]);
priceForBouquet(["3", "10", "9", "Winter", "N"]);
priceForBouquet(["10", "10", "10", "Autumn", "N"]);