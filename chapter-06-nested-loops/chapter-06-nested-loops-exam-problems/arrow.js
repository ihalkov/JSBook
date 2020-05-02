function drawArrow([n]) {
    n = parseInt(n);

    let width = (n * 2) - 1;
    let height = width;
    let halfHeight = Math.floor(height / 2);

    let numSign = n;
    let dots = (width - numSign) / 2;

    // first row
    let numSignStr = "#".repeat(numSign);
    let dotStr = ".".repeat(dots);

    console.log(dotStr + numSignStr + dotStr);

    // body of arrow
    let midDots = width - (dots * 2) - 2;
    for (let row = 0; row < halfHeight - 1; row++) {
        let line = dotStr + "#" + ".".repeat(midDots) + "#" + dotStr;
        console.log(line);
    }

    // beginning of triangle
    numSign = (width - midDots) / 2;
    numSignStr = "#".repeat(numSign);
    console.log(numSignStr + ".".repeat(midDots) + numSignStr);

    // bottom of arrow
    dots = 1;
    midDots = (width - (dots * 2)) - 2;
    for (let row = 0; row < halfHeight - 1; row++) {
        dotStr = ".".repeat(dots);
        let line = dotStr + "#" + ".".repeat(midDots) + "#" + dotStr;
        console.log(line);
        dots++;
        midDots -= 2;
    }

    // last row
    console.log(".".repeat(dots) + "#" + ".".repeat(dots));
}