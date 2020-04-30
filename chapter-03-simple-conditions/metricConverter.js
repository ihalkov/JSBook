function convertUnits([number, entryUnit, exitUnit]) {
    number = parseFloat(number);
    
    entryUnit = entryUnit.toLowerCase();  // to lowercase
    exitUnit = exitUnit.toLowerCase();

    // unit to 1m
    let meters = 1;
    let millimeters = 1000;
    let centimeters = 100;
    let miles = 0.000621371192;
    let inches = 39.3700787;
    let kilometers = 0.001;
    let foots = 3.2808399;
    let yards = 1.0936133;

    let entryInMetres;
    let result;

    entryInMetres = convertEntryUnit([entryUnit]);
    result = convertExitUnit([exitUnit, entryInMetres]);

    console.log(result);





    function convertEntryUnit([entryUnit]) {
        if(entryUnit === "m") {
            entryInMetres = number / meters;
        } else if(entryUnit === "mm") {
            entryInMetres = number / millimeters;
        } else if(entryUnit === "cm") {
            entryInMetres = number / centimeters;
        } else if(entryUnit === "mi") {
            entryInMetres = number / miles;
        } else if(entryUnit === "in") {
            entryInMetres = number / inches;
        } else if(entryUnit === "km") {
            entryInMetres = number / kilometers;
        } else if(entryUnit === "ft") {
            entryInMetres = number / foots;
        } else if(entryUnit === "yd") {
            entryInMetres = number / yards;
        }
        return entryInMetres;
    }

    function convertExitUnit([exitUnit, entryInMetres]) {
        if(exitUnit === "m") {
            result = entryInMetres * meters;
        } else if (exitUnit === "mm") {
            result = entryInMetres * millimeters;
        } else if (exitUnit === "cm") {
            result = entryInMetres * centimeters;
        } else if (exitUnit === "mi") {
            result = entryInMetres * miles;
        } else if (exitUnit === "in") {
            result = entryInMetres * inches;
        } else if (exitUnit === "km") {
            result = entryInMetres * kilometers;
        } else if (exitUnit === "ft") {
            result = entryInMetres * foots;
        } else if (exitUnit === "yd") {
            result = entryInMetres * yards;
        }
        return result;
    }
}

convertUnits(["12", "KM", "FT"]);
convertUnits(["150", "Mi", "iN"]);
convertUnits(["450", "yd", "KM"]);