// FOR FOOTER
// All variables for Footer
// Sports
var fFootball = document.getElementById("fFootball");
var fCricket = document.getElementById("fCricket");
var fTennis = document.getElementById("fTennis");
var fAthletics = document.getElementById("fAthletics");
var fGolf = document.getElementById("fGolf");
var fSwimming = document.getElementById("fSwimming");

// when user clicks on footer links then value will store in local storage and that particular sports will display
fFootball.addEventListener("click", () => {
    localStorage.setItem("value", 0)
})
fCricket.addEventListener("click", () => {
    localStorage.setItem("value", 1)
})
fTennis.addEventListener("click", () => {
    localStorage.setItem("value", 3)
})
fAthletics.addEventListener("click", () => {
    localStorage.setItem("value", 11)
})
fGolf.addEventListener("click", () => {
    localStorage.setItem("value", 6)
})
fSwimming.addEventListener("click", () => {
    localStorage.setItem("value", 10)
})


// Players
var fRonaldo = document.getElementById("fRonaldo");
var fTendulkar = document.getElementById("fTendulkar");
var fFederer = document.getElementById("fFederer");
var fBolt = document.getElementById("fBolt");
var fTiger = document.getElementById("fTiger");
var fMarquez = document.getElementById("fMarquez");

// when user clicks on footer links then value will store in local storage and that particular player will display
fRonaldo.addEventListener("click", () => {
    localStorage.setItem("player", 0)
})
fTendulkar.addEventListener("click", () => {
    localStorage.setItem("player", 3)
})
fFederer.addEventListener("click", () => {
    localStorage.setItem("player", 8)
})
fBolt.addEventListener("click", () => {
    localStorage.setItem("player", 23)
})
fTiger.addEventListener("click", () => {
    localStorage.setItem("player", 16)
})
fMarquez.addEventListener("click", () => {
    localStorage.setItem("player", 11)
})