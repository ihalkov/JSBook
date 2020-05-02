function histogram(args) {
    let n = parseInt(args[0]); // numbers

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = parseInt(args[i]);

        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    // transform in percents
   p1 = ((p1 / n) * 100).toFixed(2);
   p2 = ((p2 / n) * 100).toFixed(2);
   p3 = ((p3 / n) * 100).toFixed(2);
   p4 = ((p4 / n) * 100).toFixed(2);
   p5 = ((p5 / n) * 100).toFixed(2);

   let output = `${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%`;

   console.log(output);
}
histogram(["3", "1", "2", "999"]);
histogram(["4", "53", "7", "56", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram([ "14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);