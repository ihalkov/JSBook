function chaseMouse() {
    let img = document.getElementById("image");
    img.style.position = "absolute";
    img.style.left = (Math.random() * 1300) + "px";
    img.style.top = (Math.random() * 680) + "px";
}

function catchMouse() {
    alert("Congratulations, You Win!")
}