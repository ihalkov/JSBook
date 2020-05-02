function smartLilly([age, washingMachinePrice, toyPrice]) {
    age = parseInt(age);
    washingMachinePrice = Number(washingMachinePrice);
    toyPrice = parseInt(toyPrice);

    let toysCount = 0;
    let moneyFromBirthdays = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyFromBirthdays += 10 * i/2;
            moneyFromBirthdays--;
        } else {
            toysCount++;
        }
    }
    
    let toysProfit = (toysCount * toyPrice);
    let savedMoney = toysProfit + moneyFromBirthdays;
    let moneyLeft = Math.abs(savedMoney - washingMachinePrice).toFixed(2);

    let output = `Yes! ${moneyLeft}`;

    if (washingMachinePrice > savedMoney) {
        output = `No! ${moneyLeft}`;
    }
    console.log(output);
}

smartLilly(["21", "1570.98", "3"]);