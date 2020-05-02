function fibonacci(n) {
    n = parseInt(n);

    let f0 = 1;
    let f1 = 1;
    let fn = 1;

    for (let i = 2; i <= n; i++) {
        fn = f0 + f1;
        f0 = f1;
        f1 = fn;
    }
    console.log(fn);
}

fibonacci(20);