function calcRadToDeg([rad]) {
    rad = Number(rad);
    let deg = rad * (180 / Math.PI);
    deg = Math.round(deg);
    console.log(deg);
    console.log("{0:f2}", deg);
}

calcRadToDeg([3.1416]);

// 1rad × 180/π = 57,296°
