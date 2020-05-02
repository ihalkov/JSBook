function christmasTree([n]) {
    n = parseInt(n);

    for (let row = 0; row <= n; row++) {
        let stars = "*".repeat(row);
        let spaces = " ".repeat(n - row);
        let body = " | ";

        let line = spaces + stars + body + stars + spaces;
        console.log(line);
    }
}

christmasTree(["1"]);