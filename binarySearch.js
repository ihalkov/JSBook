let searchedNumber = -13;

let sortedNumbers = [1, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 25, 40, 42, 44, 53];
binarySearch();

function binarySearch(searchedNumber, sortedNumbers) {
    let arrayLength = sortedNumbers.length;
    let centerIndex = Math.floor(arrayLength / 2);
    let numberInCenter = sortedNumbers[centerIndex];

    if (searchedNumber < numberInCenter && centerIndex !== 0) {
        sortedNumbers.splice(centerIndex, arrayLength - 1);
        return binarySearch(searchedNumber, sortedNumbers);
    } else if (searchedNumber > numberInCenter && centerIndex !== 0) {
        sortedNumbers.splice(0, centerIndex);
        return binarySearch(searchedNumber, sortedNumbers);
    } else if (searchedNumber === numberInCenter) {
        return true;
    } else if (searchedNumber !== numberInCenter && centerIndex === 0) {
        return false;
    }
}

let result = binarySearch();
console.log(result);