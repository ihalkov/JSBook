function harvestGrape([area, grape, liters, workers]) {
    area = parseInt(area);
    grape = Number(grape);
    grape = grape / 2.5;
    liters = parseInt(liters);
    workers = parseInt(workers);

    let wine = (area * 0.4) * grape; // liters of wine
    let wineDiff = Math.abs(wine - liters);

    if (wine < liters) {
        console.log(`It will be a tough winter! More ${Math.floor(wineDiff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineDiff)} liters left -> ${Math.ceil(wineDiff / workers)} liters per person.`);
    }
}

harvestGrape(["650", "2", "175", "3"]);
harvestGrape(["1020", "1.5", "425", "4"]);
