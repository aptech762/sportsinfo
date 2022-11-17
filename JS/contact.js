// FORM VALIDATION
// Variables For Storing elements
var nam = document.getElementById("name");
var eMail = document.getElementById("email");
var eMailFormat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var message = document.getElementById("message");
var address = document.getElementById("address");
var errorN = document.getElementById("errorN");
var errorE = document.getElementById("errorE");
var errorA = document.getElementById("errorA");
var errorM = document.getElementById("errorM");
var submit = document.getElementById("submit");
var blurr = document.getElementById("blur");
var pop = document.getElementById("pop");
var ok = document.getElementById("ok");
console.log(errorN)
// Form validation on submit
submit.addEventListener("click", (e) => {
    e.preventDefault();
    //    For name
    if (nam.value.length < 3 || nam.value.match(/^[0-9.!#$%&'*+/=?^_`{|}~-]*$/)) {
        errorN.innerText = "Please Enter Valid Name"
    }
    //    For Email
    if (eMail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/) || eMail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*$/) || eMail.value=="") {
        errorE.innerText = "Please Enter Valid E-mail"
    }
    //    For Address
    if (address.value == "" || address.value.length<10) {
        errorA.innerText = "Please Enter Valid Address"
    }
    //    For message
    if (message.value.length < 20) {
        errorM.innerText = "Please Enter Your Message (at least 20 characters)"
    }
    //    If everthing is correct then all information will store in local storage
    if (nam.value.length >= 3 && nam.value.match(/^[a-zA-Z.!#$%&'*+/=?^_`{|}~-]*$/) && eMail.value.match(eMailFormat) && message.value.length >= 20 && address.value != "") {
        blurr.classList.add("overlayvisible")
        localStorage.setItem("name", nam.value)
        localStorage.setItem("email", eMail.value)
        localStorage.setItem("address", address.value)
        localStorage.setItem("message", message.value)
        pop.classList.add("overlayvisible")
    }
})

// with this logic when user click on ok button of popup then popup will close
ok.addEventListener("click", () => {
    blurr.classList.remove("overlayvisible");
    pop.classList.remove("overlayvisible");
    window.location.reload()
})




// this logic is used for removing error messages on focus
nam.addEventListener("focus", () => {
    errorN.innerText = ""
})
eMail.addEventListener("focus", () => {
    errorE.innerText = ""
})
message.addEventListener("focus", () => {
    errorM.innerText = ""
})
address.addEventListener("focus", () => {
    errorA.innerText = ""
})


// // with this logic value store in local storage and at sports page we get this value and particular sports will be display
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



// this logic is used for rating stars
var stars = document.getElementsByClassName("stars")
// for one star

document.getElementById("star-one").addEventListener("click", () => {
    stars[0].classList.add("fa-solid")
    for (i = 1; i < stars.length; i++) {
        stars[i].classList.remove("fa-solid")
    }
    document.getElementById("rat-desc").innerText = "Very Bad"
})
// for two stars
document.getElementById("star-two").addEventListener("click", () => {
    stars[0].classList.add("fa-solid")
    stars[1].classList.add("fa-solid")
    for (i = 2; i < stars.length; ++i) {
        stars[i].classList.remove("fa-solid")
    }
    document.getElementById("rat-desc").innerText = "Bad"
})
// for three stars
document.getElementById("star-three").addEventListener("click", () => {
    stars[0].classList.add("fa-solid")
    stars[1].classList.add("fa-solid")
    stars[2].classList.add("fa-solid")
    stars[3].classList.remove("fa-solid")
    stars[4].classList.remove("fa-solid")
    document.getElementById("rat-desc").innerText = "Average"
})
// for four stars
document.getElementById("star-four").addEventListener("click", () => {
    stars[0].classList.add("fa-solid")
    stars[1].classList.add("fa-solid")
    stars[2].classList.add("fa-solid")
    stars[3].classList.add("fa-solid")
    stars[4].classList.remove("fa-solid")
    document.getElementById("rat-desc").innerText = "Good"
})
// for five stars
document.getElementById("star-five").addEventListener("click", () => {
    for (i = 0; i < stars.length; ++i) {
        stars[i].classList.add("fa-solid")
    }
    document.getElementById("rat-desc").innerText = "Excellent"
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