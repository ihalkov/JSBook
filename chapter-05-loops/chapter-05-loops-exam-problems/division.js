function division(args) {
    let n = parseInt(args[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = parseInt(args[i]);

        if (currentNum % 2 === 0) {
            p1++;
        }

        if (currentNum % 3 === 0) {
            p2++;
        }

        if (currentNum % 4 === 0) {
            p3++;
        }
    }

    p1 = ((p1 / n) * 100).toFixed(2);    
    p2 = ((p2 / n) * 100).toFixed(2);
    p3 = ((p3 / n) * 100).toFixed(2);

    let output = `${p1}%\n${p2}%\n${p3}%`;
    console.log(output);
}

division(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
division(["3", "3", "6", "9"]);
division(["1", "12"]);