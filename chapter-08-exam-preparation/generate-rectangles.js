function generateRectangles([n, m]) {
    n = parseInt(n);
    m = parseInt(m); // min area of rect

    let rectCount = 0;

    for (let left = -n; left < n; left++) {
        for (let top = -n; top < n; top++) {
            for (let right = left + 1; right <= n; right++) {
                for (let bottom = top + 1; bottom <= n; bottom++) {
                        let area = Math.abs(right - left) * Math.abs(bottom - top);
                        if (area >= m) {
                            console.log('(' + left + ', ' + top + ') (' +
                            right + ', ' + bottom + ') -> ' + area
                            );
                            rectCount++;
                        }
                    }
                }
            }
        }
    if (rectCount === 0) {
        console.log("No");
}
}
    
generateRectangles(["2", "0"]);
generateRectangles(["1", "2"]);
generateRectangles(["2", "17"]);
generateRectangles(["3", "36"]);