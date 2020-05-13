function changeTiles([savedMoney, width, length, a, h, tilePrice, workmanPrice]) {
    savedMoney = Number(savedMoney);
    width = Number(width);
    length = Number(length);
    a = Number(a);
    h = Number(h);
    tilePrice = Number(tilePrice);
    workmanPrice = Number(workmanPrice);

    // floor rectangle
    let floorArea = width * length;

    // tiles triangle
    let tilesArea = (a * h) / 2;

    let tiles = Math.ceil(floorArea / tilesArea) + 5;

    let totalMoney = (tiles * tilePrice) + workmanPrice;
    let moneyDiff = Math.abs(savedMoney - totalMoney).toFixed(2);

    let output = `${moneyDiff} lv left.`
    if (savedMoney < totalMoney) {
        output = `You'll need ${moneyDiff} lv more.`;
    }
    console.log(output);
}

changeTiles(["500", "3", "2.5", "0.5", "0.7", "7.80", "100"]);
changeTiles(["1000", "5.55", "8.95", "0.90", "0.85", "13.99", "321"]);