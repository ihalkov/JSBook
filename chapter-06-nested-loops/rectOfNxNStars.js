function rectOfNxNStars(n) {
    n = parseInt(n);
    for (let row = 1; row <= n; row++) {
        let star = "";
        for (let col = 1; col <= n; col++) {
            star += "*";
        }
        console.log(star);
    }
}

rectOfNxNStars(5);
rectOfNxNStars(10);