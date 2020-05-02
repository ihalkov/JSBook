function house(n) {
    n = parseInt(n);

    let roofSize = n / 2;
    let houseSize = n / 2;

    if (n % 2 === 1) {
        roofSize = Math.ceil(roofSize);
        houseSize = Math.floor(houseSize);
    }

    // roof
    function roof(n) {
    let stars = 1;
    if (n % 2 === 0) {
    stars++;
    }

    let dashes = (n - stars) / 2;

    for (let i = 1; i <= roofSize; i++) {
    let dashesStr = "-".repeat(dashes);
    let starsStr = "*".repeat(stars);

    let line = dashesStr + starsStr + dashesStr;
    console.log(line);
    dashes--;
    stars += 2;
    }
    }

    // house body
    function houseBody(n) {
    for (let row = 1; row <= houseSize; row++) {
        let line = "|" + "*".repeat(n - 2) + "|";
        console.log(line);
    }
    }

    roof(n);
    houseBody(n);
}

house(2);
house(3);
house(4);
house(5);
house(8);