function pointInTheFigure([h, x, y]) {
    h = parseInt(h);
    x = parseInt(x);
    y = parseInt(y);

    function rectangle1([h, x, y]) {
        let x1 = 0;
        let y1 = 0;
        let x2 = 3 * h;
        let y2 = h;
    
        let inside = x > x1 && x < x2 && y > y1 && y < y2;
        let borderLR = (x === x1 || x === x2) && (y >= y1 && y <= y2); // if both borders are true, we have a corner :D
        let borderTB = (y === y1 || y === y2) && (x >= x1 && x <= x2);
        let border = borderLR || borderTB;
    
        let result = "";
    
        if (inside === true) {
            result = "inside";
        } else if (border === true) {
            result = "border";
        } else {
            result = "outside";
        }
       return result;
    }

    function rectangle2([h, x, y]) {
        let x1 = h;
        let y1 = 0;
        let x2 = 2 * h;
        let y2 = 4 * h;
    
        let inside = x > x1 && x < x2 && y > y1 && y < y2;
        let borderLR = (x === x1 || x === x2) && (y >= y1 && y <= y2); // if both borders are true, we have a corner :D
        let borderTB = (y === y1 || y === y2) && (x >= x1 && x <= x2);
        let border = borderLR || borderTB;
    
        let result = "";
    
        if (inside === true) {
            result = "inside";
        } else if (border === true) {
            result = "border";
        } else {
            result = "outside";
        }
       return result;
    }

    let fig1 = rectangle1([h, x, y]);
    let fig2 = rectangle2([h, x, y]);

    if (fig1 === "inside" || fig2 === "inside") {
        console.log("inside");
    } else if (fig1 === "border" || fig2 === "border") {
        console.log("border");
    } else {
        console.log("outside");
    }
}



pointInTheFigure(["2", "3", "10"]);
pointInTheFigure(["2", "2", "2"]);
pointInTheFigure(["2", "0", "6"]);
pointInTheFigure(["15", "29", "37"]);
pointInTheFigure(["15", "-4", "7"]);
console.log();
pointInTheFigure(["2", "3", "1"]);
pointInTheFigure(["2", "6", "0"]);
pointInTheFigure(["15", "13", "55"]);
pointInTheFigure(["15", "37", "18"]);
pointInTheFigure(["15", "30", "0"]);