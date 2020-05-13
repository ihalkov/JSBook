function drawRectangle([num]) {
    num = parseInt(num);

    let height = num + 1;
    if (num % 2 === 1) {
        height++;
    }
    let width = 2 * num;
    let outSide = "%".repeat(width);
    console.log(outSide);
    // mid side
    let result = "";
    let rows = height - 2;
    let midRow = Math.floor(height / 2);

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= width; col++) {
            result = "%" + " ".repeat(width - 2) + "%";
            if (midRow === row) {
                result = "%" + " ".repeat((width - 4) / 2) + "*".repeat(2) + " ".repeat((width - 4) / 2) + "%"
            }
        }
        console.log(result);
    }
    console.log(outSide);
}

drawRectangle(["2"]);
drawRectangle(["3"]);
drawRectangle(["4"]);
drawRectangle(["5"]);