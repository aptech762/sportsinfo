

// FOR PLAYER LINKS
var ronaldo = document.getElementById("ronaldo");
var messi = document.getElementById("messi");
var meridona = document.getElementById("meridona");
var tendulkar = document.getElementById("tendulkar");
var muralitharan = document.getElementById("muralitharan");
var bradman = document.getElementById("bradman");
var teddy = document.getElementById("teddy");
var yamashita = document.getElementById("yamashita");
var federer = document.getElementById("federer");
var nadal = document.getElementById("nadal");
var djokovic = document.getElementById("djokovic");
var marquez = document.getElementById("marquez");
var agostini = document.getElementById("agostini");
var kiralay = document.getElementById("kiralay");
var conte = document.getElementById("conte");
var zotto = document.getElementById("zotto");
var tigerWood = document.getElementById("tigerwood");
var carlsen = document.getElementById("carlsen");
var fischer = document.getElementById("fischer");
var reyes = document.getElementById("reyes");
var antonsen = document.getElementById("antonsen");
var momota = document.getElementById("momota");
var phelps = document.getElementById("phelps");
var bolt = document.getElementById("bolt");
var abbas = document.getElementById("abbas");
var playersInfo = document.getElementsByClassName("main-content")
var getPlayer = localStorage.getItem("player")
console.log(getPlayer)
// on page load we get the value that store in local storage to display that particular player on screen
window.addEventListener("load", () => {
    playersInfo[getPlayer].classList.add("show-player")
    console.log(getPlayer)
})

ronaldo.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 0)
})

messi.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 1)
})

meridona.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 2)
})

tendulkar.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 3)
})
muralitharan.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 4)
})
bradman.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 5)
})
teddy.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 6)
})
yamashita.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 7)
})
federer.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 8)
})
nadal.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 9)
})
djokovic.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 10)
})
marquez.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 11)
})
agostini.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 12)
})
kiralay.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 13)
})
conte.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 14)
})
zotto.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 15)
})
tigerWood.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 16)
})
carlsen.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 17)
})
fischer.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 18)
})
reyes.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 19)
})
antonsen.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 20)
})
momota.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 21)
})
phelps.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 22)
})
bolt.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 23)
})
abbas.addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 24)
})

// with this logic when user clicks sports on navbar then football will be display as a default sport
document.getElementById("nav-sport").addEventListener("click", () => {
    var local = localStorage.setItem("value", 0)
})

// This logic is used for search bar
document.getElementById("search-btn").addEventListener("click", () => {
    var filter = document.getElementById("search").value.toUpperCase();

    if (filter == "FOOTBALL") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 0)
    }
    if (filter == "CRICKET") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 1)
    }
    if (filter == "JUDO") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 2)
    }
    if (filter == "TENNIS") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 3)

    }
    if (filter == "MOTORCYCLE RACING" || filter == "RACING") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 4)
    }
    if (filter == "VOLLEYBALL" || filter == "VOLLEY") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 5)
    }
    if (filter == "GOLF") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 6)
    }
    if (filter == "CHESS") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 7)
    }
    if (filter == "BILLIARDS") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 8)
    }
    if (filter == "BADMINTON") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 9)
    }
    if (filter == "SWIMMING") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 10)
    }
    if (filter == "ATHLETICS") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 11)
    }
    if (filter == "HOCKEY") {
        window.location.href = "../PAGES/sports.html"
        var local = localStorage.setItem("value", 12)
    }
})


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