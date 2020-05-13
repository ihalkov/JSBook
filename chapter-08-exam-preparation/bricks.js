function bricks([numBricks, workers, cartCapacity]) {
    numBricks = parseInt(numBricks);
    workers = parseInt(workers);
    cartCapacity = parseInt(cartCapacity);

    let courses = numBricks / (workers * cartCapacity);
    console.log(Math.ceil(courses));
}

bricks(["120", "2", "30"]);
bricks(["355", "3", "10"]);
bricks(["5", "12", "30"]);