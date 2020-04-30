function convert(){
    let x = document.getElementById("cash-input").value; // here we get the value of the 1st input
    let e = document.getElementById("currency-options"); // here we call element with currency options
    let selected = e.options[e.selectedIndex].text; // call the selected option
    let result;
  
    if (selected === "EUR") {
        result = x + " " + "лв. = " + (x / 1.95583).toFixed(2) + " " + selected; // calc the result + adding the selected option as text
        document.getElementById("result").value = result;   // add the result to green input element
    } else if (selected === "USD") {
        result = x + " " + "лв. = " + (x / 1.63760).toFixed(2)  + " " + selected;
        document.getElementById("result").value = result;
    } else if (selected === "GBP") {
        result = x + " " + "лв. = " + (x / 2.22920).toFixed(2)  + " " + selected;
        document.getElementById("result").value = result;
    }
  }