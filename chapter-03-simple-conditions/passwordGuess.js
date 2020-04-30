function checkPassword([pass]) {
    if(pass === "s3cr3t!P@ssw0rd") {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}

checkPassword(["qwerty"]);
checkPassword(["s3cr3t!P@ssw0rd"]);
checkPassword(["s3cr3t!p@ss"]);