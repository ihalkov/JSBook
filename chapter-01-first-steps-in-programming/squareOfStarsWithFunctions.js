function solve([n]) {
    n = parseInt(n);
    function giveBorder(n) {
        let fullRow = "";
        let symbol = "*";
        
        for (let i = 0; i < n; i++) {
            fullRow += symbol;
        }
        
        console.log(fullRow);
        }
        
        // middle row
        function giveMiddle(n) {
            function giveRow(n) {
                let middleRow = "";
                let star = "*";
                let space = " ";
        
                for (let i = 1; i <= n; i++) {
                    if (i === 1) {
                        middleRow += star;
                    } else if (i === n) {
                        middleRow += star;
                    } else {
                        middleRow += space;
                    }
                }
                
                console.log(middleRow);
            }
    
            let rows = n - 2;
            for (let row = 0; row < rows; row++) {
                giveRow(n);
            }
        }
        
        giveBorder(n);
        giveMiddle(n);
        giveBorder(n);
}

solve([10]);