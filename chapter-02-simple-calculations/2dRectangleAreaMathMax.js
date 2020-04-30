function calcRectAreaPerimeter([x1, y1, x2, y2]) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    let a = Math.max(x1, x2) - Math.min(x1, x2); // let a = Math.abs(x2 - x1);
    let b = Math.max(y1, y2) - Math.min(y1, y2); // let b = Math.abs(y2 - y1);
    let area = a * b;
    let perimeter = 2 * (a + b);

    console.log(area);
    console.log(perimeter);
}