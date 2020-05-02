function shop([product, town, quantity]) {
    town = String(town).toLowerCase();
    product = String(product).toLowerCase();
    quantity = Number(quantity);

    let result = 0;

    if (town === "sofia") {
        if (product === "coffee") {
            result = (quantity * 0.5).toFixed(2);
        } else if (product === "water") {
            result = (quantity * 0.8).toFixed(2);
        } else if (product === "beer") {
            result = (quantity * 1.2).toFixed(2);
        } else if (product === "sweets") {
            result = (quantity * 1.45).toFixed(2);
        } else if (product === "peanuts") {
            result = (quantity * 1.6).toFixed(2);
        }
    } else if (town === "plovdiv") {
        if (product === "coffee") {
            result = (quantity * 0.4).toFixed(2);
        } else if (product === "water") {
            result = (quantity * 0.7).toFixed(2);
        } else if (product === "beer") {
            result = (quantity * 1.15).toFixed(2);
        } else if (product === "sweets") {
            result = (quantity * 1.3).toFixed(2);
        } else if (product === "peanuts") {
            result = (quantity * 1.5).toFixed(2);
        }
    } else if (town === "varna") {
        if (product === "coffee") {
            result = (quantity * 0.45).toFixed(2);
        } else if (product === "water") {
            result = (quantity * 0.7).toFixed(2);
        } else if (product === "beer") {
            result = (quantity * 1.1).toFixed(2);
        } else if (product === "sweets") {
            result = (quantity * 1.35).toFixed(2);
        } else if (product === "peanuts") {
            result = (quantity * 1.55).toFixed(2);
        }
    }
    console.log(result);
}

shop(["coffee", "Varna", "2"]);
shop(["beer", "Sofia", "6"]);
shop(["peanuts", "Plovdiv", "1"]);
shop(["water", "Plovdiv", "3"]);