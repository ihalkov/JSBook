function butterfly([n]) {
    n = parseInt(n);

    let width = (2 * n) - 1; // cols
    let height = 2 * (n - 2) + 1; // rows

    let sidesWidth = n - 1;

    // top
    let star = "*";
    let dash = "-";

    let starsRow = `${star.repeat(sidesWidth - 1)}\\ /${star.repeat(sidesWidth - 1)}`;
    let dashesRow = `${dash.repeat(sidesWidth - 1)}\\ /${dash.repeat(sidesWidth - 1)}`;

    let partHeight = (height - 1) / 2;

    for (let row = 0; row < partHeight; row++) {
        if (row % 2 === 0) {
            console.log(starsRow);
        } else {
            console.log(dashesRow);
        }
    }

    // mid
    console.log(" ".repeat(sidesWidth) + "@");
    // bottom
    starsRow = `${star.repeat(sidesWidth - 1)}/ \\${star.repeat(sidesWidth - 1)}`;
    dashesRow = `${dash.repeat(sidesWidth - 1)}/ \\${dash.repeat(sidesWidth - 1)}`;

    for (let row = 0; row < partHeight; row++) {
        if (row % 2 === 0) {
            console.log(starsRow);
        } else {
            console.log(dashesRow);
        }
    }
}