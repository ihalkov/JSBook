function pointInFigure([x, y]) {
    x = parseInt(x);
    y = parseInt(y);

    let x1 = 2;
    let y1 = -3;
    let x2 = 12;
    let y2 = 1;

    let rect1 = (x1 <= x) && (x <= x2) && (y1 <= y) && (y <= y2);

    let x3 = 4;
    let y3 = -5;
    let x4 = 10;
    let y4 = 3;

    let rect2 = (x3 <= x) && (x <= x4) && (y3 <= y) && (y <= y4);

    let result = "";
    if (rect1 || rect2) {
        result = "In";
    } else {
        result = "Out";
    }
    console.log(result);
}

pointInFigure(["8", "-5"]);
pointInFigure(["6", "-3"]);
pointInFigure(["11", "-5"]);
pointInFigure(["11", "2"]);