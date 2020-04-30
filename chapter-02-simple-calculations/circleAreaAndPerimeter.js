function calculateAreaPerimeter([r]) {
    r = Number(r);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(area);
    console.log(perimeter);
}