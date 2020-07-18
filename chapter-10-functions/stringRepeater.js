function repeatString([str, count]) {
    let repeatedStr = "";
    count = parseInt(count);

    for (let i = 0; i < count; i+=1) {
        repeatedStr += str;
    }

    console.log(repeatedStr);
}

repeatString(["str", "2"]);
repeatString(["roki", "6"]);