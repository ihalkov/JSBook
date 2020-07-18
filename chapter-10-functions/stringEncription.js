function solve(args) {
    let n = parseInt(args[0]);
    function printEncryptedString() {
        let output = "";
        function encrypt(char) {
            function toAscii(char) {
                let asciiCode = char.charCodeAt(0).toString();
                return asciiCode;
            }
            let ascii = toAscii(char);
            function stickDigits(ascii) {
                let strLength = ascii.toString();
                strLength = strLength.length;
                let stickedString = ascii[0] + ascii[strLength - 1];
                return stickedString;
            }
            let sticked = stickDigits(ascii);
            function beginning() {
                let letterCode = parseInt(ascii) + parseInt(ascii[ascii.length - 1]);
                let letter = String.fromCharCode(letterCode);
                return letter;
            }
            let firstLetter = beginning();
            function end() {
                let letterCode = parseInt(ascii) - parseInt(ascii[0]);
                let letter = String.fromCharCode(letterCode);
                return letter;
            }
            let lastLetter = end();
            return firstLetter + sticked + lastLetter;
        }
        for (let i = 1; i <= n; i++) {
            output += encrypt(args[i]);
        }
        console.log(output);
    }
    printEncryptedString();
}

solve(["7", "S", "o", "f", "t", "U", "n", "i"]);
solve(["7", "B", "i", "r", "a", "H", "a", "x"]);