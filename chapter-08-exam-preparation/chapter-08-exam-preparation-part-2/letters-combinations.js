function printLetters([firstLetter, lastLetter, skipThisLetter]) {
    let l1 = String(firstLetter).charCodeAt(0);
    let l2 = String(lastLetter).charCodeAt(0);
    let l3 = String(skipThisLetter).charCodeAt(0);

    let result = "";
    let sum = 0;

    for (let x = l1; x <= l2; x++) {
        for (let y = l1; y <= l2; y++) {
            for (let z = l1; z <= l2; z++) {
                if (x !== l3 && y !== l3 && z !== l3) {
                    result += `${String.fromCharCode(x)}${String.fromCharCode(y)}${String.fromCharCode(z)} `;
                    sum++;
                }
            }
        
        }
    }
    console.log(result + sum);
}