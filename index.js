var i = 0;
var z = 0;
var display = document.querySelector(".display");

function increment() {
    i++;
    document.querySelector("h2#count-el").innerHTML = "" + i;
}

function increment5() {
    i = i + 5;
    document.querySelector("h2#count-el").innerHTML = "" + i;
}

function increment10() {
    i = i + 10;
    document.querySelector("h2#count-el").innerHTML = "" + i;
}

function incrementMinus() {
    i = i - 1;
    document.querySelector("h2#count-el").innerHTML = "" + i;
}

function incrementMinus5() {
    i = i - 5;
    document.querySelector("h2#count-el").innerHTML = "" + i;
}

function incrementMinus10() {
    i = i - 10;
    document.querySelector("h2#count-el").innerHTML = "" + i;
}

function save() {
    z = z + 1;
    display.innerHTML = display.innerHTML + " (" + z + ") " + i + "<br>";
}