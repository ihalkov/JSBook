function drawHat([n]) {
    n = parseInt(n);

    let width = (4 * n) + 1;
    let height = (2 * n) + 5;

    // hat top
    let dotsSide = (width - 3) / 2;
    console.log(".".repeat(dotsSide) + "/|\\" + ".".repeat(dotsSide));
    console.log(".".repeat(dotsSide) + "\\|/" + ".".repeat(dotsSide));

    // hat middle
    let midHeight = height - 5;
    for (let row = 0; row < midHeight; row++) {
        console.log(".".repeat(dotsSide) + "*" + "-".repeat(row) + "*" + "-".repeat(row) + "*" + ".".repeat(dotsSide));
        dotsSide--;
    }
    console.log("*".repeat(width));
    console.log("*.".repeat((width - 1) / 2) + "*");
    console.log("*".repeat(width));
}

drawHat(["4"]);
drawHat(["7"]);