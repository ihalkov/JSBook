function solve(messageInfo) {

    function printEqualSigns(str) {
        console.log("=".repeat(str.length));
    }
    function headingMessage(messageType, operation) {
        if (messageType === "success") {
            return `Successfully executed ${operation}.`;
        } else if (messageType === "warning") {
            return `Warning: ${operation}.`;
        } else if (messageType === "error") {
            return `Error: Failed to execute ${operation}.`;
        }
    }
    function showSuccessMessage(messageType, operation, message) {
        let str = headingMessage(messageType, operation);
        console.log(str);
        printEqualSigns(str);
        console.log(message + ".");
    }
    function showWarningMessage(messageType, message) {
        let str = headingMessage(messageType, message);
        console.log(str);
        printEqualSigns(str);
    }
    function showErrorMessage(messageType, operation, message, errorCode) {
        let str = headingMessage(messageType, operation);
        console.log(str);
        printEqualSigns(str);
        function printReason(message) {
            console.log(`Reason: ${message}.`);
        }
        function printErrorCode(errorCode) {
            console.log(`Error code: ${errorCode}.`);
        }
        printReason(message);
        printErrorCode(errorCode);
    }
    function processMessage(messageInfo) {
        let n = parseInt(messageInfo[0]);
        let messageType = "";
        let index = 1;
        let count = 0;

        while (index < messageInfo.length) {
            messageType = messageInfo[index];
            let operation = "";
            let message = "";
            function printMessage() {
                if (messageType === "success") {
                    operation = messageInfo[index + 1];
                    message = messageInfo[index + 2];
                    showSuccessMessage(messageType, operation, message);
                    index += 3;
                } else if (messageType === "warning") {
                    message = messageInfo[index + 1];
                    showWarningMessage(messageType, message);
                    index += 2;
                } else if (messageType === "error") {
                    operation = messageInfo[index + 1];
                    message = messageInfo[index + 2];
                    let errorCode = messageInfo[index + 3];
                    showErrorMessage(messageType, operation, message, errorCode);
                    index += 4;
                }
            }
            function printEmptyRow() {
                count += 1;
                if (count !== n) {
                    console.log("");
                }
            }
            printMessage();
            printEmptyRow();
        }
    }
    processMessage(messageInfo);
}

solve(["4", "error", "credit card purchase", "Invalid customer address",
        "500", "warning", "Email not confirmed", "success", "user registration",
        "User registered successfully", "warning", "Customer has not email assigned"]);