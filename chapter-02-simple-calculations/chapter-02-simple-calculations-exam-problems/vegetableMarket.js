function giveTurnoverInEur([veggiesPrice, fruitsPrice, veggiesKg, fruitsKg]) {
    veggiesPrice = parseFloat(veggiesPrice); // veggies BGN per kg
    fruitsPrice = parseFloat(fruitsPrice); // fruits BGN per kg

    veggiesKg = parseInt(veggiesKg);
    fruitsKg = parseInt(fruitsKg);

    if (0 <= (veggiesPrice && fruitsPrice && veggiesKg && fruitsKg) <= 1000) {
        let veggiesTurnover = veggiesPrice * veggiesKg;
        let fruitsTurnover = fruitsPrice * fruitsKg;

        let totalBgn = veggiesTurnover + fruitsTurnover;
        let course = 1.94;
        let totalEur = totalBgn / course;
        console.log(totalEur);
    }
}

giveTurnoverInEur(["0.194", "19.4", "10", "10"]);
giveTurnoverInEur(["1.5", "2.5", "10", "10"]);