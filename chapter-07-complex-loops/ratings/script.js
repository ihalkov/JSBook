/*
  drawRating, рисува HTML, който е нужен за визуализацията на звездичките
  @param {Number} rating
  @return {String} html
 */

 function drawRating(rating) {
     let html = "";
     let allStars = 10;
     let fullStars = Math.floor(rating / allStars);
     let emptyStars = Math.floor((100 - rating) / allStars);
     let halfStars = allStars - fullStars - emptyStars;

     // building html
     for (let i = 0; i < fullStars; i++) {
         html += `<img src="images/full-star.png">`;
     }
     for (let i = 0; i < halfStars; i++) {
        html += `<img src="images/half-star.png">`;
    }
    for (let i = 0; i < emptyStars; i++) {
        html += `<img src="images/empty-star.png">`;
    }
    return html;
 }

function drawHandler() {
    // find input element, who keep the num with rating
    // takes its value
    let ratingInput = document.getElementById("input-rating");
    
    // by default all input values are coming like string
    // we will parse it to number
    let rating = parseInt(ratingInput.value);

    // find the element who keeps the stars
    let ratingHolder = document.getElementById("ratingHolder");

    // generate HTML with rating
    let html = drawRating(rating);

    // draw to the page
    ratingHolder.innerHTML = html;
}
// for initial run of our code
function appInit() {
    // find button element in html
    let button = document.getElementById("input-draw");

    // attach to "click" for execution of drawing
    button.addEventListener("click", drawHandler);

    // initial draw of rating
    drawHandler();
}

/**
 * Стартиране на приложението асинхронно, чрез "event listener".
 * Слушане за "DOMContentLoaded".
 */
document.addEventListener("DOMContentLoaded", appInit);