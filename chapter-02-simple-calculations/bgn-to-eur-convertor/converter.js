function eurConverter() {
    let bgn = document.getElementById("bgn").value; // here we get the value of the bgn input
    let eur = (bgn / 1.95583).toFixed(2);   // here is the logic
    document.getElementById("euro").value = eur;    // here we assign value of the equation to the box with id="euro"
}