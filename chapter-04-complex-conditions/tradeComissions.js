function commissions([town, sells]) {
    town = String(town).toLowerCase();
    sells = Number(sells);

    let commission = 0;

    if (0 <= sells && sells <= 500) {
        if (town === "sofia") {
            commission = sells * 0.05;
        } else if (town === "varna") {
            commission = sells * 0.045;
        } else if (town === "plovdiv") {
            commission = sells * 0.055;
        }
    } else if (500 < sells && sells <= 1000) {
        if (town === "sofia") {
            commission = sells * 0.07;
        } else if (town === "varna") {
            commission = sells * 0.075;
        } else if (town === "plovdiv") {
            commission = sells * 0.08;
        }
    } else if (1000 < sells && sells <= 10000) {
        if (town === "sofia") {
            commission = sells * 0.08;
        } else if (town === "varna") {
            commission = sells * 0.10;
        } else if (town === "plovdiv") {
            commission = sells * 0.12;
        }
    } else if (sells > 10000) {
        if (town === "sofia") {
            commission = sells * 0.12;
        } else if (town === "varna") {
            commission = sells * 0.13;
        } else if (town === "plovdiv") {
            commission = sells * 0.145;
        }
    }
    
    if (commission === 0 || sells < 0) {
        console.log("error");
    } else {
        console.log(`${commission.toFixed(2)}`);
    }
}

commissions(["Sofia", "1500"]);
commissions(["Plovdiv", "499.9"]);
commissions(["Kaspichan", "-50"]);