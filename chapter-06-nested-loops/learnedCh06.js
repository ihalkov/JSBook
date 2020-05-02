console.log("*".repeat(10));
// В някои уеб браузъри еднаквите резултати в конзолата се сливат в един.
// Ако все пак стигнете до този случай, можете да добавите знак за нов ред \n на края на метода за отпечатване:

function drawSquare(n) {
    for (let i = 1; i <= n; i++) {
        let stars = "";

        for (let j = 1; j <= n; j++) { // inside loop will do "n" times
            stars += "*";
        }
        console.log(stars);
    }
}

drawSquare(5);

// for (let col = 1; col < row; col++) { // num cols depends on row

// Comment Code Block Ctrl+K+C (comment)
// Ctrl+K+U (uncomment)

// debugging with F10

// how many times a will be printed
let a = 5;

for (let i = 1; i < a; i++) {
    // print value of a
    i++;
}

// какви са стойностите на следните променливи "a" и "b" след изпълнение на
// следните команди? let a = 5, let b = 13, console.log(++a) console.log(b++);
// Отговор: 6 и 14


/*
\ е специален символ в езика JavaScript и използвайки само него в метода console.log(…),
конзолата няма да го разпечата, затова с \\ показваме на конзолата, че искаме да отпечатаме
точно този символ, без да се интерпретира като специален (екранираме го, на английски се нарича
“character escaping”).
*/

// a lot variables can make the code ugly

// when write something test it immediately

// interpolation only on one row, if press enter computer will print it
console.log(`same row 
new row`);