var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodygradient");


function changeBackground() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = "background: " + body.style.background + ";";
}

// Checking color changes
color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

