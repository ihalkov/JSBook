function equalWords([word1, word2]) {
    // we make the words to lowercase because is not case sensitive so
    word1 = String(word1).toLowerCase();
    word2 = String(word2).toLowerCase();

    if (word1 === word2) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

equalWords(["Hello", "Hello"]);
equalWords(["SoftUni", "softuni"]);
equalWords(["Soft", "Uni"]);
equalWords(["beer", "vodka"]);
equalWords(["HeLlo", "hELLo"]);