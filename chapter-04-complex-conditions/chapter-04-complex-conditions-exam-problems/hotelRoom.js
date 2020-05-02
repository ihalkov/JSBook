function hotelRoom([month, nights]) {
    month = String(month).toLowerCase();
    nights = parseInt(nights);

    let studioPrice = 0;
    let apartmentPrice = 0;
    let totalStudio = 0;
    let totalApartment = 0;

    switch (month) {
        case "may":
        case "october":
            studioPrice = 50;
            apartmentPrice = 65;

            totalStudio = nights * studioPrice;
            totalApartment = nights * apartmentPrice;

            if (nights > 14) {
                totalStudio *= 0.70;  // 30% discount
                totalApartment *= 0.90; // 10% discount
            } else if (nights > 7) {
                totalStudio *= 0.95;  // 5% discount
            }
            break;
        case "june":
        case "september":
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            totalStudio = nights * studioPrice;
            totalApartment = nights * apartmentPrice;

            if (nights > 14) {
                totalStudio *= 0.80;  // 20% discount
                totalApartment *= 0.90; // 10% discount
            }
            break;
        case "july":
        case "august":
            studioPrice = 76;
            apartmentPrice = 77;

            totalStudio = nights * studioPrice;
            totalApartment = nights * apartmentPrice;

            if (nights > 14) {
                totalApartment *= 0.90; // 10% discount
            }
            break;
        default:
            break;
    }
    let apartmentInfo = `Apartment: ${totalApartment.toFixed(2)} lv.`;
    let studioInfo = `Studio: ${totalStudio.toFixed(2)} lv.`;

    console.log(apartmentInfo);
    console.log(studioInfo);
}

hotelRoom(["may", "15"]);
hotelRoom(["june", "14"]);
hotelRoom(["august", "20"]);