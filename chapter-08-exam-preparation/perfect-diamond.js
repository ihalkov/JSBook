function perfectDiamond([n]) {
    n = parseInt(n);

    let height = (2 * n) - 1;
    let topHeight = Math.ceil(height / 2);

    let bottomHeight = height - topHeight;
    let stars = 1;
    let spaces = n - stars;

    let top = " ".repeat(spaces) + "*" + " ".repeat(spaces);
    console.log(top);
    
    let result = "";
    // top
    for (let row = 1; row < topHeight; row++) {
        spaces--;
        result = " ".repeat(spaces) + "*" + "-*".repeat(row) + " ".repeat(spaces);
        console.log(result);
    }

    // bottom
    for (let row = bottomHeight; row > 1; row--) {
        spaces++;
        result = " ".repeat(spaces) + "*" + "-*".repeat(row - 1) + " ".repeat(spaces);
        console.log(result);
    }

    if (n > 1) {
        console.log(top);
    }
}

perfectDiamond(["1"]);
perfectDiamond(["2"]);
perfectDiamond(["3"]);
perfectDiamond(["4"]);
perfectDiamond(["5"]);