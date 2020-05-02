function calcProfit([typeProjection, rows, cols]) {
    rows = parseInt(rows);
    cols = parseInt(cols);

    let profit = 0;

    switch (typeProjection) {
        case "Premiere":
            profit = (rows * cols) * 12.00;
            console.log(profit.toFixed(2));
            break;
        case "Normal":
            profit = (rows * cols) * 7.50;
            console.log(profit.toFixed(2));
            break;
        case "Discount":
            profit = (rows * cols) * 5.00;
            console.log(profit.toFixed(2));
            break;    
    
        default:
            break;
    }
}