function diamond(n) {
    n = parseInt(n);

    function midTop(n) {
        let topSize = n / 2;
        let midDashes = 1;
    
        if (n % 2 === 1) {
            topSize = Math.ceil(topSize);
        } else {
            midDashes++;
        }
    
        let stars = 1;
        let dashes = (n - ((stars * 2) + midDashes)) / 2;
    
        for (let i = 2; i <= topSize; i++) {
        let dashesStr = "-".repeat(dashes);
        let starsStr = "*".repeat(stars);
        let midDashesStr = "-".repeat(midDashes);
    
        let line = dashesStr + starsStr + midDashesStr + starsStr + dashesStr;
        console.log(line);
        dashes--;
        midDashes += 2;
        }
    }
    
    function midBottom(n) {
        if (n > 4) {    
            let bottomSize = n / 2;
            let midDashes = n - 4;
        
            if (n % 2 === 1) {
                bottomSize = Math.floor(bottomSize);
                bottomSize--;
            } else {
                bottomSize -= 2;
            }
        
            let stars = 1;
            let dashes = (n - ((stars * 2) + midDashes)) / 2;
        
            for (let i = 1; i <= bottomSize; i++) {
                let dashesStr = "-".repeat(dashes);
                let starsStr = "*".repeat(stars);
                let midDashesStr = "-".repeat(midDashes);
        
                let line = dashesStr + starsStr + midDashesStr + starsStr + dashesStr;
                console.log(line);
                dashes++;
                midDashes -= 2;
            }
        }
    }
    
    
    function topBot(n) {
        let stars = 1;
        if (n % 2 === 0) {
            stars++;
        }
        let dashes = (n - stars) / 2;
        
        let dashesStr = "-".repeat(dashes);
        let starsStr = "*".repeat(stars);
        
        let topBot = dashesStr + starsStr + dashesStr;
        console.log(topBot);
    }
    
    topBot(n);
    midTop(n);
    midBottom(n);
    if (n > 2) {
        topBot(n);
    }
}



diamond(1);
diamond(2);
diamond(3);
diamond(4);
diamond(5);
diamond(6);
diamond(7);
diamond(8);
diamond(9);