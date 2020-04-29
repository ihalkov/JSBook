function solve([n]) {
    let border = "";
    let middle = "";
    
    for (let i = 0; i < n; i++) {
        border += "*";
    }
    
    console.log(border);
    
    for (let i = 0; i < n; i++) {
       if (i === 0 || i === (n-1)) {
        middle += "*";
       } else {
           middle += " ";
       }
    }
    for (let i = 0; i < (n - 2); i++) {
        console.log(middle);
    }
    console.log(border);
}

solve([10]);