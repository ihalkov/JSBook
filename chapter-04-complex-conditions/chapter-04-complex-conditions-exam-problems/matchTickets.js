function matchTickets([budget, category, numPeople]) {
    budget = Number(budget);
    numPeople = parseInt(numPeople);
    category = String(category).toLowerCase();

    let transport = 0;
    let ticketsPrice = 0;
    let percentForTransport = 0;
    let singleTicket = 249.99;

    if (category === "vip") {
        singleTicket = 499.99;
    }

    if (numPeople <= 4) {
        percentForTransport = 0.75;
    } else if (numPeople <= 9) {
        percentForTransport = 0.60;
    } else if (numPeople <= 24) {
        percentForTransport = 0.50;
    } else if (numPeople <= 49) {
        percentForTransport = 0.40;
    } else if (numPeople >= 50) {
        percentForTransport = 0.25;
    }
    transport = budget * percentForTransport;
    ticketsPrice = numPeople * singleTicket;
    let budgetLeft = budget - (transport + ticketsPrice);
    let output = `Yes! You have ${budgetLeft.toFixed(2)} leva left.`;
    
    if (budgetLeft < 0) {
        output = `Not enough money! You need ${Math.abs(budgetLeft).toFixed(2)} leva.`;
    }
    console.log(output);
}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);