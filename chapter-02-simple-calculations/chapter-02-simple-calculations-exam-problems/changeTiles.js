function changeTiles([playgroundLength, tileWidth, tileLength, benchWidth, benchLength]) {
    playgroundLength = parseInt(playgroundLength); //  int [1...100]

    tileWidth = parseFloat(tileWidth); // float [0.1...10.00]
    tileLength = parseFloat(tileLength); // float [0.1...10.00]

    benchWidth = parseInt(benchWidth); // int [0...10]
    benchLength = parseInt(benchLength); // int [0...10]
    
    if ((1 <= playgroundLength <= 100) && (0.1 <= (tileWidth && tileLength) <= 10.00) && (0 <= (benchWidth && benchLength) <= 10)) {
        let groundArea = playgroundLength * playgroundLength;
        let benchArea = benchWidth * benchLength;
        let areaToFill = groundArea - benchArea;
        let tileArea = tileWidth * tileLength;
        
        let tilesTotal = areaToFill / tileArea;
        let timeForChange = tilesTotal * 0.2;

        console.log(Number(tilesTotal.toFixed(2)));
        console.log(Number(timeForChange.toFixed(2)));
    }
}

changeTiles(["20", "5", "4", "1", "2"]);
changeTiles(["40", "0.8", "0.6", "3", "5"]);