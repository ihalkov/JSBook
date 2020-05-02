function rhombus(n) {
    n = parseInt(n);
    
    let spacesLeft = n - 1;
    // top  
    for (let row = 0; row < n; row++) {
        console.log(" ".repeat(spacesLeft - row) + "* ".repeat(row + 1));
    }
    // bottom
    for (let row = 0; row < n - 1; row++) {
        console.log(" ".repeat(row) + " *".repeat(n - 1 - row));
    }
}