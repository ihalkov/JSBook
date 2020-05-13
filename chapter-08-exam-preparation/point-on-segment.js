function pointOnSegment([first, second, point]) {
    first = parseInt(first);
    second = parseInt(second);
    point = parseInt(point);

    // Math.min(first, second)
    // Math.max(first, second)
    if (first > second) {
        let oldFirst = first;
        first = second;
        second = oldFirst;
    }

    let distLeft = Math.abs(point - first);
    let distRight = Math.abs(point - second);
    // minDistance = Math.min(distanceLeft, distanceRight);
    let shortDist = distRight;
    if (distRight > distLeft) {
        shortDist = distLeft;
    }

    let result = "Out";
    if (point >= first && point <= second) {
        result = "In";
    }
    console.log(result);
    console.log(shortDist);
}

pointOnSegment(["10", "5", "7"]);
pointOnSegment(["8", "10", "5"]);
pointOnSegment(["1", "-2", "3"]);