function powersOfTwo([n]) {
    n = parseInt(n);
    let num = 1;
    for (let i = 0; i <= n; i++) {
        console.log(num);
        num *= 2;
    }
}

powersOfTwo(["2"]);
powersOfTwo(["10"]);