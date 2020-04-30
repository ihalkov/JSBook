function calcArea([figure, arg1, arg2]) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    let area = 0;

    if (figure === "square") {
        let a = arg1;
        area = a * a;    
    } else if (figure === "rectangle") {
        let a = arg1;
        let b = arg2;
        area = a * b;
    } else if (figure === "circle") {
        let r = arg1;
        area = Math.PI * r * r;
    } else if (figure === "triangle") {
        let a = arg1;
        let h = arg2;
        area = (a * h) / 2;
    }

    console.log(Number(area.toFixed(3)));
}

calcArea(["square", "5"]);
calcArea(["rectangle", "7", "2.5"]);
calcArea(["circle", "6"]);
calcArea(["triangle", "4.5", "20"]);