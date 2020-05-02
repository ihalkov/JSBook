function trip([budget, season]) {
    budget = Number(budget);
    season = String(season).toLowerCase();

    let destination = "";
    let toSpend = 0;
    let str = "";
    let placeToStay = "";

    /* Спрямо това как си подредим логическата схема (в какъв ред ще обхождаме граничните стойности),
        ще имаме повече или по-малко проверки в условията. Помислете защо! 
    */
    if (budget >= 10) {
        if (budget <= 100) {
            destination = "Bulgaria";
            placeToStay = "Hotel";
            toSpend = budget * 0.7;
            //Винаги можем да инициализираме дадена стойност на параметъра
            // и след това да направим само една проверка. Това ни спестява една логическа стъпка.
            if (season === "summer") {  
                placeToStay = "Camp";
                toSpend = budget * 0.3;
            } 
                str = `Somewhere in ${destination}`;
                str += `\n${placeToStay} - ${toSpend.toFixed(2)}`;
        } else if (budget <= 1000) {
            destination = "Balkans";
            placeToStay = "Hotel";
            toSpend = budget * 0.8;

            if (season === "summer") {
                placeToStay = "Camp";
                toSpend = budget * 0.4;
            } 

                str = `Somewhere in ${destination}`;
                str += `\n${placeToStay} - ${toSpend.toFixed(2)}`;
        } else {
            destination = "Europe";
            toSpend = budget * 0.9;

            str = `Somewhere in ${destination}`;
            str += `\nHotel - ${toSpend.toFixed(2)}`; 
    }
}
    console.log(str);
}

trip(["50", "summer"]);
trip(["75", "winter"]);
trip(["312", "summer"]);
trip(["678.53", "winter"]);
trip(["1500", "summer"]);