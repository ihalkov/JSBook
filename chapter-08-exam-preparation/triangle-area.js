function triangleArea([x1, y1, x2, y2, x3, y3]) {
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    x3 = parseInt(x3);
    y3 = parseInt(y3);

    let h = Math.abs(y1 - y2);
    let a = Math.abs(x2 - x3);

    let area = (a * h) / 2;
    console.log(area);
}

triangleArea(["5", "-2", "6", "1", "1", "1"]);
triangleArea(["4", "1", "-1", "-3", "3", "-3"]);