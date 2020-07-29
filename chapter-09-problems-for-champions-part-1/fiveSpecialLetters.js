function fiveSpecialLetters([arg1, arg2]) {
    let begin = parseInt(arg1);
    let end = parseInt(arg2);


// remove repeating letters
function removeRepeats(input) {
    let inputLength = 5;
    let newStr = "";
    
    for (let i = 0; i < inputLength; i++) {
        let isSame = false;
        for (let j = 0; j < newStr.length; j++) {
            if (input[i] === newStr[j]) {
                isSame = true;
            }       
        }
        
        if (!isSame) {
            newStr += input[i];
            isSame = false;
        }
    }
    return newStr;
}

// calcWeight
function calcWeight(sequence) {
    let letterWeight = 0;
    let letter = "";
    let totalWeight = 0;
    let multiplier = 1;

    for (let i = 0; i < sequence.length; i++) {
        letter = sequence[i];

        switch (letter) {
        case "a":
            letterWeight = 5;
            break;
        case "b":
            letterWeight = -12;
            break;
        case "c":
            letterWeight = 47;
            break;
        case "d":
            letterWeight = 7;
            break;
        case "e":
            letterWeight = -32;
            break;
        default:
            break;
        }

        totalWeight += multiplier * letterWeight;
        multiplier++;
    }
    return totalWeight;
}

function showOutput() {
    // a = 97 ascii to e = 101
let asciiNumA = 97;
let asciiNumE = 101;
let output = "";
let isNo = true;

for (let i1 = asciiNumA; i1 <= asciiNumE; i1++) {
    for (let i2 = asciiNumA; i2 <= asciiNumE; i2++) {
        for (let i3 = asciiNumA; i3 <= asciiNumE; i3++) {
            for (let i4 = asciiNumA; i4 <= asciiNumE; i4++) {
                for (let i5 = asciiNumA; i5 <= asciiNumE; i5++) {
                    let input = String.fromCharCode(i1) + String.fromCharCode(i2) + String.fromCharCode(i3) +
                    String.fromCharCode(i4) + String.fromCharCode(i5);
                    let sequence = removeRepeats(input); // bcd
                    let weightOfSequence = calcWeight(sequence);

                    if (weightOfSequence >= begin && weightOfSequence <= end) {
                        isNo = false;
                        output += input + " ";
                    }
                }
            }
        }
    }
}

if (isNo === true) {
    output = "No";
}

return output;
}

let output = showOutput();
console.log(output);
}