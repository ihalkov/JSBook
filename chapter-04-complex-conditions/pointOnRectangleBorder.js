function pointOnBorder([x1, y1, x2, y2, x, y]) {
    x1 = Number(x1);    // x1 < x2 and y1 < y2
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    // point coordination
    x = Number(x);
    y = Number(y);

    let leftBorder = x === x1 && (y >= y1 && y <= y2);
    let rightBorder = x === x2 && (y >= y1 && y <= y2);

    let topBorder = y === y1 && (x >= x1 && x <= x2);
    let bottomBorder = y === y2 && (x >= x1 && x <= x2);

    if (leftBorder || rightBorder || topBorder || bottomBorder) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}