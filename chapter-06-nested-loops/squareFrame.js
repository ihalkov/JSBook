function squareFrame(n) {
    n = parseInt(n);

    function topBot(n) {
        let topBotRow = "+";
        for (let topBot = 1; topBot <= n - 2; topBot++) {
        topBotRow += " -";
    }
    topBotRow += " +";

    console.log(topBotRow);
    }

    function middle(n) {
        for (let row = 1; row <= n - 2; row++) {
            let midRow = "|";
            for (let col = 1; col <= n - 2; col++) {
                midRow += " -";
            }
            midRow += " |";
            console.log(midRow);
        }
    }
    
    topBot(n);
    middle(n);
    topBot(n);
}

squareFrame(3);