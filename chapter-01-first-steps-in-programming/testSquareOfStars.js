function squareFrame([arg]){
    let n = Number(arg);
    console.log("*" + "*".repeat(n-2) + "*"); // "".repeat(n-2) - repeat string number of times
    for (let i = 0; i < n-2; i++) {
        console.log("*" + " ".repeat(n-2) + "*");
    }
    console.log("*" + "*".repeat(n-2) + "*");
}
squareFrame([3]);
squareFrame([4]);
squareFrame([5]);