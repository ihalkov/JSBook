function dailyProfit([daysWork, moneyPerDay, course]) {
    daysWork = parseInt(daysWork); // days work per month
    moneyPerDay = parseFloat(moneyPerDay); // working day
    course = parseFloat(course); // usd to bgn

    let bonus = 2.5; // 2.5 monthly payments per year
    let taxes = 25; // 25% of income
    taxes = taxes / 100;

    if((5 <= daysWork <= 30) && (10.00 <= moneyPerDay <= 2000.00) && (0.99 <= course <= 1.99)) {
        let monthlySalary = daysWork * moneyPerDay;
        let yearlyBonus = bonus * monthlySalary;
        
        let yearlySalary = (monthlySalary * 12) + yearlyBonus;

        let yearlySalaryNetto = yearlySalary - (yearlySalary * taxes);
        let totalIncomeBgn = yearlySalaryNetto * course;

        let avgMoneyPerDay = totalIncomeBgn / 365;
        console.log(avgMoneyPerDay.toFixed(2));
    }
}

dailyProfit(["21", "75.00", "1.59"]);
dailyProfit(["15", "105", "1.71"]);
dailyProfit(["22", "199.99", "1.50"]);