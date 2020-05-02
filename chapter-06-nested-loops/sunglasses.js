function sunglasses(n) {
    n = parseInt(n);

    // top
    function topBot(n) {
        let line = "";
        function side(n) {
            for (let row = 1; row <= 2 * n; row++) {
                line += "*";
            }
            
        }
        function mid(n) {
            for (let row = 1; row <= n; row++) {
                line += " ";
            }
        }
        side(n);
        mid(n);
        side(n);
        console.log(line);
    }

    // middle
    function middle(n) {
        n = parseInt(n);
        
        function midSide(n) {
            let line = "*";
                for (let col = 2; col < n * 2; col++) {
                    line += "/";
                }
                line += "*";
            return line;
        }
        
        let line = "";
        for (let i = 1; i <= n - 2; i++) {
            line = midSide(n);
            if (i === Math.ceil((n - 2) / 2)) {
                line += "|".repeat(n);
            } else {
                line += " ".repeat(n);
            }
            line += midSide(n);
             console.log(line);
        }


    }
        
    // bottom
    function topBot(n) {
        let line = "";
        function side(n) {
            for (let row = 1; row <= 2 * n; row++) {
                line += "*";
            }
            
        }
        function mid(n) {
            for (let row = 1; row <= n; row++) {
                line += " ";
            }
        }
        side(n);
        mid(n);
        side(n);
        console.log(line);
    }

    topBot(n);
    middle(n);
    topBot(n);
}

sunglasses(3);
sunglasses(4);
sunglasses(5);