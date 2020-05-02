function factorial([n]) {
    n = parseInt(n);

    let product = 1;

    do {
        product *= n;
        n--;
    } while (n > 1);
        console.log(product);
}