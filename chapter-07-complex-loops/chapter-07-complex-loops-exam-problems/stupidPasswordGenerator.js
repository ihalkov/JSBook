function passwordGenerator([arg1, arg2]) {
    let n = parseInt(arg1);
    let l = parseInt(arg2);
    let pass = "";

    for (let i = 1; i < n; i++) {
        let symbol1 = i;
        for (let i = 1; i < n; i++) {
            let symbol2 = i;
            for (let i = 97; i < l + 97; i++) {
                let symbol3 = String.fromCharCode(i);
                for (let i = 97; i < l + 97; i++) {
                    let symbol4 = String.fromCharCode(i);
                    for (let i = Math.max(symbol1, symbol2) + 1; i <= n; i++) { // found max between 1st two, then add one till <= n
                        let symbol5 = i;
                        pass += `${symbol1}${symbol2}${symbol3}${symbol4}${symbol5} `;
                        
                    }
                }
            }
        }
    }
    console.log(pass);
}

passwordGenerator(["2", "4"]);
passwordGenerator(["3", "1"]);
passwordGenerator(["3", "2"]);
passwordGenerator(["4", "2"]);