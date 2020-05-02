function logistics(args) {
    let n = parseInt(args[0]);

    let microbusPrice = 200;
    let truckPrice = 175;
    let trainPrice = 120;

    let microbusTons = 0;
    let truckTons = 0;
    let trainTons = 0;

    let totalPrice = 0;

    for (let i = 1; i <= n; i++) {
        let currentLoad = parseInt(args[i]);

        if (currentLoad <= 3) {
            microbusTons += currentLoad;
            totalPrice += currentLoad * microbusPrice;
        } else if (currentLoad <= 11) {
            truckTons += currentLoad;
            totalPrice += currentLoad * truckPrice;
        } else {
            trainTons += currentLoad;
            totalPrice += currentLoad * trainPrice;
        }
    }
    let totalTons = microbusTons + truckTons + trainTons;
    let averageTonPrice = (totalPrice / totalTons).toFixed(2);
    let p1 = ((microbusTons / totalTons) * 100).toFixed(2);
    let p2 = ((truckTons / totalTons) * 100).toFixed(2);
    let p3 = ((trainTons / totalTons) * 100).toFixed(2);

    let output = `${averageTonPrice}\n${p1}%\n${p2}%\n${p3}%`;
    console.log(output);
}

logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);
logistics(["4", "53", "7", "56", "999"]);