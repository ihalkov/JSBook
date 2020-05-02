function drawFort(n) {
    n = parseInt(n);

let width = 2 * n;
let height = n;
let colWidth = Math.trunc(n / 2);

// roof
let towerTop = "/" + "^".repeat(colWidth) + "\\"; // here is two times \\ because 1st is escaping
let mid = width - (colWidth + 2) * 2;
let midTop = "_".repeat(mid);

let roof = towerTop + midTop + towerTop;
console.log(roof);

// body
let line = "|" + " ".repeat(width - 2) + "|";
let bodyHeight = height - 2;

for (let row = 1; row < bodyHeight; row++) {
    console.log(line);
}

// last line of body
let sideSpaces = " ".repeat(colWidth + 1);
line = "|" + sideSpaces + midTop + sideSpaces + "|";

console.log(line);

// bottom
let towerBottom = "\\" + "_".repeat(colWidth) + "/";
sideSpaces = " ".repeat(mid);
let bottom = towerBottom + sideSpaces + towerBottom;
console.log(bottom);
}

drawFort(3);
drawFort(4);
drawFort(5);
drawFort(8);