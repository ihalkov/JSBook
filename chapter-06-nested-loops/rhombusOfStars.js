function rhombusOfStars(numOfStars) {
    numOfStars = parseInt(numOfStars);

    // top part
    for (let row = 1; row <= numOfStars; row++) {
        let line = "";
        for (let col = 1; col <= numOfStars - row; col++) {    // spaces
            line += " ";
        }
        line += "*";

        
        for (let col = 1; col < row; col++) {    // star
            line += " *";
        }
        console.log(line);
    }

    // bottom part
    for (let row = 1; row < numOfStars; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) { // space
            line += " ";
        }
        line += "*";
    
        for (let col = numOfStars - 1; col > row; col--) { // stars
            line += " *";
        }
        console.log(line);
    }
    
}

rhombusOfStars(4);