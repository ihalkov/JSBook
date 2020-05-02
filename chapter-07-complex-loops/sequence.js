function sequence([n]) {
    n = parseInt(n);
    let num = 1;

    while (num <= n) {
        console.log(num);
        num = num * 2 + 1;
    }
}

sequence(["20"]);

// 1 3 7 15