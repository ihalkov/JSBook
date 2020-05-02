function vowelsSum([args]) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        let char = args[i];
        switch (char) {
            case "a":
                sum += 1;
            break;
            case "e":
                sum += 2;
            break;
            case "i":
                sum += 3;
            break;
            case "o":
                sum += 4;
            break;
            case "u":
                sum += 5;
            break;
            default:
                break;
        }
    }
    console.log(sum);
}

vowelsSum(["hello"]);
vowelsSum(["hi"]);
vowelsSum(["bamboo"]);
vowelsSum(["beer"]);


