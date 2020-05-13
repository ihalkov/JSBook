function increasing4Numbers([a, b]) {
    a = parseInt(a)
    b = parseInt(b);

    for (let n1 = a; n1 <= b - 3; n1++) {
        for (let n2 = n1 + 1; n2 <= b - 2; n2++) {
            for (let n3 = n2 + 1; n3 <= b - 1; n3++) {
                for (let n4 = n3 + 1; n4 <= b; n4++) {
                    console.log(`${n1} ${n2} ${n3} ${n4}`);
                }
            }
        }
    }

    if (b - a < 3) {
        console.log("No");
    }
}

increasing4Numbers(["3", "7"]);
increasing4Numbers(["15", "20"]);
increasing4Numbers(["5", "7"]);
increasing4Numbers(["10", "13"]);