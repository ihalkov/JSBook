function calcWorkPlaces([l, w]) { // input in meters
    l = Number(l);
    w = Number(w);

    if(3 <= w && w <= l && l <= 100) {
        l = l * 100; // length in centimeters
        w = w * 100; // width in cm

        let placeLength = 120; // cm
        let placeWidth = 70; // cm
        let corridorWidth = 100; // cm

        let rows = l / placeLength;
        rows = Math.floor(rows);

        let placesOnRow = (w - corridorWidth) / placeWidth;
        placesOnRow = Math.floor(placesOnRow);

        let totalPlaces = (rows * placesOnRow) - 3; // 3 is places for entry door and department
        console.log(totalPlaces);
    }
}

calcWorkPlaces(["15", "8.9"]);
calcWorkPlaces(["8.4", "5.2"]);
calcWorkPlaces(["5", "8.5"]);
calcWorkPlaces(["100", "80"]);