// this logic is used for changing the background color of navbar on scrolling/////

var myNav = document.getElementById("mynav");
window.addEventListener("scroll", () => {
    var scrollValue = window.scrollY

    if (scrollValue >= 102) {
        myNav.classList.add("changebg")
    } else {
        myNav.classList.remove("changebg")
    }
})

// with this logic when user clicks sports on navbar then football will be display as a default sport
document.getElementById("nav-sport").addEventListener("click", () => {
    var local = localStorage.setItem("value", 0)
})

// with this logic when user clicks players on navbar then ronaldo will be display as a default player
document.getElementById("nav-player").addEventListener("click", () => {
    var localTwo = localStorage.setItem("player", 0)
})


// this logic is used for dropdown menu for all sports
var dropDown = document.getElementById("showdropdown");
var list = document.getElementById("res-list");
var menu = document.getElementById("res-menu");
dropDown.addEventListener("click", () => {
    menu.classList.toggle("visible")
    list.classList.toggle("visible")

})
// this logic is used when visitor click on any sports then dropdown menu will close
list.addEventListener("click", () => {
    menu.classList.remove("visible")
    list.classList.remove("visible")
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









// with this logic value store in local storage and at sports page we get this value and particular sports will be display
document.getElementById("footballs").addEventListener("click", () => {
    var local = localStorage.setItem("value", 0)
})
document.getElementById("crickets").addEventListener("click", () => {
    var local = localStorage.setItem("value", 1)
})
document.getElementById("judos").addEventListener("click", () => {
    var local = localStorage.setItem("value", 2)
})
document.getElementById("tenniss").addEventListener("click", () => {
    var local = localStorage.setItem("value", 3)
})
document.getElementById("rac").addEventListener("click", () => {
    var local = localStorage.setItem("value", 4)
})
document.getElementById("volley").addEventListener("click", () => {
    var local = localStorage.setItem("value", 5)
})
document.getElementById("golfs").addEventListener("click", () => {
    var local = localStorage.setItem("value", 6)
})
document.getElementById("chesss").addEventListener("click", () => {
    var local = localStorage.setItem("value", 7)
})
document.getElementById("billi").addEventListener("click", () => {
    var local = localStorage.setItem("value", 8)
})
document.getElementById("badmintons").addEventListener("click", () => {
    var local = localStorage.setItem("value", 9)
})
document.getElementById("swimmings").addEventListener("click", () => {
    var local = localStorage.setItem("value", 10)
})
document.getElementById("athleticss").addEventListener("click", () => {
    var local = localStorage.setItem("value", 11)
})
document.getElementById("hockeys").addEventListener("click", () => {
    var local = localStorage.setItem("value", 12)
})




// with this logic when user click on "view more sports" button then sports page will open and football will show as a default sport
var moreSportsBtn = document.getElementById("moresportsbtn");
moreSportsBtn.addEventListener("click", () => {
    localStorage.setItem("value", 0)
})
// with this logic when user click on "view more players" button then players page will open and ronaldo will show as a default player
var morePlayersBtn = document.getElementById("moreplayersbtn");
morePlayersBtn.addEventListener("click", () => {
    localStorage.setItem("player", 0)
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


// this logic is used for cards on homepage 
// when user click on any card then that particular sport or player will show
// Sports Card
var foCard = document.getElementById("focard");
foCard.addEventListener("click", () => {
    window.location.href = "../PAGES/sports.html"
    localStorage.setItem("value", 0)
})

var cricCard = document.getElementById("cricard");
cricCard.addEventListener("click", () => {
    window.location.href = "../PAGES/sports.html"
    localStorage.setItem("value", 1)
})

var tCard = document.getElementById("tcard");
tCard.addEventListener("click", () => {
    window.location.href = "../PAGES/sports.html"
    localStorage.setItem("value", 3)
})

var athCard = document.getElementById("athcard");
athCard.addEventListener("click", () => {
    window.location.href = "../PAGES/sports.html"
    localStorage.setItem("value", 11)
})

// Players Card
var ronCard = document.getElementById("roncard");
ronCard.addEventListener("click", () => {
    window.location.href = "../PAGES/players.html"
    localStorage.setItem("player", 0)
})

var tenCard = document.getElementById("tencard");
tenCard.addEventListener("click", () => {
    window.location.href = "../PAGES/players.html"
    localStorage.setItem("player", 3)
})

var boltCard = document.getElementById("boltcard");
boltCard.addEventListener("click", () => {
    window.location.href = "../PAGES/players.html"
    localStorage.setItem("player", 23)
})

var fedCard = document.getElementById("fedcard");
fedCard.addEventListener("click", () => {
    window.location.href = "../PAGES/players.html"
    localStorage.setItem("player", 8)
})