function solve([length, height]) {
    const a = parseFloat(length);
    const b = parseFloat(height);

    function getTriangleArea(a, b) {
        return (a * b) / 2;
    }

    const area = getTriangleArea(a, b);
    console.log(area);
}

