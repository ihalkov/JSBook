function pointOnSegment(first, second, point) {
    first = parseInt(first);
    second = parseInt(second);
    point = parseInt(point);

    let left = Math.min(first, second);
    let right = Math.max(first, second);

    let distanceLeft = Math.abs(left - point);
    let distanceRight = Math.abs(right - point);

    let minDist = Math.min(distanceLeft, distanceRight);

    let output = "Out";
    if (point >= left && point <= right) {
        output = "In";
    }
    
    console.log(output);
    console.log(minDist);
}