function drawStop([n]) {
    n = parseInt(n);

    let partHeight = n;

    let dots = n + 1;
    let underscores = (2 * n) + 1;
    let slashes = 2;

    let dotStr = ".".repeat(dots);
    let undStr = "_".repeat(underscores);
    let slashStr = "/".repeat(slashes);
    let backslashStr = "\\".repeat(slashes);

    let topBorder = `${dotStr}${undStr}${dotStr}`;
    console.log(topBorder);

    dots--;
    underscores -= 2;

    //top
    for (let row = 1; row <= partHeight; row++) {
        dotStr = ".".repeat(dots);
        undStr = "_".repeat(underscores);

        let line = `${dotStr}${slashStr}${undStr}${backslashStr}${dotStr}`;
        console.log(line);
        dots--;
        underscores += 2;
    }

    // draw stop
    let sideUnds = (underscores - 5) / 2;
    dotStr = ".".repeat(dots);
    undStr = "_".repeat(sideUnds);

    let mid = `${dotStr}${slashStr}${undStr}STOP!${undStr}${backslashStr}${dotStr}`;
    console.log(mid);

    // bottom
    for (let row = 1; row <= partHeight; row++) {
        dotStr = ".".repeat(dots);
        undStr = "_".repeat(underscores);

        let line = `${dotStr}${backslashStr}${undStr}${slashStr}${dotStr}`;
        console.log(line);
        dots++;
        underscores -= 2;
    }
}