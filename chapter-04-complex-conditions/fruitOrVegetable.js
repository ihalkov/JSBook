function fruitOrVegetable([product]) {
    let isFruit = product === "banana" || product === "apple" || product === "kiwi" || product === "cherry" || product === "lemon" || product === "grapes";
    let isVeggie = product === "tomato" || product === "cucumber" || product === "pepper" || product === "carrot";

    if (isFruit) {
        console.log("fruit");
    } else if (isVeggie) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}