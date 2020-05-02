function drawAxe([n]) {
    n = parseInt(n);

    let width = 5 * n;
    let height = 2 * n;

    if (n % 2 === 1) {
        height--;
    }

    let leftDashes = 3 * n;
    let midDashes = 0;
    let rightDashes = width - leftDashes - midDashes - 2;

    // top of axe
    let leftDashesStr = "-".repeat(leftDashes);
    for (let row = 0; row < n; row++) {
        console.log(leftDashesStr + "*" + "-".repeat(midDashes) + "*" + "-".repeat(rightDashes));
        midDashes++;
        rightDashes--;
    }

    // axe handle
    midDashes--;
    rightDashes++;
    let handleHeight = (height - n) / 2;

    for (let row = 0; row < handleHeight; row++) {
        let handle = "*".repeat(leftDashes + 1) + "-".repeat(midDashes) + "*" + "-".repeat(rightDashes);
        console.log(handle);
    }

    // bottom of axe
    let bottomHeight = height - n - handleHeight - 1;
    let bottomOfAxe = "";
    for (let row = 0; row < bottomHeight; row++) {
        bottomOfAxe = "-".repeat(leftDashes) + "*" + "-".repeat(midDashes) + "*" + "-".repeat(rightDashes);
        console.log(bottomOfAxe);
        leftDashes--;
        midDashes += 2;
        rightDashes--;
    }
    // last row
    let lastRow = "-".repeat(leftDashes) + "*" + "*".repeat(midDashes) + "*" + "-".repeat(rightDashes);
    console.log(lastRow);
}

    