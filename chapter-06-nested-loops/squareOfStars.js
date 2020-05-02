function squareOfStars(n) {
    n = parseInt(n);
    for (let row = 1; row <= n; row++) {
        let stars = "*";
        
        for (let col = 1; col < n; col++) {
            stars += " *";
        }
        console.log(stars);
    }
}

squareOfStars(2);
squareOfStars(3);